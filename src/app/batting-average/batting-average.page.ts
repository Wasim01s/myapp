import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonInput,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-batting-average',
  templateUrl: './batting-average.page.html',
  styleUrls: ['./batting-average.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    FormsModule
  ]
})

export class BattingAveragePage {

  runs: number | null = null;
  outs: number | null = null;

  result = '';

  calculateAverage() {

    if (
      this.runs !== null &&
      this.outs !== null &&
      this.outs > 0
    ) {

      let avg =
        this.runs / this.outs;

      this.result =
        'Batting Average: ' + avg.toFixed(2);

    } else {

      this.result =
        'Please enter valid details';

    }

  }

}
