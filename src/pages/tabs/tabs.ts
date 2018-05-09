import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PromotionPage } from '../promotion/promotion';
import { FavoritesPage } from '../favorites/favorites';
import { TypeoffoodPage } from '../typeoffood/typeoffood';
import { BasketPage } from '../basket/basket';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TypeoffoodPage;
  tab3Root = PromotionPage;
  tab4Root = FavoritesPage;

  constructor() {

  }
}
