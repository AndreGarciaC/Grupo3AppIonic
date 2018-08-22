import { Injectable } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';

//Firebase
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

//Providers
import {UsuarioProvider, Credenciales } from "../../providers/usuario/usuario";

@Injectable()
export class CargaArchivoProvider {

  user: Credenciales = {};
  imagenes: Archivo [] = [];
  lastKey: string = null;

  constructor(public toastCtrl: ToastController,
              public db: AngularFireDatabase,
              public _usuarioPrv: UsuarioProvider,) {

                this.iniciarUsuario( _usuarioPrv.devolverUsuario() );
                this.cargarUltimoKey().subscribe( ()=>this.leerXImagenes());
              }

  reiniciarImagenes(){
    this.imagenes = [];
  }

  iniciarUsuario( usuario: Credenciales ){
    this.user = usuario;
  }

  private cargarUltimoKey(){
    return this.db.list(`/items/${ this.user.uid }`, ref => ref.orderByKey().limitToLast(1))
      .valueChanges()
      .map( (item:any ) => {
        if (item.length>0){
          this.lastKey = item[0].key;
          this.imagenes.push( item[0] );
        }else{
          this.lastKey = null;
        }
      });
  }

  leerXImagenes(){
    return new Promise( (resolve, reject) => {
      if (this.lastKey == null){
        resolve(false);
        return;
      }else{
        this.db.list(`/items/${ this.user.uid }/`,
          ref =>
            ref.limitToLast(3)
                    .orderByKey()
                    .endAt(this.lastKey)
                  ).valueChanges().subscribe( (items:any )=>{
                    console.log("Item")
                    console.log(this.imagenes)
                    items.pop();

                    if (items.length == 0){
                        resolve(false);
                        return;
                    }

                    this.lastKey = items[0].key;
                    for ( let i = items.length-1 ; i >=0 ; i-- ){
                      this.imagenes.push(items[i]);
                    }

                    resolve(true);

                  });
       }
      });
  }

  cargarFirebase( archivo: Archivo ){
    let promesa = new Promise( (resolve, reject) => {
      this.mostrarToast('Cargando...')

      let storeRef = firebase.storage().ref();
      let nombreArchivo:string = new Date().valueOf().toString();

      let uploadTask: firebase.storage.UploadTask = storeRef.child(`img/${nombreArchivo}`).
        putString( archivo.img, 'base64', {contentType: 'image/*'});

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        () => {},
        (error) => {
          console.log("Error en la carga");
          console.log(JSON.stringify(error));
          this.mostrarToast(JSON.stringify(error));
          reject();
        },
        () => {
          this.mostrarToast('Imagen subida correctamente')
          let url = uploadTask.snapshot.downloadURL;
          this.crearPersonajeDB( archivo.titulo, url, archivo.descripcion, nombreArchivo );
          resolve();
        }
      )

    });
    return promesa;
  }

  private crearPersonajeDB( titulo:string, url:string, descripcion:string, nombreArchivo:string){
    let item: Archivo = {
      img: url,
      titulo: titulo,
      descripcion: descripcion,
      key: nombreArchivo
    };
    this.db.object(`/items/${ this.user.uid }/${ nombreArchivo }`).update(item).then( () => {
      this.reiniciarImagenes();
      this.imagenes.push(item);
    });
  }

  eliminarPersonaje(item: Archivo){
    return new Promise( (resolve, reject) => {
      this.db.object(`/items/${ this.user.uid }/${ item.key }`).remove().then( ()=> {
        console.log("Inicia borrado")
        this.reiniciarImagenes();
        resolve(true);
      });
    });
  }

  mostrarToast(mensaje:string){
    this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    }).present();
  }

}

interface Archivo{
  titulo: string,
  descripcion: string,
  img: string,
  key?: string
}
