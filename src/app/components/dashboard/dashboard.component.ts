import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}

  getHeros() {
    this.heroService
      .getHeros()
      .subscribe((heros) => (this.heroes = heros.slice(1, 5)));
  }

  ngOnInit(): void {
    this.getHeros();
  }
}
