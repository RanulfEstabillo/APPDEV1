import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { FormsModule } from '@angular/forms'
import {

  /** ... */
  NgFor, NgIf, UpperCasePipe
  /** ... */

} from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [
    NgFor, NgIf, FormsModule, UpperCasePipe
  ]
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?:Hero;
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }
  }


