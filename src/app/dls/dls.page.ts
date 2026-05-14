import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonButton,
  IonInput,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dls',
  templateUrl: './dls.page.html',
  styleUrls: ['./dls.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    FormsModule,
    CommonModule
  ]
})

export class DlsPage {

  matchOvers: number | null = null;
  team1Score: number | null = null;

  result = '';

  innings1 = [
    {
      sr: 1,
      oversBowled: null,
      runsScored: null,
      wickets: null,
      oversLost: null
    }
  ];

  innings2 = [
    {
      sr: 1,
      oversBowled: null,
      runsScored: null,
      wickets: null,
      oversLost: null
    }
  ];

  addRow1() {

    this.innings1.push({
      sr: this.innings1.length + 1,
      oversBowled: null,
      runsScored: null,
      wickets: null,
      oversLost: null
    });

  }

  addRow2() {

    this.innings2.push({
      sr: this.innings2.length + 1,
      oversBowled: null,
      runsScored: null,
      wickets: null,
      oversLost: null
    });

  }

  removeRow1(index: number) {

    this.innings1.splice(index, 1);

  }

  removeRow2(index: number) {

    this.innings2.splice(index, 1);

  }

  calculateDLS() {

    if (
      this.matchOvers &&
      this.team1Score
    ) {

      let totalOversLost = 0;

      this.innings2.forEach((row: any) => {

        if (row.oversLost) {

          totalOversLost += row.oversLost;

        }

      });

      let revisedOvers =
        this.matchOvers - totalOversLost;

      let target =
        ((this.team1Score * revisedOvers)
        / this.matchOvers) + 1;

      this.result =
        'Revised Target: '
        + Math.round(target);

    } else {

      this.result =
        'Please enter all details';

    }

  }

}
