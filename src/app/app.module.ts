import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { MyApp } from './app.component';

//Plugins
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { HttpModule } from '@angular/http';
//Mapas
import { AgmCoreModule } from '@agm/core';

//Paginas
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from "../pages/login/login";
import { MailLoginPage } from "../pages/mail-login/mail-login";
import { InfoPage } from "../pages/info/info";
import { PopoverPage } from "../pages/popover/popover";
import { CongressPage } from "../pages/congress/congress";
import { MapPage } from "../pages/map/map";
import { TabsPage } from "../pages/tabs/tabs";
import { ProfilePage } from "../pages/profile/profile";
import { BusquedaPage } from "../pages/busqueda/busqueda";
import { SubirPage } from "../pages/subir/subir";
import { PersonajePage } from "../pages/personaje/personaje";
import { BusquedaYoutubePage } from "../pages/busqueda-youtube/busqueda-youtube";

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Providers
import { UserServiceProvider } from "../providers/user-service/user-service";
import { UsuarioProvider } from '../providers/usuario/usuario';
import { CargaArchivoProvider } from '../providers/carga-archivo/carga-archivo';
import { YoutubeProvider } from '../providers/youtube/youtube';

//Services
import { AuthService } from '../services/auth.service';

//Pipes
import { PipesModule } from "../pipes/pipes.module";

//Camara
import { Camera } from '@ionic-native/camera';

//Selector de imagenes
import { ImagePicker } from '@ionic-native/image-picker';

export const firebaseConfig = {
    apiKey: "AIzaSyCaph57QnrS5QHx-BOIR3CJhGEAsFbCxyE",
    authDomain: "comicvinesearch.firebaseapp.com",
    databaseURL: "https://comicvinesearch.firebaseio.com",
    projectId: "comicvinesearch",
    storageBucket: "comicvinesearch.appspot.com",
    messagingSenderId: "59625022980"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MailLoginPage,
    SignupPage,
    InfoPage,
    PopoverPage,
    CongressPage,
    MapPage,
    TabsPage,
    ProfilePage,
    BusquedaPage,
    SubirPage,
    PersonajePage,
    BusquedaYoutubePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxErrorsModule,
    PipesModule,
    AgmCoreModule.forRoot({
  apiKey: 'AIzaSyDOuuH7FoeH_9K2TXYp0bmPFpkS9rRtzQE'
})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MailLoginPage,
    SignupPage,
    InfoPage,
    PopoverPage,
    CongressPage,
    MapPage,
    TabsPage,
    ProfilePage,
    BusquedaPage,
    SubirPage,
    PersonajePage,
    BusquedaYoutubePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserServiceProvider,
    //NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    AngularFireAuthModule,
    AngularFireDatabase,
    AuthService,
    ImagePicker,
    Camera,
    CargaArchivoProvider,
    YoutubeProvider
    ]
})
export class AppModule {}
