import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { AsyncPipe } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDividerModule, RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  title = 'RingOfFire';
}
