import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { IPessoa } from '../../interfaces/iIPessoa';
import { HttpErrorResponse } from '@angular/common/http';
import { PessoaProvider } from '../../providers/pessoa/pessoa';
import { NavLifecycles } from 'utils/ionic/nav/nav-lifecycles';
import { IcadpessoaPage } from '../icadpessoa/icadpessoa';
import { ListapessoasPage } from '../listapessoas/listapessoas';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles {


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

  Buscar() {
    this.navCtrl.push(ListapessoasPage.name);
  }

}