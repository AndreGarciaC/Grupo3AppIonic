import { Component } from '@angular/core';
import { NavController, Events} from 'ionic-angular';

import { InfoPage } from "../../pages/info/info";

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  info: any = InfoPage;

  constructor(public navCtrl: NavController, public events:Events) {
  }

  changingFont(tamano:string){
    this.events.publish('fontsize', tamano);
  }

  changingBackground(color: any) {
    this.events.publish('popbackground', color);
}
}
