import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { TypeoffoodPage } from '../pages/typeoffood/typeoffood';
import { PromotionPage } from '../pages/promotion/promotion';
import { FavoritesPage } from '../pages/favorites/favorites';
import { DetailPromotionPage } from '../pages/detail-promotion/detail-promotion';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    TypeoffoodPage,
    PromotionPage,
    FavoritesPage,
<<<<<<< HEAD
    FoodListPage,
    LoginPage
=======
    DetailPromotionPage
>>>>>>> 75926e8f37dedbbb55edb71c3119d2370e76189f
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    TypeoffoodPage,
    PromotionPage,
<<<<<<< HEAD
    FoodListPage,
    FavoritesPage,
    LoginPage
=======
    FavoritesPage,
    DetailPromotionPage
>>>>>>> 75926e8f37dedbbb55edb71c3119d2370e76189f
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
