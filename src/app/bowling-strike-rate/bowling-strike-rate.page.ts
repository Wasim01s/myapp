import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonInput,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-bowling-strike-rate',
  templateUrl: './bowling-strike-rate.page.html',
  styleUrls: ['./bowling-strike-rate.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    FormsModule
  ]
})

export class BowlingStrikeRatePage {

  balls: number | null = null;
  wickets: number | null = null;

  result = '';

  calculateStrikeRate() {

    if (
      this.balls !== null &&
      this.wickets !== null &&
      this.wickets > 0
    ) {

      let sr =
        this.balls / this.wickets;

      this.result =
        'Bowling Strike Rate: ' + sr.toFixed(2);

    } else {

      this.result =
        'Please enter valid details';

    }

  }

}
