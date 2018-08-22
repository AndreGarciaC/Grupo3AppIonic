import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Paginas
import { LoginPage } from "../login/login";

// Servicios
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    signupError: string;
  	form: FormGroup;

  	constructor(private fb: FormBuilder,
            		private navCtrl: NavController,
                private auth: AuthService,
                private toastCtrl: ToastController){

  		this.form = fb.group({
        nombre: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
  			email: ['', Validators.compose([Validators.required, Validators.email])],
  			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  		});
  }

  signup() {
		let data = this.form.value;
		let credentials = {
      nombre: data.nombre,
			email: data.email,
			password: data.password
		};

		this.auth.signUp(credentials).then(res => {
      this.auth.verificationMail().then(()=>{
        this.auth.updateData(credentials).then(()=>{
          let toast = this.toastCtrl.create({
            message: 'Usuario creado exitosamente. Por favor revise su bandeja de entrada en '+credentials.email,
            duration: 3000,
            position: 'middle'
          });

          toast.onDidDismiss(() => {
            this.navCtrl.setRoot(LoginPage)
          });
          toast.present();
        }, error => {
          console.log(error.message);
        });
      }, error => {
        console.log(error.message);
      });
    }, error => {
      console.log(error.message);
      this.signupError = "El e-mail ingresado ya está siendo utilizada por otra cuenta.";
    });
}

}
