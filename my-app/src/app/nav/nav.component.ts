import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginData: any;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.login();
  }

  login(): any {
    this.heroService.login().subscribe(response => {
      this.loginData = response;
      console.log(this.loginData);
    });
  }

}
