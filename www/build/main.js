webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Paginas


var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/tabs/tabs.html"*/'<ion-tabs tabsHighlight=true color="lightyellow">\n    <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserServiceProvider = /** @class */ (function () {
    function UserServiceProvider(http) {
        this.http = http;
        this.api_key = '290c91d2834435d07b24e7329d01456cf897d0a0';
    }
    //Obtener characteres
    UserServiceProvider.prototype.getCharacteres = function (personaje) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://www.comicvine.com/api/search/?api_key=' + _this.api_key + '&query=' + personaje + '&format=json&resources=character&limit=100')
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ;
    UserServiceProvider.prototype.getJsonCharacteres = function () {
        return this.http.get('assets/data/test2.json').map(function (res) { return res.json(); });
    };
    //Obtener character individual
    UserServiceProvider.prototype.getSelectedCharacter = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://www.comicvine.com/api/character/4005-' + id + '/?api_key=' + _this.api_key + '&format=json')
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ;
    UserServiceProvider.prototype.getJsonSelectedCharacter = function () {
        return this.http.get('assets/data/testPersonaje.json').map(function (res) { return res.json(); });
    };
    //Obtener poderes del character
    UserServiceProvider.prototype.getCharacterPower = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://www.comicvine.com/api/character/4035-' + id + '/?api_key=' + _this.api_key + '&format=json')
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ;
    UserServiceProvider.prototype.getJsonCharacterPower = function () {
        return this.http.get('assets/data/testPoder.json').map(function (res) { return res.json(); });
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//Busqueda de personaje
//https://comicvine.gamespot.com/api/character/4005-1699/?api_key=290c91d2834435d07b24e7329d01456cf897d0a0&format=json
//Busqueda de origen
//https://comicvine.gamespot.com/api/origins/?api_key=290c91d2834435d07b24e7329d01456cf897d0a0&format=json
//Busqueda de tipo
//https://comicvine.gamespot.com/api/types/?api_key=290c91d2834435d07b24e7329d01456cf897d0a0&format=json
//Busqueda de poderes
//https://comicvine.gamespot.com/api/power/4035-20/?api_key=290c91d2834435d07b24e7329d01456cf897d0a0&format=json
//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargaArchivoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Firebase



//Providers

var CargaArchivoProvider = /** @class */ (function () {
    function CargaArchivoProvider(toastCtrl, db, _usuarioPrv) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this._usuarioPrv = _usuarioPrv;
        this.user = {};
        this.imagenes = [];
        this.lastKey = null;
        this.iniciarUsuario(_usuarioPrv.devolverUsuario());
        this.cargarUltimoKey().subscribe(function () { return _this.leerXImagenes(); });
    }
    CargaArchivoProvider.prototype.reiniciarImagenes = function () {
        this.imagenes = [];
    };
    CargaArchivoProvider.prototype.iniciarUsuario = function (usuario) {
        this.user = usuario;
    };
    CargaArchivoProvider.prototype.cargarUltimoKey = function () {
        var _this = this;
        return this.db.list("/items/" + this.user.uid, function (ref) { return ref.orderByKey().limitToLast(1); })
            .valueChanges()
            .map(function (item) {
            if (item.length > 0) {
                _this.lastKey = item[0].key;
                _this.imagenes.push(item[0]);
            }
            else {
                _this.lastKey = null;
            }
        });
    };
    CargaArchivoProvider.prototype.leerXImagenes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.lastKey == null) {
                resolve(false);
                return;
            }
            else {
                _this.db.list("/items/" + _this.user.uid + "/", function (ref) {
                    return ref.limitToLast(3)
                        .orderByKey()
                        .endAt(_this.lastKey);
                }).valueChanges().subscribe(function (items) {
                    console.log("Item");
                    console.log(_this.imagenes);
                    items.pop();
                    if (items.length == 0) {
                        resolve(false);
                        return;
                    }
                    _this.lastKey = items[0].key;
                    for (var i = items.length - 1; i >= 0; i--) {
                        _this.imagenes.push(items[i]);
                    }
                    resolve(true);
                });
            }
        });
    };
    CargaArchivoProvider.prototype.cargarFirebase = function (archivo) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            _this.mostrarToast('Cargando...');
            var storeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
            var nombreArchivo = new Date().valueOf().toString();
            var uploadTask = storeRef.child("img/" + nombreArchivo).
                putString(archivo.img, 'base64', { contentType: 'image/*' });
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function () { }, function (error) {
                console.log("Error en la carga");
                console.log(JSON.stringify(error));
                _this.mostrarToast(JSON.stringify(error));
                reject();
            }, function () {
                _this.mostrarToast('Imagen subida correctamente');
                var url = uploadTask.snapshot.downloadURL;
                _this.crearPersonajeDB(archivo.titulo, url, archivo.descripcion, nombreArchivo);
                resolve();
            });
        });
        return promesa;
    };
    CargaArchivoProvider.prototype.crearPersonajeDB = function (titulo, url, descripcion, nombreArchivo) {
        var _this = this;
        var item = {
            img: url,
            titulo: titulo,
            descripcion: descripcion,
            key: nombreArchivo
        };
        this.db.object("/items/" + this.user.uid + "/" + nombreArchivo).update(item).then(function () {
            _this.reiniciarImagenes();
            _this.imagenes.push(item);
        });
    };
    CargaArchivoProvider.prototype.eliminarPersonaje = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.object("/items/" + _this.user.uid + "/" + item.key).remove().then(function () {
                console.log("Inicia borrado");
                _this.reiniciarImagenes();
                resolve(true);
            });
        });
    };
    CargaArchivoProvider.prototype.mostrarToast = function (mensaje) {
        this.toastCtrl.create({
            message: mensaje,
            duration: 2000
        }).present();
    };
    CargaArchivoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], CargaArchivoProvider);
    return CargaArchivoProvider;
}());

