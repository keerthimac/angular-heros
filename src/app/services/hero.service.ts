import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heros';
import { Hero } from '../hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeros(): Observable<Hero[]> {
    const heros = of(HEROES);
    this.messageService.add('HeroService: Fetched Heros');
    return heros;
  }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
