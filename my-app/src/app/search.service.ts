import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constants } from 'src/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClient: HttpClient) { }
  loadRegion(): Observable<any[]> {
    return this.httpClient.get<any[]>(Constants.CORS + Constants.REGION_URL);
  }

  loadWard(wardId: string): Observable<any[]> {
    const params = new HttpParams().set('area', wardId);
    return this.httpClient.get<any[]>(Constants.CORS + Constants.WARD_URL, { params });
  }
}
