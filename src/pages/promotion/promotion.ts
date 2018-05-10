import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPromotionPage } from '../detail-promotion/detail-promotion';
import { BasketPage } from '../basket/basket';

/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {
  fulldata: Array <{img: any,title: any,detail: any}>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fulldata = [
      {
        img: '20180504-172814.jpg',
        title: 'ถูกกว่าตั้งแต่ถาดแรกแค่ 129 บาท มีให้เลือกถึง 4 หน้า 4 สไตล์',
        detail: 'ผมมันสายหนานุ่ม แล้วคุณหล่ะเป็นสายไหน? #สายหนานุ่ม หรือ #สายบางกรอบ แต่ไม่ว่าจะสายไหนก็ถูกกว่าตั้งแต่ถาดแรกแค่ 129 บาท มีให้เลือกถึง 4 หน้า 4 สไตล์ ทั้ง ปูอัดค็อกเทล ซอสเซจดีไลท์ ชิลลี่บาร์บีคิวชิกเก้น หรือแฮมแอนด์เบคอน หรือจะเปลี่ยนเป็นแป้งบางกรอบก็ได้นะเออ พร้อมส่ง พร้อมเสิร์ฟ ทั่วไทย แล้ววันนี้ สั่งเลย คลิก1112.com/pizza หรือ โทร 1112 หรือ แอปพลิเคชัน The Pizza Company 1112'
      },
      {
        img: '20180504-154617.jpg',
        title: 'อิ่มคุ้ม!!! อร่อยเวอร์ หม้อไฟชุดพิเศษรสเด็ด เริ่มต้น 299 บาท',
        detail: 'อิ่มคุ้ม!!! อร่อยเวอร์ หม้อไฟชุดพิเศษรสเด็ด - ชุดแฟนซี 399 บาท - ชุดดับเบิ้ลหมู 329 บาท - ชุดสุดคุ้ม 299 บาท อร่อย 3 เซ็ต 2 ซอส รสชาติ จัดจ้าน ต้องลอง อร่อยแล้ววันนี้ - 15 มิถุนายน 2561'
      },
      {
        img: '20180504-171016.jpg',
        title: 'ZEN พร้อมเสิร์ฟ 4 เมนูพิเศษ ลดสูงสุด 50% ลุยเลย!',
        detail: 'ความอร่อยสดใหม่ที่ ZEN ชวนกินปลาใต้ต้นซากุระ พร้อมเสิร์ฟจากแคมเปญ HANAMI FESTIVAL 2018 พร้อมเมนูสุดพิเศษ 4 เมนู ในราคาโปรโมชั่น ลดสูงสุดถึง 50% พิเศษเฉพาะที่ ZEN สาขาในศูนย์การค้าเซ็นทรัลเท่านั้น'
      }
    ]
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PromotionPage');
  // }

  gotoDetail(data){
    // console.log(data)
    this.navCtrl.push(DetailPromotionPage, {data});
  }

  gotobasket() {
    this.navCtrl.setRoot(BasketPage);
  }
}
