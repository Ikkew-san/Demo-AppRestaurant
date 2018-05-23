import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { AuthenProvider } from '../../providers/authen/authen';
import { NgForm } from '@angular/forms';
import{ LoginPage } from'../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public AuthenProvider:AuthenProvider ) {
    this.data={

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');



  }
  onSubmit(myform: NgForm) {
    let params = {
      username: myform.value.username,
      password: myform.value.password,
      email:myform.value.email,
      phone:myform.value.phone,
      
    }
    this.AuthenProvider.setRegister(params).subscribe(res => {
      console.log(res['0'])
    },err => console.log(err))
    this.navCtrl.push(LoginPage);
  }


 
  
 
  

 
  



}
