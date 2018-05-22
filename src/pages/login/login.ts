import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthenProvider } from '../../providers/authen/authen';

import { RegisterPage } from '../../pages/register/register';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public authenProvider: AuthenProvider) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  gotoregister(){
    this.navCtrl.push(RegisterPage);
  }
  
  setLogged(params) {
    this.authenProvider.setLogged(params).subscribe(res => {
      console.log(res)
    }, err => console.log(err))
  }
  
  onSubmit(myform: NgForm) {
    let params = {
      username: myform.value.username,
      password: myform.value.password
    }
    // console.log(params);
    this.authenProvider.getAuthen(params).subscribe(res => {
      let user = JSON.stringify(res['0']);
      // console.log(res['0'])
      if (res['length'] != 0) {
        this.authenProvider.getProfile(res['0']['user_id']).subscribe(res => {
          console.log(res['0']['status'])
          if(res['length'] != 0){
            localStorage.setItem('user', user);
            localStorage.setItem('profile', JSON.stringify(res['0']))
            this.navCtrl.setRoot(TabsPage).then(() => {
              window.location.reload();
            });
          }
        }, err => console.log(err))
      }
    }, err => console.log(err))
  }  

}