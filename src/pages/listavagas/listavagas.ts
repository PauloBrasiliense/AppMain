import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VagaPage } from '../vaga/vaga';


@IonicPage()
@Component({
  selector: 'page-listavagas',
  templateUrl: 'listavagas.html',
})
export class ListavagasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ExibirVaga() {

    this.navCtrl.push(VagaPage.name);
  }
}
