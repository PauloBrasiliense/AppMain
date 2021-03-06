import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavLifecycles } from 'utils/ionic/nav/nav-lifecycles';

@IonicPage()
@Component({
  selector: 'page-icadpessoa',
  templateUrl: 'icadpessoa.html',
})
export class IcadpessoaPage implements NavLifecycles {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IcadpessoaPage');
  }

}
