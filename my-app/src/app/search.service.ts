import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }
  loadRegion(): any {
    return this.httpClient.get(Constants.CORS + Constants.REGION_URL);
  }
}
