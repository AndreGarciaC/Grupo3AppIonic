import { Component } from '@angular/core';
import { MenuController, ModalController, NavController, AlertController } from 'ionic-angular';

//Provider
import {UsuarioProvider, Credenciales} from "../../providers/usuario/usuario";
import { CargaArchivoProvider } from "../../providers/carga-archivo/carga-archivo";

//Paginas
import { SubirPage } from "../subir/subir";

//Firebase
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: Credenciales = {};
  scroll: boolean = true;
  flagReload: boolean = false;

  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController,
              public _usuarioPrv: UsuarioProvider,
              private modalCtrl: ModalController,
              public _cargaArchivoPvd: CargaArchivoProvider,
              private alertCtrl: AlertController,
              public db: AngularFireDatabase) {

          this.user = this._usuarioPrv.devolverUsuario();
          this.menuCtrl.enable(true);
  }

    show_Menu() {
    this.menuCtrl.toggle();
  }

  mostrarModal() {
    let modal = this.modalCtrl.create( SubirPage );
    modal.onDidDismiss(() => { this.navCtrl.setRoot(this.navCtrl.getActive().component) });
    modal.present();
  }

  doInfinite(infiniteScroll) {
    this._cargaArchivoPvd.leerXImagenes().then( (flag:boolean )=>{
      this.scroll = flag;
      infiniteScroll.complete();
    });
  }

  compartirItem( item: any ){
    console.log(item);
  }

  borrarItem( item: any ){
    let alert = this.alertCtrl.create({
    title: 'Confirmación de elimicación',
    message: '¿Está seguro que desea eliminar este personaje?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
          this._cargaArchivoPvd.eliminarPersonaje(item).then( (res) => {
            console.log(res+"borrado")
            this.navCtrl.setRoot(this.navCtrl.getActive().component)
          });
        }
      }
    ]
  });
  alert.present();

  }

}