//# sourceMappingURL=carga-archivo.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_popover_popover__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, popoverCtrl, menuCtrl, event) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.menuCtrl = menuCtrl;
        this.event = event;
        this.tamanoFuente = "defecto";
        this.fondo = "classwhite";
        this.event.subscribe('fontsize', function (fsize) {
            _this.tamanoFuente = fsize;
        });
        this.event.subscribe('popbackground', function (bcolor) {
            _this.fondo = bcolor;
        });
    }
    InfoPage.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_popover_popover__["a" /* PopoverPage */], {}, { cssClass: 'popoverStyle' });
        popover.present({
            ev: ev
        });
    };
    InfoPage.prototype.abrirMenu = function () {
        this.menuCtrl.toggle();
    };
    InfoPage.prototype.changingFont = function () {
        console.log(this.tamanoFuente);
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/info/info.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title class="phStyle">Acerca de Excelsior!</ion-title>\n    <ion-buttons right>\n      <button ion-button\n              icon-only\n              (click)="presentPopover(event$)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons left>\n       <button ion-button icon-only (click)="abrirMenu()">\n           <ion-icon name="menu"></ion-icon>\n       </button>\n   </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="{{fondo}}">\n<p class="{{tamanoFuente}}">\n  Excelsior! La famosa palabra firma de Stan Lee, fue tomada de una frase del\n  escudo de armas del estado de Nueva York, una expresión inglesa que significa\n  “Upward and Onward to Greater Glory!” (Hacia arriba y hacia adelante por la gloria mayor).\n  Esta expresión fue la inspiración para nombrar a esta aplicación, desarrollada bajo el concepto\n  de una enciclopedia de personajes de comics DC, Marvel y otros de la cultura popular.\n  <br>\n  Excelsior! forma parte del proyecto final del curso de programación de aplicaciones\n  multiplataforma con Ionic.\n  <br>\n  Realizado por: Paúl Vintimilla - Andrea García / Universidad Politécnica Salesiana\n</p>\n</ion-content>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/info/info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mail_login_mail_login__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Autenticacion Firebase


//provider

//Paginas


//Facebook mobile

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, afAuth, _usuarioPrv, platform, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this._usuarioPrv = _usuarioPrv;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.signInWithGooglePlus = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (res) {
            _this._usuarioPrv.cargarUsuario(res.user.displayName, res.user.email, res.user.photoURL, res.user.uid, 'google');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            _this.crearToast(_this._usuarioPrv.usuario.nombre + " ha iniciado sesión", 2500);
        }, function (error) {
            console.log(error);
            if (error.code == "auth/network-request-failed") {
                _this.crearToast("Se ha perdido la conexión con Firebase", 3000);
            }
        });
    };
    LoginPage.prototype.signInWithFacebook = function () {
        var _this = this;
        this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider())
            .then(function (res) {
            _this._usuarioPrv.cargarUsuario(res.user.displayName, res.user.email, res.user.photoURL, res.user.uid, 'facebook');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            _this.crearToast(_this._usuarioPrv.usuario.nombre + " ha iniciado sesión", 2500);
        }, function (error) {
            if (error.code == "auth/network-request-failed") {
                _this.crearToast("Se ha perdido la conexión con Firebase", 3000);
            }
            else if (error.code == "auth/account-exists-with-different-credential") {
                _this.crearToast("Su e-mail ya se encuentra registrado en nuestra base de datos. Por favor inicie sesión con su cuenta de Google+.", 3500);
            }
        });
    };
    LoginPage.prototype.signInWithMail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mail_login_mail_login__["a" /* MailLoginPage */]);
    };
    LoginPage.prototype.crearToast = function (mensaje, duracion) {
        this.toastCtrl.create({
            message: mensaje,
            duration: duracion,
            position: 'middle',
            cssClass: 'stxtStyle',
        }).present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/login/login.html"*/'<ion-content padding text-center>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col class="top-20">\n        <img src="../../assets/imgs/app-logo.png" alt="No image found">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="top-20">\n        <h3 class="phStyle">Ionic loginapp</h3>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="top-5">\n\n        <button ion-button color="google" icon-left block (click)="signInWithGooglePlus()">\n          <ion-icon name="logo-google"></ion-icon>\n          Google\n        </button>\n\n        <button ion-button color="facebook" icon-left block (click)="signInWithFacebook()">\n          <ion-icon name="logo-facebook"></ion-icon>\n          Facebook\n        </button>\n\n        <button ion-button color="mail" icon-left block (click)="signInWithMail()">\n          <ion-icon name="mail"></ion-icon>\n          Mail\n        </button>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.verificationMail = function () {
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser;
        return user.sendEmailVerification();
    };
    AuthService.prototype.recoverPass = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthService.prototype.updateData = function (credentials) {
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser;
        return user.updateProfile({
            displayName: credentials.nombre,
            photoURL: "https://robohash.org/ionic"
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonajePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Providers

var PersonajePage = /** @class */ (function () {
    function PersonajePage(navCtrl, navParams, sanitizer, loadingCtrl, _userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.loadingCtrl = loadingCtrl;
        this._userService = _userService;
        this.subCharacteres = [];
        this.itemSeleccionado = navParams.get('itemSeleccionado');
        this.fuente = navParams.get('tipo');
        this.busqueda = navParams.get('busqueda');
        this.subCharacteres.push({ name: 'Amigos', children: this.itemSeleccionado.character_friends });
        this.subCharacteres.push({ name: 'Enemigos', children: this.itemSeleccionado.character_enemies });
        //this.video = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.itemSeleccionado.id.videoId);
        //Log de los datos que estan llegando de todo el personaje
        //console.log(this.itemSeleccionado)
    }
    PersonajePage_1 = PersonajePage;
    PersonajePage.prototype.toggleSection = function (i) {
        this.subCharacteres[i].open = !this.subCharacteres[i].open;
    };
    PersonajePage.prototype.seleccionarSubcharacter = function (subCharacter, i) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Buscando'
        });
        loading.present();
        try {
            this._userService.getJsonSelectedCharacter().subscribe(function (data) {
                //this._userService.getCharacteres(this.personajeBusqueda).then( data =>{
                _this.navCtrl.push(PersonajePage_1, {
                    busqueda: _this.busqueda,
                    itemSeleccionado: data['results'],
                    tipo: "ComicVine"
                });
                loading.dismiss();
                _this.subCharacteres[i].open = !_this.subCharacteres[i].open;
            });
        }
        catch (e) {
            console.log("Error: " + e);
        }
    };
    PersonajePage.prototype.agregarCharacter = function () {
        console.log(this.itemSeleccionado);
        this.navCtrl.pop();
    };
    PersonajePage = PersonajePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personaje',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/personaje/personaje.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="(fuente == \'ComicVine\')" class="phStyle">{{ itemSeleccionado.name }}</ion-title>\n    <ion-title *ngIf="(fuente == \'YouTube\')">Visualizar video</ion-title>\n    <ion-buttons>\n      <button ion-item (click)="agregarCharacter()" class="btStyle">\n        Agregar a mi perfil\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding *ngIf="(fuente == \'ComicVine\')" class="cvBackground">\n<img class="imgStyle" src="../assets/characters/slide1.jpg">\n  <ion-list class="accordion-list">\n    <ion-list-header *ngFor="let character of subCharacteres; let i = index" no-lines no-padding>\n        <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': character.open, \'section\': !character.open}" class="btStyle">\n          <ion-icon item-left name="arrow-forward" *ngIf="!character.open"></ion-icon>\n          <ion-icon item-left name="arrow-down" *ngIf="character.open"></ion-icon>\n          {{ character.name }}\n        </button>\n        <ion-list *ngIf="character.children && character.open" no-lines>\n          <ion-list-header *ngFor="let child of character.children" no-padding>\n            <button ion-item *ngIf="!child.children" detail-none class="child-item" (click)="seleccionarSubcharacter(child, i)" text-wrap class="btStyle">\n              <h2>{{ child.name }}</h2>\n            </button>\n          </ion-list-header>\n      </ion-list>\n    </ion-list-header>\n  </ion-list>\n\n</ion-content>\n\n<ion-content padding *ngIf="(fuente == \'YouTube\')">\n  <div class="video-container">\n    <iframe width="853" height="480" [src]="video" frameborder="0" allowfullscreen></iframe>\n  </div>\n  <h2>\n    {{ itemSeleccionado.snippet.title }}\n  </h2>\n</ion-content>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/personaje/personaje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], PersonajePage);
    return PersonajePage;
    var PersonajePage_1;
}());

