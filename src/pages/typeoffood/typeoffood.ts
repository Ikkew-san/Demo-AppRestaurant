import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  fullitem: Array<{img: string, namefood: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fullitem=[
      {img:'fried4.jpg',namefood:'อาหารยอดฮิต'},
      {img:'toboilc5.jpg',namefood:'ต้ม-แกง'},
      {img:'fried2.jpg',namefood:'ทอด'},
      {img:'seafood1.jpg',namefood:'ซีฟู้ด'},
      {img:'yam1.jpg',namefood:'ยำ'},
      {img:'onedish4.jpg',namefood:'อาหารจานเดียว'},
      {img:'grill1.jpg',namefood:'ปิ้ง-ย่าง'},
      {img:'steam1.jpg',namefood:'นึ่ง'},
      {img:'waterchilli2.jpg',namefood:'น้ำพริก'}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeoffoodPage');
  }
  gotofoodlist(){
    this.navCtrl.push(FoodListPage);
}
}
