import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonInput,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-run-rate',
  templateUrl: './run-rate.page.html',
  styleUrls: ['./run-rate.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    FormsModule
  ]
})

export class RunRatePage {

  runsScored: number | null = null;
  oversFaced: number | null = null;

  runsConceded: number | null = null;
  oversBowled: number | null = null;

  result = '';

  calculateNRR() {

    if (
      this.runsScored !== null &&
      this.oversFaced !== null &&
      this.runsConceded !== null &&
      this.oversBowled !== null &&
      this.oversFaced > 0 &&
      this.oversBowled > 0
    ) {

      let battingRR =
        this.runsScored / this.oversFaced;

      let bowlingRR =
        this.runsConceded / this.oversBowled;

      let nrr =
        battingRR - bowlingRR;

      this.result =
        'Net Run Rate: ' + nrr.toFixed(3);

    } else {

      this.result =
        'Please enter valid details';

    }

  }

}
