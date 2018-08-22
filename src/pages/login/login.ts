import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Autenticacion Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//provider
import {UsuarioProvider} from "../../providers/usuario/usuario";

//Paginas
import { TabsPage } from "../tabs/tabs";
import { MailLoginPage } from "../mail-login/mail-login";

//Facebook mobile
import { Platform, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,
              public _usuarioPrv: UsuarioProvider, private platform: Platform, private toastCtrl: ToastController) {

  }

  signInWithGooglePlus(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        this._usuarioPrv.cargarUsuario(res.user.displayName, res.user.email, res.user.photoURL, res.user.uid, 'google');
        this.navCtrl.setRoot(TabsPage);
        this.crearToast(this._usuarioPrv.usuario.nombre + " ha iniciado sesión",2500);
      }, error => {
        console.log(error)
        if (error.code == "auth/network-request-failed"){
          this.crearToast("Se ha perdido la conexión con Firebase", 3000);
        }
      });
  }

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        this._usuarioPrv.cargarUsuario(res.user.displayName, res.user.email, res.user.photoURL, res.user.uid, 'facebook');
          this.navCtrl.setRoot(TabsPage);
          this.crearToast(this._usuarioPrv.usuario.nombre + " ha iniciado sesión", 2500);
      }, error => {
        if (error.code == "auth/network-request-failed"){
          this.crearToast("Se ha perdido la conexión con Firebase", 3000);
        } else if (error.code == "auth/account-exists-with-different-credential") {
          this.crearToast("Su e-mail ya se encuentra registrado en nuestra base de datos. Por favor inicie sesión con su cuenta de Google+.", 3500);
        }
      });
  }

  signInWithMail() {
      this.navCtrl.push(MailLoginPage);
  }

  crearToast( mensaje: string, duracion: number ){
    this.toastCtrl.create({
      message: mensaje,
      duration: duracion,
      position: 'middle',
      cssClass: 'stxtStyle',
    }).present();
  }

}
