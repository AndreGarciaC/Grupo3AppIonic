import { Component } from '@angular/core';
import { Platform, MenuController, Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PopoverController } from 'ionic-angular';

//Paginas
import { LoginPage} from "../pages/login/login";
import { InfoPage } from "../pages/info/info";
import {CongressPage} from "../pages/congress/congress";
import {TabsPage} from "../pages/tabs/tabs";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  info: any = InfoPage;
  congress: any = CongressPage;
  tabs: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              public popoverCtrl: PopoverController,
              public events: Events) {

    platform.ready().then(() => {

      this.menuCtrl.enable(false);

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  logout(){
    this.events.publish('user:login');
    this.menuCtrl.close();
  }

  paginaInfo() {
    this.rootPage = this.info;
    this.menuCtrl.close();
  }

  paginaHome(){
    this.rootPage = this.tabs;
    this.menuCtrl.close();
  }

  paginaCongress(){
    this.rootPage = this.congress;
    this.menuCtrl.close();
  }


}
