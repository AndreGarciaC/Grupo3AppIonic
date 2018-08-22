import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private user: firebase.User;

	constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
	}

	signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
	}

  signUp(credentials) {
	   return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  verificationMail() {
    var user = firebase.auth().currentUser;
    return user.sendEmailVerification();
  }

  recoverPass(email: string){
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  updateData(credentials){
    var user = firebase.auth().currentUser;
    return user.updateProfile({
      displayName: credentials.nombre,
      photoURL: "https://robohash.org/ionic"});
  }

}
