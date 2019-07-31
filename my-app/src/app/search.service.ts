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

  loadListByWard(provinceId: string, areaId: string,wardId: string): Observable<any[]> {
    let params = new HttpParams();
    params = params.append('region_v2', provinceId);
    params = params.append('area_v2', areaId);
    params= params.append('cg', '1020');
    params = params.append('ward', wardId);
    params = params.append('st', 's,k');
    params = params.append('limit', '100');

    return this.httpClient.get<any[]>(Constants.CORS + Constants.LIST_URL, { params });
  }
}
