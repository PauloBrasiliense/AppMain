import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { IPessoa } from '../../interfaces/iIPessoa';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public pessoas: IPessoa[];

  constructor(public navCtrl: NavController,
              private _Http: HttpClient,
            private _loadingCtrl: LoadingController) {


    // Cria variável para msg
    let loading = this._loadingCtrl.create({
        content: "Aguarde o carregamento dos estagiáios..."

    });

    // Mensagem de espera
    loading.present();


    this._Http.get<IPessoa[]>('http://localhost:3000/pessoa/')
      .subscribe((pessoas) => {
        this.pessoas = pessoas;

        // Finaliza exibição da msg
        loading.dismiss();
      });

  }


}
