import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  placeHolders = new Hero(18, 'Dr.Q', this.powers[0], 'Chuck')

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }
}
