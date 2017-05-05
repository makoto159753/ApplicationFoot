import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ChronoPage } from '../chrono/chrono';
import { ActionPage } from '../action/action';
import { MatchPage } from '../match/match';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = MatchPage;
  tab3Root: any = ChronoPage;
  tab4Root: any = ActionPage;

  constructor() {

  }
}
