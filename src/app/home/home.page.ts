import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonFooter,
  IonToolbar
} from '@ionic/angular/standalone';

import { RouterLink } from '@angular/router';

import {
  AdMob,
  BannerAdPosition,
  BannerAdSize
} from '@capacitor-community/admob';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonFooter,
    IonToolbar,
    FormsModule,
    RouterLink
  ],
})

export class HomePage {

  runs = 0;
  balls = 0;
  result = '';

  isDark = true;

  constructor() {

    this.showBanner();

  }

  toggleTheme() {

    this.isDark = !this.isDark;

    if (this.isDark) {

      document.body.classList.add('dark');

    } else {

      document.body.classList.remove('dark');

    }

  }

  async showBanner() {

    await AdMob.showBanner({

      adId:
        'ca-app-pub-3940256099942544/6300978111',

      adSize: BannerAdSize.BANNER,

      position: BannerAdPosition.BOTTOM_CENTER

    });

  }

  calculateStrikeRate() {

    if (this.balls > 0) {

      let sr = (this.runs / this.balls) * 100;

      this.result = 'Strike Rate: ' + sr.toFixed(2);

    } else {

      this.result = 'Enter valid balls';

    }

  }

}
