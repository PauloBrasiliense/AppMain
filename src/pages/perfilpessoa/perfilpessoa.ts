import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IPessoa } from '../../interfaces/iIPessoa';


@IonicPage()
@Component({
  selector: 'page-perfilpessoa',
  templateUrl: 'perfilpessoa.html',
})
export class PerfilpessoaPage {

  public pessoa: IPessoa;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pessoa = this.navParams.get('p');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilpessoaPage');
  }

}