//# sourceMappingURL=personaje.js.map

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 251;

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 293;

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_info_info__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, events) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.info = __WEBPACK_IMPORTED_MODULE_2__pages_info_info__["a" /* InfoPage */];
    }
    PopoverPage.prototype.changingFont = function (tamano) {
        this.events.publish('fontsize', tamano);
    };
    PopoverPage.prototype.changingBackground = function (color) {
        this.events.publish('popbackground', color);
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/popover/popover.html"*/'\n  <ion-list-header class="btStyle" color="comicyellow">Opciones</ion-list-header>\n  <ion-grid>\n  <ion-row justify-content-center>\n    <ion-col>\n      <button class="large"\n              ion-item\n              detail-none\n              (click)="changingFont(\'large\')"\n              text-center>\n              A\n      </button>\n    </ion-col>\n\n    <ion-col>\n      <button class="tiny"\n              ion-item\n              detail-none\n              (click)="changingFont(\'tiny\')"\n              text-center>\n              A\n      </button>\n    </ion-col>\n  </ion-row>\n\n    <ion-row padding justify-content-center>\n      <ion-col col-3>\n        <button (click)="changingBackground(\'classwhite\')"\n                ion-button="dot"\n                class="popover-dot-white">\n        </button>\n      </ion-col>\n\n      <ion-col col-3>\n        <button (click)="changingBackground(\'classtan\')"\n                ion-button="dot"\n                class="popover-dot-tan">\n        </button>\n      </ion-col>\n\n      <ion-col col-3>\n        <button (click)="changingBackground(\'classgray\')"\n                ion-button="dot"\n                class="popover-dot-grey">\n        </button>\n      </ion-col>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/popover/popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CongressPage = /** @class */ (function () {
    function CongressPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.map = __WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */];
    }
    CongressPage.prototype.GoToLocation = function (lat, lng) {
        this.navCtrl.push(this.map, {
            lat: lat, lng: lng
        });
    };
    CongressPage.prototype.abrirMenu = function () {
        this.menuCtrl.toggle();
    };
    CongressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-congress',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/congress/congress.html"*/'<!--\n  Generated template for the CongressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="phStyle">Eventos</ion-title>\n\n  <ion-buttons left>\n     <button ion-button icon-only (click)="abrirMenu()">\n         <ion-icon name="menu"></ion-icon>\n     </button>\n </ion-buttons>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item (click)="GoToLocation(32.70720, -117.162493)" class="eventname">\n      COMIC-CON\n      <p class="eventtxt" text-wrap>\n        Convención de comics (Julio)</p>\n      <p class="locationtxt" text-wrap>\n        Centro de convenciones de San Diego, San Diego, California</p>\n    </button>\n\n    <button ion-item (click)="GoToLocation(35.630273, 139.794188)" class="eventname">\n      COMIKET\n      <p class="eventtxt" text-wrap>\n        Mercado de historietas (Agosto y Diciembre)</p>\n      <p class="locationtxt">Centro de convenciones Tokyo Big Sight, Tokio, Japón</p>\n    </button>\n\n    <button ion-item (click)="GoToLocation(50.946758, 6.983276)" class="eventname">\n      GAMESCOM\n      <p class="eventtxt" text-wrap>\n        Convención de videojuegos (Agosto)</p>\n      <p class="locationtxt">Koelnmesse, Köln, Alemania</p>\n    </button>\n\n    <button ion-item (click)="GoToLocation(35.648508, 140.034744)" class="eventname">\n      TGS: Tokyo Game Show\n      <p class="eventtxt" text-wrap>\n        Convención de videojuegos (Septiembre)</p>\n      <p class="locationtxt">Makuhari Messe, Chiba, Japón</p>\n    </button>\n\n    <button ion-item (click)="GoToLocation(43.840974, 10.500785)" class="eventname">\n      Lucca Comics & Games\n      <p class="eventtxt" text-wrap>\n        Festival de comics y videojuegos (Octubre y Noviembre)</p>\n      <p class="locationtxt">Piazza San Romano, Lucca, Italia</p>\n    </button>\n\n    <button ion-item (click)="GoToLocation(48.972517, 2.516564)" class="eventname">\n      JAPAN EXPO\n      <p class="eventtxt" text-wrap>\n        Convención de cultura popular japonesa (Julio)</p>\n      <p class="locationtxt">Centro de Exposición París-Nord Villepinte, Villepinte, París</p>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/congress/congress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], CongressPage);
    return CongressPage;
}());

