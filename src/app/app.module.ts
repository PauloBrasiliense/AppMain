import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PessoaProvider } from '../providers/pessoa/pessoa';

import { HttpClientModule } from '@angular/common/http';
import { IcadpessoaPage } from '../pages/icadpessoa/icadpessoa';
import { PrincipalPage } from '../pages/principal/principal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IcadpessoaPage,
    PrincipalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IcadpessoaPage,
    PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PessoaProvider
  ]
})
export class AppModule {}
