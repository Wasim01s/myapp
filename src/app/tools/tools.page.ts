import { Component } from '@angular/core';

import {
  IonContent,
  IonButton
} from '@ionic/angular/standalone';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    RouterLink
  ]
})

export class ToolsPage {

}
