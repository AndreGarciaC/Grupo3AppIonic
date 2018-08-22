import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

//Providers
import { UserServiceProvider } from "../../providers/user-service/user-service";

@Component({
  selector: 'page-personaje',
  templateUrl: 'personaje.html',
})
export class PersonajePage {

  itemSeleccionado: any;
  fuente: string;
  busqueda: string;
  video: any;
  subCharacteres: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private sanitizer: DomSanitizer,
              public loadingCtrl: LoadingController,
              public _userService: UserServiceProvider) {
    this.itemSeleccionado = navParams.get('itemSeleccionado');
    this.fuente = navParams.get('tipo');
    this.busqueda = navParams.get('busqueda');
    this.subCharacteres.push({name: 'Amigos', children: this.itemSeleccionado.character_friends})
    this.subCharacteres.push({name: 'Enemigos', children: this.itemSeleccionado.character_enemies})
    //this.video = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.itemSeleccionado.id.videoId);
    //Log de los datos que estan llegando de todo el personaje
    //console.log(this.itemSeleccionado)
  }

  toggleSection(i) {
    this.subCharacteres[i].open = !this.subCharacteres[i].open;
  }

  seleccionarSubcharacter( subCharacter: any, i ){
    let loading = this.loadingCtrl.create({
      content: 'Buscando'
    });
    loading.present();

    try {
      this._userService.getJsonSelectedCharacter().subscribe( data => {
      //this._userService.getCharacteres(this.personajeBusqueda).then( data =>{
        this.navCtrl.push( PersonajePage , {
          busqueda: this.busqueda,
          itemSeleccionado: data['results'],
          tipo: "ComicVine"
        });
        loading.dismiss()
        this.subCharacteres[i].open = !this.subCharacteres[i].open;
      });
    } catch (e) {
      console.log("Error: "+e);
    }
  }

  agregarCharacter(){
    console.log(this.itemSeleccionado)
    this.navCtrl.pop();
  }


}