//# sourceMappingURL=congress.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapPage = /** @class */ (function () {
    function MapPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.lat = navParams.data.lat;
        this.lng = navParams.data.lng;
    }
    MapPage.prototype.cerrar_modal = function () {
        this.viewCtrl.dismiss();
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/map/map.html"*/'<ion-content>\n  <agm-map [latitude]="lat" [longitude]="lng" [zoom]="17">\n    <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>\n  </agm-map>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="comicyellow">\n    <ion-buttons end>\n      <button ion-button\n              (click)="cerrar_modal()"\n              class="btStyle">\n        Cerrar\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_carga_archivo_carga_archivo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_youtube_youtube__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__busqueda_busqueda__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__busqueda_youtube_busqueda_youtube__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Providers




// firebase

//paginas



//Clases
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _userService, loadingCtrl, _usuarioPrv, afAuth, menuCtrl, events, app, _cargaArchivoPvd, toastCtrl, _youtube) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._userService = _userService;
        this.loadingCtrl = loadingCtrl;
        this._usuarioPrv = _usuarioPrv;
        this.afAuth = afAuth;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.app = app;
        this._cargaArchivoPvd = _cargaArchivoPvd;
        this.toastCtrl = toastCtrl;
        this._youtube = _youtube;
        this.personajeBusqueda = '';
        this.user = {};
        this.fuente = "ComicVine";
        this.user = this._usuarioPrv.usuario;
        //Menu
        this.menuCtrl.enable(true);
        //Salir
        events.subscribe('user:login', function () {
            _this.salir();
        });
    }
    //Reactivar autoplay slides
    HomePage.prototype.ionViewWillEnter = function () {
        this.slides.startAutoplay();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.slides.stopAutoplay();
    };
    HomePage.prototype.buscarPersonaje = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Buscando'
        });
        loading.present();
        if (this.fuente == "ComicVine") {
            try {
                this._userService.getJsonCharacteres().subscribe(function (data) {
                    //this._userService.getCharacteres(this.personajeBusqueda).then( data =>{
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__busqueda_busqueda__["a" /* BusquedaPage */], {
                        busqueda: _this.personajeBusqueda,
                        data: data['results']
                    });
                    _this.personajeBusqueda = '';
                    loading.dismiss();
                });
            }
            catch (e) {
                console.log("Error: " + e);
            }
        }
        else {
            try {
                this._youtube.getVideo(this.personajeBusqueda).then(function (data) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__busqueda_youtube_busqueda_youtube__["a" /* BusquedaYoutubePage */], {
                        busqueda: _this.personajeBusqueda,
                        data: data['items']
                    });
                    _this.personajeBusqueda = '';
                    loading.dismiss();
                });
            }
            catch (e) {
                console.log("Error: " + e);
            }
        }
    };
    HomePage.prototype.salir = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.events.unsubscribe('user:login');
            _this._cargaArchivoPvd.reiniciarImagenes();
            _this.mostrarToast(_this.user.nombre + " ha cerrado sesión satisfactoriamente", 2500);
            _this._usuarioPrv.usuario = {};
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        });
    };
    HomePage.prototype.show_Menu = function () {
        this.menuCtrl.toggle();
    };
    HomePage.prototype.mostrarToast = function (mensaje, duracion) {
        this.toastCtrl.create({
            message: mensaje,
            duration: duracion
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title class="phStyle" text-center>Búsqueda de personajes</ion-title>\n\n    <ion-buttons left>\n      <button ion-button\n              icon-only\n              (click)="show_Menu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tabStyle" padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <ion-searchbar placeholder="Ingrese personaje..." [(ngModel)]="personajeBusqueda" (keyup.enter)="buscarPersonaje()"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item class="itemStyle">\n          <ion-label>Fuente:</ion-label>\n          <ion-select item-content [(ngModel)]="fuente" interface="popover" [disabled]="personajeBusqueda == \'\'">\n            <ion-option>ComicVine</ion-option>\n            <ion-option>YouTube</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <button ion-button\n            (click)="buscarPersonaje()"\n            onclick="document.getElementById(\'barra\').value = \'\'"\n            class="btStyle"\n            [disabled]="personajeBusqueda.length <= 0"\n            block\n            color="primary">\n            Buscar Personaje\n    </button>\n\n    <br>\n\n    <ion-slides loop="true" autoplay="2000">\n      <ion-slide *ngFor="let image of [1,2,3,4,5,6]">\n        <img class="slideStyle" data-src="../assets/characters/slide{{image}}.jpg">\n      </ion-slide>\n    </ion-slides>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_carga_archivo_carga_archivo__["a" /* CargaArchivoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_youtube_youtube__["a" /* YoutubeProvider */]])
    ], HomePage);
    return HomePage;
}());

