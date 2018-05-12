import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { BasketPage } from '../pages/basket/basket';


export interface PageInterface {
  title: string;
  component: any;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  pages: PageInterface[] = [
    { title: 'หน้าหลัก', component: TabsPage, index: 0, icon: 'home' },
    { title: 'รายการโปรด', component: TabsPage, index: 3, icon: 'star' },
    { title: 'ตะกร้า', component: BasketPage, icon: 'basket' },
    { title: 'ตั้งค่า', component: '', icon: 'settings' },
  ];


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {

    if (page.index) {
      this.nav.setRoot(page.component, { tabIndex: page.index });

    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }

  }

}
