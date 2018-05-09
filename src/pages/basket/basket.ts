import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  t: Array<{img: string, listfood: string,price: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.btnHide = true;
    this.btnEdit = false;

    this.t=[
      {img:'fried1.jpg',listfood:'เกี๊ยวทอดไส้ผัก',price:'80'},
      {img:'fried2.jpg',listfood:'ซี่โครงหมูทอด',price:'120'},
      {img:'fried3.jpg',listfood:'ปลากะพงทอดน้ำปลา',price:'180'},
      {img:'fried4.jpg',listfood:'ปีกไก่ทอดตะไคร้',price:'80'},
      {img:'fried5.jpg',listfood:'สเต็กปลาทอด',price:'95'},

      {img:'grill1.jpg',listfood:'ปลาแซลมอนย่างใบชะพลู',price:'250'},
      {img:'grill2.jpg',listfood:'ปลาหมึกย่างบาร์บีคิวเกาหลี',price:'195'},
      {img:'grill3.jpg',listfood:'ไส้กรอกอีสาน',price:'75'},
      {img:'grill4.jpg',listfood:'หมูปิ้ง',price:'60'},
      {img:'grill5.jpg',listfood:'หอยเชลล์ย่าง',price:'299'},
      {img:'grill6.jpg',listfood:'เห็ดออรินจิย่าง',price:'159'},

      {img:'onedish1.jpg',listfood:'ข้าวขาหมู',price:'80'},
      {img:'onedish2.jpg',listfood:'ข้าวมันไก่',price:'80'},
      {img:'onedish3.jpg',listfood:'ข้าวหน้าไก่',price:'80'},
      {img:'onedish4.jpg',listfood:'ข้าวหมกไก่',price:'80'},
      {img:'onedish5.jpg',listfood:'ไข่เจียว',price:'80'},
      
      {img:'seafood1.jpg',listfood:'กุ้งเผา',price:'350'},
      {img:'seafood2.jpg',listfood:'กุ้งมะนาว',price:'100'},
      {img:'seafood3.jpg',listfood:'ปูม้านึ่ง',price:'250'},
      {img:'seafood4.jpg',listfood:'ยำกุ้งหมึกน้ำจิ้มซีฟู้ด',price:'120'},
      {img:'seafood5.jpg',listfood:'หอยแมงภู่',price:'79'},

      {img:'steam1.jpg',listfood:'กุ้งนึ่งซีอิ๊ว',price:'120'},
      {img:'steam2.jpg',listfood:'ปลากะพงนึ่งมะนาว',price:'180'},
      {img:'steam3.jpg',listfood:'หมึกไข่นึ่งมะนาว',price:'150'},
      {img:'steam4.jpg',listfood:'ห่อหมกทะเล',price:'70'},

      {img:'toboilc1.jpg',listfood:'ต้มยำกุ้ง',price:'180'},
      {img:'toboilc2.jpg',listfood:'ต้มส้มปลาทู',price:'130'},
      {img:'toboilc3.jpg',listfood:'ปลาทูซาเตี๊ยะ',price:'180'},
      {img:'toboilc4.jpg',listfood:'ปลาทูต้มหวาน',price:'180'},
      {img:'toboilc5.jpg',listfood:'หัวปลาแซลมอนต้มซีอิ๊ว',price:'180'},

      {img:'steam1.jpg',listfood:'กุ้งนึ่งซีอิ๊ว',price:'150'},
      {img:'toboilc1.jpg',listfood:'ต้มยำกุ้ง',price:'180'},
      {img:'grill5.jpg',listfood:'หอยเชลล์ย่าง',price:'299'},
      {img:'fried2.jpg',listfood:'ซี่โครงหมูทอด',price:'120'},
      {img:'fried4.jpg',listfood:'ปีกไก่ทอดตะไคร้',price:'80'},
      {img:'grill3.jpg',listfood:'ไส้กรอกอีสาน',price:'80'},

      {img:'waterchilli1.jpg',listfood:'น้ำพริกกะปิ',price:'80'},
      {img:'waterchilli2.jpg',listfood:'น้ำพริกกะปิกุ้งแห้ง',price:'80'},
      {img:'waterchilli3.jpg',listfood:'น้ำพริกปลา',price:'80'},
      {img:'waterchilli4.jpg',listfood:'น้ำพริกอ่อง',price:'80'},
      {img:'waterchilli5.jpg',listfood:'หลนปูเค็ม',price:'75'},

      {img:'yam1.jpg',listfood:'ยำคะน้ากรอบกุ้งสด',price:'180'},
      {img:'yam2.jpg',listfood:'ยำเล็บมือนาง',price:'80'},
      {img:'yam3.jpg',listfood:'ยำวุ้นเส้น',price:'80'},
      {img:'yam4.jpg',listfood:'ยำแหนมข้าวทอด',price:'80'},
      {img:'yam5.jpg',listfood:'ยำหัวปลีกุ้งสด',price:'80'}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
  }

  btnActivate() {
    this.btnHide = (this.btnHide === true)? false : true;
    this.btnEdit = (this.btnEdit === false)? true : false;
  }

}