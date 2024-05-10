import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HerosComponent } from './components/heros/heros.component';
import { MessagesComponent } from './components/messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HerosComponent, MessagesComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tour of Heros';
}
