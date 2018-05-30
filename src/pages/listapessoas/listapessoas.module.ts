import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListapessoasPage } from './listapessoas';

@NgModule({
  declarations: [
    ListapessoasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListapessoasPage),
  ],
})
export class ListapessoasPageModule {}
