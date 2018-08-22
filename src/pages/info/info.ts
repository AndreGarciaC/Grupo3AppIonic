import { Component } from '@angular/core';
import { NavController, MenuController, Events } from 'ionic-angular';
import { PopoverPage } from "../../pages/popover/popover";
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  tamanoFuente: string = "defecto";
  fondo: string = "classwhite";
  popoverpage:any;


  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController, public menuCtrl: MenuController, public event: Events) {
    this.event.subscribe('fontsize', (fsize)=>{
      this.tamanoFuente = fsize;
    })
    this.event.subscribe('popbackground', (bcolor)=>{
      this.fondo = bcolor;
    })
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverPage,{},{cssClass:'popoverStyle'});
    popover.present({
      ev: ev
    });
  }

  abrirMenu() {
      this.menuCtrl.toggle();
    }

  changingFont(){
    console.log(this.tamanoFuente);
  }


}
