import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

import { FoodListPage } from '../../pages/food-list/food-list';

/**
 * Generated class for the TypeoffoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typeoffood',
  templateUrl: 'typeoffood.html',
})
export class TypeoffoodPage {
  fullitem: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public AppProvider: AppProvider) {
    this.getTypefood();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TypeoffoodPage');
  // }

  getTypefood(){
    this.AppProvider.getTypefood().subscribe(res => {
      console.log(res)
      this.fullitem = res
    }, err => console.log(err))
  }

  gotofoodlist(id: number,name: string){
    this.navCtrl.push(FoodListPage, {id, name});
  }
}
