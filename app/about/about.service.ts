import { Injectable } from '@angular/core';
import { AboutInfo } from './about.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {

    constructor(private http: Http) {
      console.log('spr2');
    }
    getAbout () : string {
        return this.http.get('/api/about')
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(res.json());
        console.log("sprawdzam");
        return body || { };
  }



}
