import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../mock-heros';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor,NgIf],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css',
})
export class HerosComponent {
  heros: Hero[] = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
