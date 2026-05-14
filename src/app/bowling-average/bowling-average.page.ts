import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonInput,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-bowling-average',
  templateUrl: './bowling-average.page.html',
  styleUrls: ['./bowling-average.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    FormsModule
  ]
})

export class BowlingAveragePage {

  runs: number | null = null;
  wickets: number | null = null;

  result = '';

  calculateAverage() {

    if (
      this.runs !== null &&
      this.wickets !== null &&
      this.wickets > 0
    ) {

      let avg =
        this.runs / this.wickets;

      this.result =
        'Bowling Average: ' + avg.toFixed(2);

    } else {

      this.result =
        'Please enter valid details';

    }

  }

}
