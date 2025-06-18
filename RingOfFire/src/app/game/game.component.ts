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
  pickedCardAnimation = false;
  game: Game | undefined
  currentCard: string | undefined;

  constructor() { }

  ngOnInit() {
    this.newGame()
  }

  newGame() {
    this.game = new Game()
  }


  pickCard() {
    this.currentCard = this.game?.stack.pop();
    if (this.currentCard) this.game?.playedCards.push(this.currentCard);
  }
}
