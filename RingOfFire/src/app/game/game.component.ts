import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, inject, model, signal } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PlayerDialog } from '../player-dialog/player-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-game',
  imports: [CommonModule, PlayerComponent, MatIconModule, MatButtonModule, MatDialogModule],
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
      console.log('The dialog was closed');
      if (result) {
        console.log('name:',result);
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


  pickCard() {
    this.currentCard = this.game?.stack.pop();
    if (this.currentCard) this.game?.playedCards.push(this.currentCard);
  }
}







