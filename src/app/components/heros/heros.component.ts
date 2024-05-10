import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    HeroDetailComponent,
    RouterLink,
  ],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css',
})
export class HerosComponent {
  heros: Hero[] = [];
  hero?: Hero;
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HerosComponent: Selected hero id=${hero.id}`);
  }

  getHeros() {
    this.heroService.getHeros().subscribe((heros) => (this.heros = heros));
  }

  ngOnInit(): void {
    this.getHeros();
  }
}
