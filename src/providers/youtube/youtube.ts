import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeProvider {

  apiKey = 'AIzaSyAB0aXE_W_i73vSHaC2SFdGeFjjMC8j2jg';

  constructor(public http: Http) {
  }

  getVideo( video: string ) {
    return new Promise( (resolve,reject)=>{
      this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+video+'&type=video&maxResults=50&key='+this.apiKey)
      .map(res => res.json()).subscribe(data => {
              resolve(data);
            }, err => {
              console.log(err);
            });
    })
  };

}
