import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-game',
  imports: [CommonModule, PlayerComponent, MatIconModule, MatButtonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickedCardAnimation = false;
  game: Game | undefined
  currentCard: string | undefined;
  readonly dialog = inject(MatDialog);
  readonly dialogRef = inject(MatDialogRef<AddPlayerDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly name = model(this.data.name);

  constructor() { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerDialog, {
      data: { name: this.name() },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.name.set(result);
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


export class AddPlayerDialog {
  readonly dialogRef = inject(MatDialogRef<AddPlayerDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly name = model(this.data.name);

  onNoClick(): void {
    this.dialogRef.close();
  }
}




