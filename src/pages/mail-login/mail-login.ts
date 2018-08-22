import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Paginas
import { TabsPage } from "../tabs/tabs";
import { SignupPage } from '../signup/signup';

// Servicios
import { AuthService } from '../../services/auth.service';

//Providers
import {UsuarioProvider} from "../../providers/usuario/usuario";

@Component({
  selector: 'page-mail-login',
  templateUrl: 'mail-login.html',
})
export class MailLoginPage {

    loginForm: FormGroup;
  	loginError: string;

  	constructor(private navCtrl: NavController,
  		          private auth: AuthService,
  		          private fb: FormBuilder,
                public alertCtrl: AlertController,
                public toastCtrl: ToastController,
                public _usuarioPrv: UsuarioProvider) {

                    this.loginForm = fb.group({
  			                 email: ['', Validators.compose([Validators.required, Validators.email])],
  			                 password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  		              });
    }

    login() {

		    let data = this.loginForm.value;

	      if (!data.email) {
			       return;
        }

		    let credentials = {
			       email: data.email,
			       password: data.password
		    };

        this.auth.signInWithEmail(credentials).then(res => {
          if (res.emailVerified){
            this._usuarioPrv.cargarUsuario(res.displayName, res.email, res.photoURL, res.uid, 'mail');
            this.navCtrl.setRoot(TabsPage);
            this.crearToast(this._usuarioPrv.usuario.nombre + " ha iniciado sesión",2500);
            
          }else{
            const uNoVerified = this.alertCtrl.create({
              title: 'Error',
              subTitle: '¡Usuario no verificado! Por favor verifique su correo electrónico y vuelva a intentarlo.',
              buttons: ['Aceptar']
            });
            uNoVerified.present();
          }
        },error => {
          console.log(error.message);
          this.loginError = "Usuario o contraseña incorrectos. En el caso de no poseer una cuenta, por favor cree una."
        });
    }

    signup(){
      this.navCtrl.push(SignupPage);
    }

    recoverAlert(){
      const prompt = this.alertCtrl.create({
        title: 'Recuperación de contraseña',
        message: "Por favor, ingrese su correo electrónico: ",
        inputs: [
          {
            name: 'correo',
            placeholder: 'Correo electrónico'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
          },
          {
            text: 'Enviar',
            handler: data => {
              this.recoverPass(data.correo);
            }
          }
        ]
      });
      prompt.present();
    }

    recoverPass(correo: string){
      //Método Regex para validar contraseña
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //Solicitud para recuperación de correo
      if (re.test(String(correo).toLowerCase())){

        this.auth.recoverPass(correo).then(() => {
          let toast = this.toastCtrl.create({
              message: 'Por favor revise su bandeja de entrada en '+correo,
              duration: 3000,
            });

        toast.present(toast);

        })
        .catch(() => {
          const alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: '¡Su correo no ha sido encontrado en nuestra base de datos! Por favor ingrese una opción correcta o cree una cuenta nueva.',
            buttons: ['Aceptar']
          });
          alert.present();
        })

      }else{
        const alert = this.alertCtrl.create({
          title: 'Advertencia',
          subTitle: '¡Correo electrónico inválido! Por favor ingrese una opción correcta.',
          buttons: ['Aceptar']
        });
        alert.present();
      }
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
