import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { IPessoa } from '../../interfaces/iIPessoa';
import { HttpErrorResponse } from '@angular/common/http';
import { PessoaProvider } from '../../providers/pessoa/pessoa';
import { NavLifecycles } from 'utils/ionic/nav/nav-lifecycles';
import { PerfilpessoaPage } from '../perfilpessoa/perfilpessoa';
import { ListavagasPage } from '../listavagas/listavagas';


@IonicPage()
@Component({
  selector: 'page-listapessoas',
  templateUrl: 'listapessoas.html',
})
export class ListapessoasPage implements NavLifecycles {

  public pessoas_: IPessoa[];
  pessoas: string[];

  constructor(public navCtrl: NavController,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _PessoaService: PessoaProvider) {

      this.pessoas = [
        'Tijuca',
        'Vila Isabel',
        'Maracanã'
      ];
  }

  ionViewDidLoad() {

    // Cria variável para msg
    let loading = this._loadingCtrl.create({
      content: "Aguarde o carregamento dos estagiáios..."

    });

    // Mensagem de espera
    loading.present();


    this._PessoaService.lista()
      .subscribe(
        (pessoas) => {
          this.pessoas_ = pessoas;

          // Finaliza exibição da msg
          loading.dismiss();
        },
        // CallBack de erro
        (erro: HttpErrorResponse) => {
          console.error(erro);
          loading.dismiss();

          // Cria msg de alerta
          this._alertCtrl.create({
            title: 'Falha na conexão',
            subTitle: 'Não foi possível carregar a lista de pessoas.',
            buttons: [
              { text: 'ok' }
            ]
          }).present();// Exibir botão
        }
      );


  }

  SelecionarPessoa(pessoa: IPessoa) {
    console.log(pessoa);

    this.navCtrl.push(PerfilpessoaPage.name,{ p: pessoa } );
  }

  ListarVagas() {

    this.navCtrl.push(ListavagasPage.name);
  }

  
}
