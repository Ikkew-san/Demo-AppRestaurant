import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PromotionPage } from '../promotion/promotion';
import { FavoritesPage } from '../favorites/favorites';
import { TypeoffoodPage } from '../typeoffood/typeoffood';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  mySelectedIndex: number;

  tab1Root = HomePage;
  tab2Root = TypeoffoodPage;
  tab3Root = PromotionPage;
  tab4Root = FavoritesPage;

  constructor(public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
