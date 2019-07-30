import { Province } from './../model/province';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { HttpResponse } from '@angular/common/http';
import * as $ from 'jquery';
declare var $: any;
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
  wards = [];
  provinceName: String;
  provinceId: Number;

  showProvince = true;
  showArea = false;
  showWard = false;

  mapProvince = new Map();

  areaName: String;
  areaId: Number;

  wardName: String;
  wardId: Number;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.loadRegions();
  }

  //load danh sach tinh/thanh pho
  loadRegions() {
    this.provinceName = "Toàn quốc";
    this.searchService.loadRegion().subscribe((response) => {
      this.data = Object.entries(response);
      this.all = this.data[0][1];
      for (let i = 0; i < this.all.length; i++) {
        this.listProvinces.push(Object.entries(this.all[i]));
      }

      for (let i = 0; i < this.listProvinces.length; i++) {
        let province = { id: +this.listProvinces[i][0][0], value: this.listProvinces[i][0][1].name }
        this.provinces.push(province);
        this.mapProvince.set(this.listProvinces[i][0][0], this.listProvinces[i][0][1]);
      }
    }
    );
  }

  backToProvince() {
    this.showArea = false;
    this.showProvince = true;
    this.showWard = false;

    $(document).ready(function () {
      $('#btnProvince').dropdown('show');
    })
  }

  backToArea() {
    this.showArea = true;
    this.showProvince = false;
    this.showWard = false;

    $(document).ready(function () {
      $('#btnArea').dropdown('show');
    })
  }

  // load danh sach quan/huyen
  loadAreaByName(province: any) {
    this.areaName = province.value;
    this.showArea = true;
    this.showProvince = false;
    this.areas = [];
    this.provinceName = province.value;
    this.provinceId = province.id;
    let data = this.mapProvince.get(this.provinceId.toString());

    if (data != null) {
      for (let i = 0; i < data.area.length; i++) {
        this.areas.push({ id: +(Object.keys(data.area[i]))[0], value: (Object.values(data.area[i]))[0] });
      }
    }

    $(document).ready(function () {
      $('#btnArea').dropdown('show');
    })

  }

  saveCurrentArea(area: any) {
    this.areaName = area.value;
    this.areaId = area.id;
    console.log(this.areaId + '-' + this.areaName);
    this.getWard(area.id.toString());
  }

  saveWard(ward: any) {
    this.wardName = ward.name;
    this.wardId = ward.id;
    console.log('area:' + this.areaName  + '-'+ this.areaId+ 'ward:' + this.wardName + '-' + this.wardId);
  }

  getWard(wardId: string) {
    this.searchService.loadWard(wardId).subscribe((response: any) => {
      this.wards = response.wards;
      console.log(response);
      this.showArea = false;
      this.showProvince = false;
      this.showWard = true;
      $(document).ready(function () {
        $('#btnWard').dropdown('show');
      });
      this.wardName = this.areaName;
    });
  }

  showTextAll() {
    this.provinceName = "Toàn quốc";
  }
  
}
