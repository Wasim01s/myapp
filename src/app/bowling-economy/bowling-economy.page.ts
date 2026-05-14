import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonInput,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-bowling-economy',
  templateUrl: './bowling-economy.page.html',
  styleUrls: ['./bowling-economy.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    FormsModule
  ]
})

export class BowlingEconomyPage {

  runs: number | null = null;
  overs: number | null = null;

  result = '';

  calculateEconomy() {

    if (
      this.runs !== null &&
      this.overs !== null &&
      this.overs > 0
    ) {

      let eco =
        this.runs / this.overs;

      this.result =
        'Economy Rate: ' + eco.toFixed(2);

    } else {

      this.result =
        'Please enter valid details';

    }

  }

}