/*interface Archivo{
  titulo: string,
  descripcion: string,
  img: string,
  key?: string
}*/
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubeProvider = /** @class */ (function () {
    function YoutubeProvider(http) {
        this.http = http;
        this.apiKey = 'AIzaSyAB0aXE_W_i73vSHaC2SFdGeFjjMC8j2jg';
    }
    YoutubeProvider.prototype.getVideo = function (video) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + video + '&type=video&maxResults=50&key=' + _this.apiKey)
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ;
    YoutubeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], YoutubeProvider);
    return YoutubeProvider;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Paginas


// Servicios

//Providers

var MailLoginPage = /** @class */ (function () {
    function MailLoginPage(navCtrl, auth, fb, alertCtrl, toastCtrl, _usuarioPrv) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this._usuarioPrv = _usuarioPrv;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    MailLoginPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials).then(function (res) {
            if (res.emailVerified) {
                _this._usuarioPrv.cargarUsuario(res.displayName, res.email, res.photoURL, res.uid, 'mail');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                _this.crearToast(_this._usuarioPrv.usuario.nombre + " ha iniciado sesión", 2500);
            }
            else {
                var uNoVerified = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: '¡Usuario no verificado! Por favor verifique su correo electrónico y vuelva a intentarlo.',
                    buttons: ['Aceptar']
                });
                uNoVerified.present();
            }
        }, function (error) {
            console.log(error.message);
            _this.loginError = "Usuario o contraseña incorrectos. En el caso de no poseer una cuenta, por favor cree una.";
        });
    };
    MailLoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    MailLoginPage.prototype.recoverAlert = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Recuperación de contraseña',
            message: "Por favor, ingrese su correo electrónico: ",
            inputs: [
                {
                    name: 'correo',
                    placeholder: 'Correo electrónico'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        _this.recoverPass(data.correo);
                    }
                }
            ]
        });
        prompt.present();
    };
    MailLoginPage.prototype.recoverPass = function (correo) {
        var _this = this;
        //Método Regex para validar contraseña
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //Solicitud para recuperación de correo
        if (re.test(String(correo).toLowerCase())) {
            this.auth.recoverPass(correo).then(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Por favor revise su bandeja de entrada en ' + correo,
                    duration: 3000,
                });
                toast.present(toast);
            })
                .catch(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: '¡Su correo no ha sido encontrado en nuestra base de datos! Por favor ingrese una opción correcta o cree una cuenta nueva.',
                    buttons: ['Aceptar']
                });
                alert.present();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Advertencia',
                subTitle: '¡Correo electrónico inválido! Por favor ingrese una opción correcta.',
                buttons: ['Aceptar']
            });
            alert_1.present();
        }
    };
    MailLoginPage.prototype.crearToast = function (mensaje, duracion) {
        this.toastCtrl.create({
            message: mensaje,
            duration: duracion,
            position: 'middle',
            cssClass: 'stxtStyle',
        }).present();
    };
    MailLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail-login',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/mail-login/mail-login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Iniciar sesión</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<form (ngSubmit)="login()" [formGroup]="loginForm">\n		<ion-list inset>\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n				<ion-input type="text" placeholder="E-mail" formControlName="email"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">Por favor ingrese un e-mail válido</div>\n			</div>\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="password" placeholder="Contraseña" formControlName="password"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">La contraseña debe tener al menos 5 carácteres</div>\n			</div>\n		</ion-list>\n\n		<div padding-horizontal>\n			<div class="form-error">{{loginError}}</div>\n\n			<button ion-button full type="submit" [disabled]="!loginForm.valid">Iniciar sesión</button>\n\n			<button ion-button icon-left block color="secondary" (click)="recoverAlert()">\n				<ion-icon name="key"></ion-icon>Recuperar contraseña</button>\n\n			<button ion-button icon-left block color="danger" (click)="signup()">\n				<ion-icon name="person-add"></ion-icon>Crear cuenta</button>\n\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/mail-login/mail-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], MailLoginPage);
    return MailLoginPage;
}());

//# sourceMappingURL=mail-login.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Paginas

// Servicios

