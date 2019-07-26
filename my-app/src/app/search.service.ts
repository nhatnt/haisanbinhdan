import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/constants';
import { Observable } from 'rxjs';
import { Province } from './model/province';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }
  loadRegion(): Observable<any[]>  {
    return this.httpClient.get<any[]>(Constants.CORS + Constants.REGION_URL);
  }
}
