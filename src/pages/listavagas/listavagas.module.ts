import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListavagasPage } from './listavagas';

@NgModule({
  declarations: [
    ListavagasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListavagasPage),
  ],

  exports: [
    ListavagasPage
  ],
})
export class ListavagasPageModule {}