var SignupPage = /** @class */ (function () {
    function SignupPage(fb, navCtrl, auth, toastCtrl) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.form = fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            nombre: data.nombre,
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function (res) {
            _this.auth.verificationMail().then(function () {
                _this.auth.updateData(credentials).then(function () {
                    var toast = _this.toastCtrl.create({
                        message: 'Usuario creado exitosamente. Por favor revise su bandeja de entrada en ' + credentials.email,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.onDidDismiss(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                    });
                    toast.present();
                }, function (error) {
                    console.log(error.message);
                });
            }, function (error) {
                console.log(error.message);
            });
        }, function (error) {
            console.log(error.message);
            _this.signupError = "El e-mail ingresado ya está siendo utilizada por otra cuenta.";
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Registro</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<form (ngSubmit)="signup()" [formGroup]="form">\n		<ion-list inset>\n\n			<ion-item [ngClass]="{ invalid: nombreErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="text" placeholder="Nombre" formControlName="nombre"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="nombre" #nombreErrors="ngxErrors">\n				<div [ngxError]="[\'nombre\', \'required\']" [when]="[\'touched\']">Por favor ingrese un nombre de usuario con al menos 4 caracteres</div>\n			</div>\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="text" placeholder="E-mail" formControlName="email"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">Por favor ingrese un e-mail válido</div>\n			</div>\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="password" placeholder="Contraseña" formControlName="password"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">La contraseña debe tener al menos 5 carácteres</div>\n			</div>\n		</ion-list>\n\n		<div padding-horizontal>\n			<div class="form-error">{{signupError}}</div>\n\n			<button ion-button full type="submit" [disabled]="!form.valid">Registrarse</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusquedaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personaje_personaje__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Paginas

//Providers

var BusquedaPage = /** @class */ (function () {
    function BusquedaPage(navCtrl, navParams, loadingCtrl, _userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this._userService = _userService;
        this.genero = "Todos";
        this.generoComic = 0;
        this.flagGenero = true;
        this.busqueda = navParams.get('busqueda');
        this.personajes = navParams.get('data');
        //"{{ personaje.image.icon_url }}"
    }
    BusquedaPage.prototype.personajeSeleccionado = function (personaje, slidingItem) {
        var _this = this;
        slidingItem.close();
        var loading = this.loadingCtrl.create({
            content: 'Buscando'
        });
        loading.present();
        try {
            this._userService.getJsonSelectedCharacter().subscribe(function (data) {
                //this._userService.getCharacteres(this.personajeBusqueda).then( data =>{
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__personaje_personaje__["a" /* PersonajePage */], {
                    busqueda: _this.busqueda,
                    itemSeleccionado: data['results'],
                    tipo: "ComicVine"
                });
                loading.dismiss();
            });
        }
        catch (e) {
            console.log("Error: " + e);
        }
    };
    BusquedaPage.prototype.cerrarSlide = function (slidingItem) {
        slidingItem.close();
    };
    BusquedaPage.prototype.personajeEliminado = function (personaje, slidingItem) {
        slidingItem.close();
        this.personajes.splice(this.personajes.indexOf(personaje, 0), 1);
    };
    BusquedaPage.prototype.seleccionGenero = function () {
        if (this.genero == "Masculino") {
            this.generoComic = 1;
            this.flagGenero = false;
        }
        else if (this.genero == "Femenino") {
            this.generoComic = 2;
            this.flagGenero = false;
        }
        else if (this.genero == "Otro") {
            this.generoComic = 3;
            this.flagGenero = false;
        }
        else {
            this.generoComic = 0;
            this.flagGenero = true;
        }
    };
    BusquedaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-busqueda',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/busqueda/busqueda.html"*/'<ion-header>\n  <ion-navbar color="comicyellow">\n    <ion-title class="phStyle2">Resultados para {{ busqueda }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div padding>\n    <ion-segment class="segmentStyle" [(ngModel)]="genero" (ionChange)="seleccionGenero()" color="dark">\n      <ion-segment-button value="Todos">\n        Todos\n      </ion-segment-button>\n      <ion-segment-button value="Masculino">\n        Masculino\n      </ion-segment-button>\n      <ion-segment-button value="Femenino">\n        Femenino\n      </ion-segment-button>\n      <ion-segment-button value="Otro">\n        Otros\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n<ion-list>\n  <ion-item-sliding #slidingItem *ngFor="let personaje of personajes">\n    <ion-item text-wrap *ngIf=" (personaje.gender == generoComic) || (flagGenero)">\n      <ion-avatar item-start>\n        <img src="">\n      </ion-avatar>\n      <h2 class="btStyle">{{ personaje.name }}</h2>\n      <h5 class="stxtStyle">{{ personaje.deck }}</h5>\n      <p class="stxtStyle">{{ personaje.publisher.name }}</p>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="azulTriston" (click)="personajeSeleccionado(personaje, slidingItem)">\n        <ion-icon name="eye"></ion-icon>\n        Detalles\n      </button>\n      <button ion-button color="yaMeArrepenti" (click)="cerrarSlide(slidingItem)">\n        <ion-icon name="close"></ion-icon>\n        Cancelar\n      </button>\n    </ion-item-options>\n    <ion-item-options side="left">\n      <button ion-button color="superPeligro" (click)="personajeEliminado(personaje, slidingItem)">\n        <ion-icon name="trash"></ion-icon>\n        Borrar\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/busqueda/busqueda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], BusquedaPage);
    return BusquedaPage;
}());

//# sourceMappingURL=busqueda.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusquedaYoutubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personaje_personaje__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Paginas

var BusquedaYoutubePage = /** @class */ (function () {
    function BusquedaYoutubePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.busqueda = navParams.get('busqueda');
        this.personajes = navParams.get('data');
    }
    BusquedaYoutubePage.prototype.personajeSeleccionado = function (personaje, slidingItem) {
        slidingItem.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__personaje_personaje__["a" /* PersonajePage */], {
            itemSeleccionado: personaje,
            tipo: "YouTube"
        });
    };
    BusquedaYoutubePage.prototype.cerrarSlide = function (slidingItem) {
        slidingItem.close();
    };
    BusquedaYoutubePage.prototype.personajeEliminado = function (personaje, slidingItem) {
        slidingItem.close();
        console.log("Eliminar");
        this.personajes.splice(this.personajes.indexOf(personaje, 0), 1);
    };
    BusquedaYoutubePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-busqueda-youtube',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/busqueda-youtube/busqueda-youtube.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Resultados en video para {{ busqueda }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding #slidingItem *ngFor="let personaje of personajes">\n      <ion-item text-wrap>\n        <ion-avatar item-start>\n          <img src="{{ personaje.snippet.thumbnails.default.url }}">\n        </ion-avatar>\n        <h2>{{ personaje.snippet.title }}</h2>\n        <p>{{ personaje.snippet.channelTitle }}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="azulTriston" (click)="personajeSeleccionado(personaje, slidingItem)">\n          <ion-icon name="play"></ion-icon>\n          Reproducir\n        </button>\n        <button ion-button color="yaMeArrepenti" (click)="cerrarSlide(slidingItem)">\n          <ion-icon name="close"></ion-icon>\n          Cancelar\n        </button>\n      </ion-item-options>\n      <ion-item-options side="left">\n        <button ion-button color="superPeligro" (click)="personajeEliminado(personaje, slidingItem)">\n          <ion-icon name="trash"></ion-icon>\n          Borrar\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/busqueda-youtube/busqueda-youtube.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BusquedaYoutubePage);
    return BusquedaYoutubePage;
}());

//# sourceMappingURL=busqueda-youtube.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_carga_archivo_carga_archivo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subir_subir__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Provider


//Paginas

//Firebase

var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, menuCtrl, _usuarioPrv, modalCtrl, _cargaArchivoPvd, alertCtrl, db) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this._usuarioPrv = _usuarioPrv;
        this.modalCtrl = modalCtrl;
        this._cargaArchivoPvd = _cargaArchivoPvd;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.user = {};
        this.scroll = true;
        this.flagReload = false;
        this.user = this._usuarioPrv.devolverUsuario();
        this.menuCtrl.enable(true);
    }
    ProfilePage.prototype.show_Menu = function () {
        this.menuCtrl.toggle();
    };
    ProfilePage.prototype.mostrarModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__subir_subir__["a" /* SubirPage */]);
        modal.onDidDismiss(function () { _this.navCtrl.setRoot(_this.navCtrl.getActive().component); });
        modal.present();
    };
    ProfilePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this._cargaArchivoPvd.leerXImagenes().then(function (flag) {
            _this.scroll = flag;
            infiniteScroll.complete();
        });
    };
    ProfilePage.prototype.compartirItem = function (item) {
        console.log(item);
    };
    ProfilePage.prototype.borrarItem = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación de elimicación',
            message: '¿Está seguro que desea eliminar este personaje?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this._cargaArchivoPvd.eliminarPersonaje(item).then(function (res) {
                            console.log(res + "borrado");
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="{{user.foto}}" width="40px" style="display:inline-block" height="40px"/>\n    <ion-title class="phStyle" text-center>\n      Bienvenido {{user.nombre}}\n    </ion-title>\n\n    <ion-buttons left>\n      <button ion-button\n              icon-only\n              (click)="show_Menu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tabStyle">\n\n  <ion-card *ngFor="let item of _cargaArchivoPvd.imagenes">\n\n    <ion-item>\n      <h2>{{ item.titulo }}</h2>\n    </ion-item>\n\n    <img src="{{ item.img }}">\n\n    <ion-card-content>\n      <p>{{ item.descripcion }}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col text-right>\n        <button ion-button clear small color="primary" icon-left (click)="compartirItem(item)">\n          <ion-icon name="share-alt"></ion-icon>\n          Compartir\n        </button>\n      </ion-col>\n      <ion-col text-left>\n        <button ion-button clear small color="primary" icon-left (click)="borrarItem(item)">\n          <ion-icon name="trash"></ion-icon>\n          Eliminar\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-fab bottom right (click)="mostrarModal()">\n    <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" [enabled]="scroll">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_carga_archivo_carga_archivo__["a" /* CargaArchivoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubirPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_carga_archivo_carga_archivo__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Camara

