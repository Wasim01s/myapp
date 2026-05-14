import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonInput,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-over-run-rate',
  templateUrl: './over-run-rate.page.html',
  styleUrls: ['./over-run-rate.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    FormsModule
  ]
})

export class OverRunRatePage {

  runs: number | null = null;
  overs: number | null = null;

  result = '';

  calculateRunRate() {

    if (
      this.runs !== null &&
      this.overs !== null &&
      this.overs > 0
    ) {

      let rr =
        this.runs / this.overs;

      this.result =
        'Over Run Rate: ' + rr.toFixed(2);

    } else {

      this.result =
        'Please enter valid details';

    }

  }

}
