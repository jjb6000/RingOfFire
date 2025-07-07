import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PlayerDialog } from '../player-dialog/player-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GameInfoComponent } from '../game-info/game-info.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-game',
  imports: [CommonModule, PlayerComponent, MatIconModule, MatButtonModule, MatDialogModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickedCardAnimation = false;
  game: Game | undefined
  currentCard: string | undefined;
  
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PlayerDialog);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.game?.players.push(result)
      }
    });
  }

  ngOnInit() {
    this.newGame()
  }

  newGame() {
    this.game = new Game()
  }


  checkReadyPickCard() {
    if (this.game && this.game.players.length > 1) {
      this.pickCard();
    } 
  }


  pickCard() {
    this.currentCard = this.game?.stack.pop();
    if (this.currentCard) this.game?.playedCards.push(this.currentCard);
    setTimeout(() => {
      if (this.game) {
        this.game.currentPlayer === this.game.players.length - 1 ? this.game.currentPlayer = 0 : this.game.currentPlayer++
      }
    }, 800);
  }

}







