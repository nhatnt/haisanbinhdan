import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  regions: any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.loadRegions();
  }

  loadRegions() {
    this.searchService.loadRegion().subscribe(response => {
      this.regions = response;
      console.log(this.regions);
    }
    );

  }
}
