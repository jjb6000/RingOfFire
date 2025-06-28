import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';




@Component({
  selector: 'app-start-screen',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDividerModule, MatSlideToggleModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

  constructor(private router: Router) {

  }


  startGame() {
    this.router.navigateByUrl('game')
  }
}
