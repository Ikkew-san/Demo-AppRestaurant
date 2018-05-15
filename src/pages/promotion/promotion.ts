import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPromotionPage } from '../detail-promotion/detail-promotion';
import { BasketPage } from '../basket/basket';

import { AppProvider } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {
  fulldata: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public AppProvider: AppProvider) {
    this.getPromotion();
  }

  getPromotion() {
    this.AppProvider.getPromotion().subscribe(res => {
      // console.log(res)
      this.fulldata = res
    }, err => console.log(err))
  }
  
  gotoDetail(data){
    // console.log(data)
    this.navCtrl.push(DetailPromotionPage, {data});
  }

  gotobasket() {
    this.navCtrl.setRoot(BasketPage);
  }
}
