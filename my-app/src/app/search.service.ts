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
  loadRegion(): Observable<Province[]>  {
    return this.httpClient.get<Province[]>(Constants.CORS + Constants.REGION_URL);
  }
}
