import { Component/*, ChangeDetectorRef */} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the BasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {
  btnHide:boolean;
  btnEdit:boolean;

  fulldata: any

  // showToolbar: boolean = true;
  // transition: boolean;

  // stackScroll:number = 0;

  constructor(/*public ref: ChangeDetectorRef,*/ public navCtrl: NavController, public navParams: NavParams, public appProvider: AppProvider) {
    this.btnHide = true;
    this.btnEdit = false;

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad BasketPage');
  }

  getBasket() {
    this.appProvider.getFavorite().subscribe(res => {
      console.log(res)
      this.fulldata = res
    }, err => console.log(err))
  }

  btnActivate() {
    this.btnHide = (this.btnHide === true)? false : true;
    this.btnEdit = (this.btnEdit === false)? true : false;
  }

  gotoPayment() {
    this.navCtrl.push(PaymentPage);
  }
  // onScroll($event: any) {
  //   let scrollTop = $event.scrollTop;
  //   this.showToolbar = scrollTop >= this.stackScroll;
  //   if (scrollTop < this.stackScroll) {
  //     this.stackScroll = $event.scrollTop;
  //     this.transition = false;
  //   } else {
  //     this.stackScroll = $event.scrollTop;
  //     this.transition = true;
  //   }
  //   this.ref.detectChanges();
  // }

}