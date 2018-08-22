import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding, LoadingController } from 'ionic-angular';

//Paginas
import { PersonajePage } from "../personaje/personaje";

//Providers
import { UserServiceProvider } from "../../providers/user-service/user-service";


@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  personajes: any;
  busqueda: string;
  genero: string = "Todos";
  generoComic: number = 0;
  flagGenero: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public _userService: UserServiceProvider) {
    this.busqueda = navParams.get('busqueda');
    this.personajes = navParams.get('data');
    //"{{ personaje.image.icon_url }}"
  }

  personajeSeleccionado( personaje: any, slidingItem: ItemSliding ){
    slidingItem.close();
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
      });
    } catch (e) {
      console.log("Error: "+e);
    }
  }

  cerrarSlide(slidingItem: ItemSliding ){
    slidingItem.close();
  }

  personajeEliminado( personaje: any, slidingItem: ItemSliding ){
    slidingItem.close();
    this.personajes.splice(this.personajes.indexOf(personaje, 0),1);
  }

  seleccionGenero(){
    if (this.genero == "Masculino"){
      this.generoComic = 1;
      this.flagGenero = false;
    }else if(this.genero == "Femenino"){
      this.generoComic = 2;
      this.flagGenero = false;
    }else if(this.genero == "Otro"){
      this.generoComic = 3;
      this.flagGenero = false;
    }else{
      this.generoComic = 0;
      this.flagGenero = true;
    }
  }

}
