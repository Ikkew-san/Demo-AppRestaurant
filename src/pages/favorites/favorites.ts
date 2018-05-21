import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

import { BasketPage } from '../basket/basket';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  btnHide:boolean = true;;
  btnEdit:boolean  = false;;

  fulldata: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public appProvider: AppProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  getFavorite() {   
    this.appProvider.getFavorite().subscribe(res => {
     console.log(res)
     this.fulldata = res
   }, err => console.log(err))
 }

  btnActivate() {
    this.btnHide = (this.btnHide === true)? false : true;
    this.btnEdit = (this.btnEdit === false)? true : false;
  }

  gotobasket() {
    this.navCtrl.setRoot(BasketPage);
  }
}
