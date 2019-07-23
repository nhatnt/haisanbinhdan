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
  dataProvince: Province[];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.loadRegions();

  }

  loadRegions():void {
    this.searchService.loadRegion().subscribe((response) => {
      this.dataProvince = response;
      console.log(this.dataProvince);
    }
    );
  }
}
