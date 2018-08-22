import { Component } from '@angular/core';
import { ViewController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  lat: number;
  lng: number;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {

   this.lat=navParams.data.lat;
   this.lng=navParams.data.lng;

  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

}