//Selector de imagenes

//Seleccion navegador web o app movil

//Providers

var SubirPage = /** @class */ (function () {
    function SubirPage(viewCtrl, camera, imagePicker, platform, _cargaArchivoPvd) {
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.platform = platform;
        this._cargaArchivoPvd = _cargaArchivoPvd;
        this.titulo = "";
        this.descripcion = "";
        this.imagenPreview = "";
        this.imagenWeb = null;
        this.navegador = true;
        if (!(this.platform.is('cordova'))) {
            this.navegador = false;
        }
    }
    SubirPage.prototype.cerrarModal = function () {
        this.viewCtrl.dismiss();
    };
    SubirPage.prototype.mostrarCamara = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
            _this.imagen64 = imageData;
        }, function (err) {
            console.log("Error en camara", JSON.stringify(err));
        });
    };
    SubirPage.prototype.seleccionarFoto = function () {
        var _this = this;
        var options = {
            quality: 70,
            outputType: 1,
            maximumImagesCount: 1
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.imagenPreview = 'data:image/jpeg;base64,' + results[i];
                _this.imagen64 = results[i];
            }
        }, function (err) {
            console.log("Error en el selector", JSON.stringify(err));
        });
    };
    SubirPage.prototype.seleccionarFotoWeb = function (event) {
        this.files = event.target.files;
        var reader = new FileReader();
        reader.onload = this._pass64.bind(this);
        reader.readAsBinaryString(this.files[0]);
    };
    SubirPage.prototype._pass64 = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.imagenPreview = 'data:image/jpeg;base64,' + btoa(binaryString);
        this.imagen64 = btoa(binaryString);
    };
    SubirPage.prototype.crearPersonaje = function () {
        var _this = this;
        var archivo = {
            img: this.imagen64,
            descripcion: this.descripcion,
            titulo: this.titulo
        };
        this._cargaArchivoPvd.cargarFirebase(archivo).then(function () { return _this.cerrarModal(); }).catch(function (err) { return console.log(JSON.stringify(err)); });
    };
    SubirPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subir',template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/subir/subir.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n\n        <ion-col>\n          <ion-buttons start>\n            <button ion-button (click)="cerrarModal()">\n              Cerrar\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col middle>\n          <ion-title>{{ titulo | placeHolder:\'Crear nuevo personaje\'}}</ion-title>\n        </ion-col>\n\n        <ion-col>\n          <ion-buttons end>\n            <button ion-button (click)="crearPersonaje()" [disabled]=" titulo.length <= 1 || descripcion.length <= 1 || imagenPreview.length <= 1">\n                Crear personaje\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Título</ion-label>\n      <ion-input type="text" [(ngModel)]="titulo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Descripción</ion-label>\n      <ion-textarea type="text" [(ngModel)]="descripcion"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf="imagenPreview" text-center>\n      <img [src]="imagenPreview" alt="">\n    </ion-item>\n\n  </ion-list>\n\n  <ion-grid>\n\n\n    <ion-row *ngIf="navegador">\n      <ion-col>\n        <button ion-button block icon-left (click)="seleccionarFoto()">\n          <ion-icon name="photos"></ion-icon>\n          &nbsp;Seleccionar\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block icon-left (click)="mostrarCamara()">\n          <ion-icon name="camera"></ion-icon>\n          &nbsp;Camara\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="!navegador">\n      <ion-col>\n        <ion-input type="file" accept="image/*" id="image_personaje" block (change)="seleccionarFotoWeb($event)"></ion-input>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/pages/subir/subir.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_carga_archivo_carga_archivo__["a" /* CargaArchivoProvider */]])
    ], SubirPage);
    return SubirPage;
}());

