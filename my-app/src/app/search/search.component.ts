import { Province } from './../model/province';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { HttpResponse } from '@angular/common/http';

interface DataResponse {
  id: number;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  regions: any;
  data = [];
  all = [];
  listProvinces = [];
  provinces = [];
  areas = [];
  provinceName: String;
  provinceId: Number;
  showArea = false;

  constructor(private searchService: SearchService) { }
  mapProvince = new Map();
  ngOnInit() {
    this.loadRegions();

  }

  loadRegions(): void {
    this.searchService.loadRegion().subscribe((response) => {
      this.data = Object.entries(response);
      this.all = this.data[0][1];
      for (let i = 0; i < this.all.length; i++) {
        this.listProvinces.push(Object.entries(this.all[i]));
      }
      // console.log((this.listProvinces));

      for (let i = 0; i < this.listProvinces.length; i++) {
        let province = { id: +this.listProvinces[i][0][0], value: this.listProvinces[i][0][1].name }
        this.provinces.push(province);
        this.mapProvince.set(this.listProvinces[i][0][0], this.listProvinces[i][0][1]);
      }
    }
    );
  }

  loadArea($event: any) {
    this.showArea = true;
    //clear old value
    this.areas = [];

    this.provinceId = $event.target.value;
    this.provinceName = $event.target.selectedOptions[0].text;


    let data = this.mapProvince.get(this.provinceId);
    if (data != null) {
      for (let i = 0; i < data.area.length; i++) {
        this.areas.push({ id: +(Object.keys(data.area[i]))[0], value: (Object.values(data.area[i]))[0] });
      }
      console.log(this.areas);
    }

  }

  back($event: any) {
    if (this.provinceId === $event.target.value) {
      this.showArea = false;
    }
  }
}
