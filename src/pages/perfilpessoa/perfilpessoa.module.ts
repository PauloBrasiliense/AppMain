import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilpessoaPage } from './perfilpessoa';

@NgModule({
  declarations: [
    PerfilpessoaPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilpessoaPage),
  ],

  exports: [
    PerfilpessoaPage

  ],
})
export class PerfilpessoaPageModule {}
