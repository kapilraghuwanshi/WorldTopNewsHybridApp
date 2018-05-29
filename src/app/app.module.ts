import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

//import { AppRoutingModule } from './app-routing.module';
//import { FirebaseApiServiceProvider } from '../providers/firebase-service/firebase-service';
import { ApiServiceProvider } from '../providers/api-service/api-service';

import { WorldTopNews } from './app.component';
//import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ChooseNewsPaperPage } from '../pages/choose-news-paper/choose-news-paper';
import { NewsPaperPage } from '../pages/news-paper/news-paper';
import { ArticlePage } from '../pages/article/article';
import { FavoritePage } from '../pages/favorite/favorite';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { AboutUsPage } from '../pages/about_us/about_us';
import { NoInternetFoundPage } from '../pages/no-internet-found/no-internet-found';

export const firebaseConfig = {
  apiKey: "AIzaSyB-aeFaY4aOvDJwsbfzvas8h-rTLzrQz6c",
  authDomain: "worldtopnews-29a42.firebaseapp.com",
  databaseURL: "https://worldtopnews-29a42.firebaseio.com",
  projectId: "worldtopnews-29a42",
  storageBucket: "worldtopnews-29a42.appspot.com",
  messagingSenderId: "1067875198851"
};

@NgModule({
  declarations: [
    WorldTopNews,
    //LoginPage, 
    TabsPage, HomePage, ChooseNewsPaperPage, NewsPaperPage, ArticlePage,
    FavoritePage, MyprofilePage, AboutUsPage, NoInternetFoundPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(WorldTopNews),
    //AngularFireModule.initializeApp(firebaseConfig),
    // AppRoutingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    WorldTopNews,
    //LoginPage, 
    TabsPage, HomePage, ChooseNewsPaperPage, NewsPaperPage, ArticlePage,
    FavoritePage, MyprofilePage, AboutUsPage, NoInternetFoundPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    InAppBrowser,
    SocialSharing,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiServiceProvider,
    //FirebaseApiServiceProvider
  ]
})
export class AppModule { }