import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'strike-rate',
    loadComponent: () =>
      import('./strike-rate/strike-rate.page').then((m) => m.StrikeRatePage),
  },

  {
    path: 'dls',
    loadComponent: () =>
      import('./dls/dls.page').then((m) => m.DlsPage),
  },

  {
    path: 'run-rate',
    loadComponent: () =>
      import('./run-rate/run-rate.page').then((m) => m.RunRatePage),
  },

  {
    path: 'tools',
    loadComponent: () =>
      import('./tools/tools.page').then((m) => m.ToolsPage),
  },

  {
    path: 'batting-average',
    loadComponent: () =>
      import('./batting-average/batting-average.page')
      .then((m) => m.BattingAveragePage),
  },

  {
    path: 'bowling-average',
    loadComponent: () =>
      import('./bowling-average/bowling-average.page')
      .then((m) => m.BowlingAveragePage),
  },

  {
    path: 'bowling-economy',
    loadComponent: () =>
      import('./bowling-economy/bowling-economy.page')
      .then((m) => m.BowlingEconomyPage),
  },

  {
    path: 'bowling-strike-rate',
    loadComponent: () =>
      import('./bowling-strike-rate/bowling-strike-rate.page')
      .then((m) => m.BowlingStrikeRatePage),
  },

  {
    path: 'over-run-rate',
    loadComponent: () =>
      import('./over-run-rate/over-run-rate.page')
      .then((m) => m.OverRunRatePage),
  },

];
