import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-player',
  imports: [CommonModule, MatChipsModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {

  @Input()players: string[] = []

  @Input()currentPlayer: number = 0

}
