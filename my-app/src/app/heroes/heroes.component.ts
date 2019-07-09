import { Hero } from './../model/hero';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    this.heroService.getHero().subscribe(heroes => this.heroes = heroes);
  }
}
