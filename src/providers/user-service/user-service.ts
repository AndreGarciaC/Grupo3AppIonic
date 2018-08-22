import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceProvider {

  api_key: string = '290c91d2834435d07b24e7329d01456cf897d0a0';
  constructor(public http: Http) {}

  //Obtener characteres

  getCharacteres( personaje: string ) {
    return new Promise( (resolve,reject)=>{
      this.http.get('http://www.comicvine.com/api/search/?api_key='+this.api_key+'&query='+personaje+'&format=json&resources=character&limit=100')
      .map(res => res.json()).subscribe(data => {
              resolve(data);
            }, err => {
              console.log(err);
            });
    })
  };

  getJsonCharacteres() :any{
    return this.http.get('assets/data/test2.json').map(res => res.json());
  }

  //Obtener character individual

  getSelectedCharacter( id: string ) {
    return new Promise( (resolve,reject)=>{
      this.http.get('http://www.comicvine.com/api/character/4005-'+id+'/?api_key='+this.api_key+'&format=json')
      .map(res => res.json()).subscribe(data => {
              resolve(data);
            }, err => {
              console.log(err);
            });
    })
  };

  getJsonSelectedCharacter() :any{
    return this.http.get('assets/data/testPersonaje.json').map(res => res.json());
  }

  //Obtener poderes del character

  getCharacterPower( id: string ) {
    return new Promise( (resolve,reject)=>{
      this.http.get('http://www.comicvine.com/api/character/4035-'+id+'/?api_key='+this.api_key+'&format=json')
      .map(res => res.json()).subscribe(data => {
              resolve(data);
            }, err => {
              console.log(err);
            });
    })
  };

  getJsonCharacterPower() :any{
    return this.http.get('assets/data/testPoder.json').map(res => res.json());
  }

}

//Busqueda de personaje
//https://comicvine.gamespot.com/api/character/4005-1699/?api_key=290c91d2834435d07b24e7329d01456cf897d0a0&format=json

//Busqueda de origen
//https://comicvine.gamespot.com/api/origins/?api_key=290c91d2834435d07b24e7329d01456cf897d0a0&format=json

//Busqueda de tipo
//https://comicvine.gamespot.com/api/types/?api_key=290c91d2834435d07b24e7329d01456cf897d0a0&format=json

//Busqueda de poderes
//https://comicvine.gamespot.com/api/power/4035-20/?api_key=290c91d2834435d07b24e7329d01456cf897d0a0&format=json
