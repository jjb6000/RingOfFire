import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickedCard = false;
  game: Game | undefined

  constructor() {}
  
  ngOnInit() {
    this.newGame()
  }

  newGame() {
    this.game = new Game()
  }


  pickCard() {
    this.pickedCard = true;
  }
}
