import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-vaga',
  templateUrl: 'vaga.html',
})
export class VagaPage {


  knobValues: any = {
    upper: 0,
    lower: 0
  }
  hSeg: any = {
    upper: 0,
    lower: 0
  }
  hTer: any = {
    upper: 0,
    lower: 0
  }
  hQua: any = {
    upper: 0,
    lower: 0
  }
  hQui: any = {
    upper: 0,
    lower: 0
  }
  hSex: any = {
    upper: 0,
    lower: 0
  }
  hSab: any = {
    upper: 0,
    lower: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VagaPage');
  }

}
