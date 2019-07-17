import { Constants } from './../constants';
import { MessageService } from './message.service';
import { Hero } from './model/hero';
import { HEROES } from './model/mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  CORS = 'https://cors-anywhere.herokuapp.com/';
  data: any;
  url = "https://jsonplaceholder.typicode.com/users/2";
  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient) { }

  getHero(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHeroDetail(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getFake(): any {
    return this.httpClient.get(this.url);
  }

  login(): any {
    let urlLogin = this.CORS + 'http://203.190.173.215:9025/uaa/v1/users/login';
    let body = {
      "username": "ctyvietnhat",
      "password": "123456@Vtr"
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'en'
      })
    };
    return this.httpClient.post(urlLogin, body, httpOptions);
  }

  loadRegion(): any{
    return this.httpClient.get(Constants.CORS + Constants.REGION_URL); 
  }

}
