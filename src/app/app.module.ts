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
    DetailPromotionPage
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
    FavoritesPage,
    DetailPromotionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
