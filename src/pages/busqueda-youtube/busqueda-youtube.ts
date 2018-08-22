import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding } from 'ionic-angular';

//Paginas

import { PersonajePage } from "../personaje/personaje";

@Component({
  selector: 'page-busqueda-youtube',
  templateUrl: 'busqueda-youtube.html',
})
export class BusquedaYoutubePage {

  personajes: any;
  busqueda: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.busqueda = navParams.get('busqueda');
    this.personajes = navParams.get('data');
  }

  personajeSeleccionado( personaje: any, slidingItem: ItemSliding ){
    slidingItem.close();
    this.navCtrl.push( PersonajePage , {
      itemSeleccionado: personaje,
      tipo: "YouTube"
    });
  }

  cerrarSlide(slidingItem: ItemSliding ){
    slidingItem.close();
  }

  personajeEliminado( personaje: any, slidingItem: ItemSliding ){
    slidingItem.close();
    console.log("Eliminar")
    this.personajes.splice(this.personajes.indexOf(personaje, 0),1);
  }


}
