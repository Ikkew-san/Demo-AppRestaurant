import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasketPage } from '../basket/basket';
import { DetailHomePage } from '../detail-home/detail-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  homearray: Array<{img: string, namehome: string,detali:string}>;

  constructor(public navCtrl: NavController) {
    this.homearray=[
      {img:'216291_1622844-large.jpg',namehome:'ชุดแมคฟินเฟ่อร์',detali:'-แมคไก่ทอด'},
      {img:'216298_1622917-large.jpg',namehome:'ชุดปาร์ตี้จัดใหญ่',detali:'-สำหรับ 2-4 ท่าน'},
      {img:'216294-large.jpg',namehome:'ชุดปาตี้จัดเต็ม',detali:'-สำหรับ 2-4 ท่าน'},
      {img:'216306_1622976-large.jpg',namehome:'ชุดปาตี้สบายสบาย',detali:'-สำหรับ 1-2 ท่าน'},
      {img:'194417_1459486-large.jpg',namehome:'แมคไก่ทอด',detali:'-อร่อยแซ่บเว่อร์'},
      {img:'195462-large.jpg',namehome:'ชุดไก่ใหญ่เผ็ด 3',detali:'-แมคไก่ทอดใหญ่เผ็ด 2 ชิ้น'},
      {img:'200576_1615065-large.jpg',namehome:'แมคข้าวกะเพราไก่กรอบ',detali:'-แมคข้าวกะเพราไก่กรอบ'},
      {img:'99321_1394999-large.jpg',namehome:'คลาสสิค  แองกัส บีฟ เบอร์เกอร์ เนื้อ',detali:'-'},
   
    ]
  }

  

  gotobasket() {
    this.navCtrl.setRoot(BasketPage);
  }
  gotoDetailhome(data){
    this.navCtrl.push(DetailHomePage, {data});
  }
}

