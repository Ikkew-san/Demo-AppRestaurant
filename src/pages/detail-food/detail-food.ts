import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailFoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-food',
  templateUrl: 'detail-food.html',
})
export class DetailFoodPage {

    data:any;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      
      this.data = this.navParams.get("data");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailFoodPage');
  }

}
