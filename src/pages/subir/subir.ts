import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

//Camara
import { Camera, CameraOptions } from '@ionic-native/camera';

//Selector de imagenes
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

//Seleccion navegador web o app movil
import { Platform } from 'ionic-angular';

//Providers
import { CargaArchivoProvider } from "../../providers/carga-archivo/carga-archivo";

@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  titulo: string = "";
  descripcion: string = "";
  imagenPreview: string = "";
  imagen64:string;
  imagenWeb: File = null;
  navegador: boolean = true;
  files: FileList;

  constructor(private viewCtrl: ViewController,
              private camera: Camera,
              private imagePicker: ImagePicker,
              private platform: Platform,
              public _cargaArchivoPvd: CargaArchivoProvider) {

                if (!(this.platform.is('cordova'))){
                  this.navegador = false;
                }
  }

  cerrarModal() {
    this.viewCtrl.dismiss();
  }

  mostrarCamara() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
     this.imagen64 = imageData;
    }, (err) => {
     console.log("Error en camara", JSON.stringify(err));
    });
  }

  seleccionarFoto(){

    let options:ImagePickerOptions = {
      quality: 70,
      outputType: 1,
      maximumImagesCount: 1
    }

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          this.imagenPreview = 'data:image/jpeg;base64,' + results[i];
          this.imagen64 = results[i];
      }
    }, (err) => {
      console.log("Error en el selector", JSON.stringify(err))
    });
  }

  seleccionarFotoWeb(event){
    this.files = event.target.files;
        var reader = new FileReader();
        reader.onload = this._pass64.bind(this);
        reader.readAsBinaryString(this.files[0]);
  }

  _pass64(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.imagenPreview = 'data:image/jpeg;base64,' + btoa(binaryString);
        this.imagen64 = btoa(binaryString);
   }

  crearPersonaje(){
    let archivo = {
      img: this.imagen64,
      descripcion: this.descripcion,
      titulo: this.titulo
    }

    this._cargaArchivoPvd.cargarFirebase(archivo).then(()=>this.cerrarModal()).catch(err=>console.log(JSON.stringify(err)));
  }

}
