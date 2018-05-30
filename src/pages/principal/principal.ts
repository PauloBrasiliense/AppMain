import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  searchQuery: string = '';
  bairros: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeBairros();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  initializeBairros() {
    this.bairros = [
      'Tijuca',
      'Vila Isabel',
      'Maracanã'
    ];
  }

  getBairros(ev: any) {
    // Reset items back to all of the items
    this.initializeBairros();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.bairros = this.bairros.filter((bairro) => {
        return (bairro.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  BuscarPessoas() {
    this.navCtrl.push(HomePage);
  }

}
