import { Component, ViewChild } from '@angular/core';
import { App, NavController, LoadingController, MenuController, Events, ToastController, Slides } from 'ionic-angular';

//Providers
import { UserServiceProvider } from "../../providers/user-service/user-service";
import {UsuarioProvider, Credenciales} from "../../providers/usuario/usuario";
import { CargaArchivoProvider } from "../../providers/carga-archivo/carga-archivo";
import { YoutubeProvider } from "../../providers/youtube/youtube";

// firebase
import { AngularFireAuth } from 'angularfire2/auth';

//paginas
import { LoginPage } from "../login/login";
import { BusquedaPage } from "../busqueda/busqueda";
import { BusquedaYoutubePage } from "../busqueda-youtube/busqueda-youtube";

//Clases
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personajeBusqueda: string = '';
  user: Credenciales = {};
  fuente: string ="ComicVine"

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,
              public _userService: UserServiceProvider,
              public loadingCtrl: LoadingController,
              public _usuarioPrv: UsuarioProvider,
              private afAuth: AngularFireAuth,
              private menuCtrl: MenuController,
              public events: Events,
              private app: App,
              public _cargaArchivoPvd: CargaArchivoProvider,
              public toastCtrl: ToastController,
              public _youtube: YoutubeProvider) {

                this.user = this._usuarioPrv.usuario;

                //Menu
                this.menuCtrl.enable(true);

                //Salir
                events.subscribe('user:login', () => {
                    this.salir();
                  });
  }

  //Reactivar autoplay slides
  ionViewWillEnter(){
    this.slides.startAutoplay();
  }

  ionViewWillLeave(){
    this.slides.stopAutoplay();
  }

  buscarPersonaje(){
    let loading = this.loadingCtrl.create({
      content: 'Buscando'
    });
    loading.present();

    if (this.fuente == "ComicVine"){
      try {
        this._userService.getJsonCharacteres().subscribe( data => {
        //this._userService.getCharacteres(this.personajeBusqueda).then( data =>{
          this.navCtrl.push( BusquedaPage , {
            busqueda: this.personajeBusqueda,
            data: data['results']
          });
          this.personajeBusqueda='';
          loading.dismiss()
        });
      } catch (e) {
        console.log("Error: "+e);
      }
    } else{
      try{
        this._youtube.getVideo(this.personajeBusqueda).then( data =>{
          this.navCtrl.push( BusquedaYoutubePage , {
            busqueda: this.personajeBusqueda,
            data: data['items']
          });
          this.personajeBusqueda='';
          loading.dismiss()
        });
      } catch (e) {
        console.log("Error: "+e);
      }
    }
  }

  salir(){
    this.afAuth.auth.signOut().then( () =>{
      this.events.unsubscribe('user:login');
      this._cargaArchivoPvd.reiniciarImagenes();
      this.mostrarToast(this.user.nombre + " ha cerrado sesión satisfactoriamente", 2500)
      this._usuarioPrv.usuario = {};
      this.app.getRootNav().setRoot(LoginPage);
    });
  }

  show_Menu() {
    this.menuCtrl.toggle();
  }

  mostrarToast( mensaje:string, duracion:number ){
    this.toastCtrl.create({
      message: mensaje,
      duration: duracion
    }).present();
  }

}

/*interface Archivo{
  titulo: string,
  descripcion: string,
  img: string,
  key?: string
}*/
