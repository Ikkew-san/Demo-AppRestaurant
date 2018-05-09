import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-promotion',
  templateUrl: 'detail-promotion.html',
})
export class DetailPromotionPage {
  data: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get("data");
  }

  ionViewDidLoad() {
    console.log(this.data);
  }

}
