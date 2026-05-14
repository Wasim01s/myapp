import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonInput,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-strike-rate',
  templateUrl: './strike-rate.page.html',
  styleUrls: ['./strike-rate.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    FormsModule
  ]
})

export class StrikeRatePage {

  runs: number | null = null;
  balls: number | null = null;

  result = '';

  calculateStrikeRate() {

    if (
      this.runs !== null &&
      this.balls !== null &&
      this.balls > 0
    ) {

      let sr =
        (this.runs / this.balls) * 100;

      this.result =
        'Strike Rate: ' + sr.toFixed(2);

    } else {

      this.result =
        'Please enter valid details';

    }

  }

}
