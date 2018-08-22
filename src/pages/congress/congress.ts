import { Component } from '@angular/core';
import { NavController, NavParams, MenuController} from 'ionic-angular';
import {MapPage} from "../map/map";

@Component({
  selector: 'page-congress',
  templateUrl: 'congress.html',
})
export class CongressPage {
  map: any = MapPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  GoToLocation(lat:number, lng:number){
    this.navCtrl.push(this.map, {
            lat,lng
        });
  }

  abrirMenu() {
      this.menuCtrl.toggle();
    }

}