//# sourceMappingURL=subir.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(536);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ultimate_ngxerrors__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mail_login_mail_login__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_info_info__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_popover_popover__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_congress_congress__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_map_map__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_busqueda_busqueda__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_subir_subir__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_personaje_personaje__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_busqueda_youtube_busqueda_youtube__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_user_service_user_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_usuario_usuario__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_carga_archivo_carga_archivo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_youtube_youtube__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_auth_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_pipes_module__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_image_picker__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { NativePageTransitions } from '@ionic-native/native-page-transitions';

//Plugins


//Mapas

//Paginas














// Firebase



//Providers




//Services

//Pipes

//Camara

//Selector de imagenes

var firebaseConfig = {
    apiKey: "AIzaSyCaph57QnrS5QHx-BOIR3CJhGEAsFbCxyE",
    authDomain: "comicvinesearch.firebaseapp.com",
    databaseURL: "https://comicvinesearch.firebaseio.com",
    projectId: "comicvinesearch",
    storageBucket: "comicvinesearch.appspot.com",
    messagingSenderId: "59625022980"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mail_login_mail_login__["a" /* MailLoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_congress_congress__["a" /* CongressPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_busqueda_busqueda__["a" /* BusquedaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_subir_subir__["a" /* SubirPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_personaje_personaje__["a" /* PersonajePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_busqueda_youtube_busqueda_youtube__["a" /* BusquedaYoutubePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDOuuH7FoeH_9K2TXYp0bmPFpkS9rRtzQE'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mail_login_mail_login__["a" /* MailLoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_congress_congress__["a" /* CongressPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_busqueda_busqueda__["a" /* BusquedaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_subir_subir__["a" /* SubirPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_personaje_personaje__["a" /* PersonajePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_busqueda_youtube_busqueda_youtube__["a" /* BusquedaYoutubePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__providers_user_service_user_service__["a" /* UserServiceProvider */],
                //NativePageTransitions,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_28__providers_carga_archivo_carga_archivo__["a" /* CargaArchivoProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_youtube_youtube__["a" /* YoutubeProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_info_info__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_congress_congress__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, popoverCtrl, events) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        this.info = __WEBPACK_IMPORTED_MODULE_4__pages_info_info__["a" /* InfoPage */];
        this.congress = __WEBPACK_IMPORTED_MODULE_5__pages_congress_congress__["a" /* CongressPage */];
        this.tabs = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            _this.menuCtrl.enable(false);
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.logout = function () {
        this.events.publish('user:login');
        this.menuCtrl.close();
    };
    MyApp.prototype.paginaInfo = function () {
        this.rootPage = this.info;
        this.menuCtrl.close();
    };
    MyApp.prototype.paginaHome = function () {
        this.rootPage = this.tabs;
        this.menuCtrl.close();
    };
    MyApp.prototype.paginaCongress = function () {
        this.rootPage = this.congress;
        this.menuCtrl.close();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ups/AppIonic/proyectoIonic/grupo3/src/app/app.html"*/'<link href="https://fonts.googleapis.com/css?family=Bangers|Caveat|Caveat+Brush|Denk+One|Gaegu|Gloria+Hallelujah|Kalam|Kranky|Londrina+Shadow|Permanent+Marker|Viga" rel="stylesheet">\n\n<ion-menu class="sideMenu" [content]="content">\n  <ion-header>\n    <ion-toolbar color="comicgreen">\n      <ion-title class="phStyle">Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class="btStyle">\n    <ion-list>\n      <button ion-item (click)="paginaHome()">\n        <ion-icon name="home"></ion-icon>\n        Inicio\n      </button>\n      <button ion-item (click)="paginaCongress()">\n        <ion-icon name="people"></ion-icon>\n        Eventos\n      </button>\n      <button ion-item (click)="paginaInfo()">\n        <ion-icon name="information-circle"></ion-icon>\n        Acerca de\n      </button>\n      <button ion-item (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n        Cerrar sesión\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/home/ups/AppIonic/proyectoIonic/grupo3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider() {
        this.usuario = {};
    }
    UsuarioProvider.prototype.cargarUsuario = function (nombre, email, imagen, uid, provider) {
        this.usuario.nombre = nombre;
        this.usuario.email = email;
        this.usuario.imagen = imagen;
        this.usuario.uid = uid;
        this.usuario.provider = provider;
    };
    UsuarioProvider.prototype.devolverUsuario = function () {
        var user = {
            nombre: this.usuario.nombre,
            foto: this.usuario.imagen,
            uid: this.usuario.uid
        };
        return user;
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__place_holder_place_holder__ = __webpack_require__(714);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__place_holder_place_holder__["a" /* PlaceHolderPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__place_holder_place_holder__["a" /* PlaceHolderPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceHolderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaceHolderPipe = /** @class */ (function () {
    function PlaceHolderPipe() {
    }
    PlaceHolderPipe.prototype.transform = function (value, defecto) {
        if (defecto === void 0) { defecto = "Sin texto"; }
        return (value) ? value : defecto;
    };
    PlaceHolderPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'placeHolder',
        })
    ], PlaceHolderPipe);
    return PlaceHolderPipe;
}());

//# sourceMappingURL=place-holder.js.map

/***/ })

},[414]);
//# sourceMappingURL=main.js.map