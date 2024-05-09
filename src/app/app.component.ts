import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HerosComponent } from './components/heros/heros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HerosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tour of Heros';
}
