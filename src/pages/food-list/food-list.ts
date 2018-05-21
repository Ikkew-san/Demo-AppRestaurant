import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

import { DetailFoodPage } from '../detail-food/detail-food';

/**
 * Generated class for the FoodListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-list',
  templateUrl: 'food-list.html',
})
export class FoodListPage {
  title: string
  fullitem: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public appProvider: AppProvider) {
    this.title = this.navParams.get("name");
    this.getFoodList();
  }

  // ionViewDidLoad() {
  // }

  getFoodList() {   
     let id = this.navParams.get("id");
     this.appProvider.getFoodlist(id).subscribe(res => {
      console.log(res)
      this.fullitem = res
    }, err => console.log(err))
  }

  gotodetailfood(data){
    this.navCtrl.push(DetailFoodPage,{data});
  }

}
