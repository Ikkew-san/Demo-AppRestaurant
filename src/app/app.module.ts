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
import { FoodListPage } from '../pages/food-list/food-list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { BasketPage } from '../pages/basket/basket';
import{DetailFoodPage}from '../pages/detail-food/detail-food';
import { DetailPromotionPage } from '../pages/detail-promotion/detail-promotion';
import { DetailHomePage } from '../pages/detail-home/detail-home';
import { PaymentPage } from '../pages/payment/payment';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    TypeoffoodPage,
    PromotionPage,
    FavoritesPage,
    FoodListPage,
    RegisterPage,
    LoginPage,
    BasketPage,
    DetailFoodPage,
    DetailPromotionPage,
    DetailHomePage,
    PaymentPage
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
    FoodListPage,
    FavoritesPage,
    RegisterPage,
    LoginPage,
    BasketPage,
    DetailFoodPage,
    DetailPromotionPage,
    DetailHomePage,
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
