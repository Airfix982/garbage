import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { ItalicTextDirective } from '../directives/italic-text.directive';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AboutInfo } from '../models/about-model.interface';
import { MyPipePipe } from '../pipes/my-pipe.pipe';
import { pathErrorInterceptor } from '../interceptors/path-error.interceptor';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [ItalicTextDirective, MyPipePipe],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
  providers:
  [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: pathErrorInterceptor,
      multi: true
    }
  ]
})
export class AboutPageComponent  implements OnInit 
{
  about: string = '';
  about_pipe: string = '';
  constructor(private aboutService: AboutService, private http: HttpClient) { }

  ngOnInit() {
    this.aboutService.getInfo().subscribe(data => {
      this.about = data.info;
    }); 
    
    this.http.get<any>('../assets/info1.json').subscribe(data => {
      this.about_pipe = data.info;});
  }
}
