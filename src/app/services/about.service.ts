import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AboutInfo } from '../models/about-model.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    return this.http.get<AboutInfo>('../assets/about.json').pipe(
      map(data => {
        data.info = data.info.replace(/\n/g, '<br>');
        return data;
      })
    );
  }
}
