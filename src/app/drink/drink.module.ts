import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DrinkRoutingModule} from './drink-routing.module';
import {DrinkListComponent} from './drink-list/drink-list.component';
import {DrinkDetailsComponent} from './drink-details/drink-details.component';


@NgModule({
  declarations: [
    DrinkListComponent,
    DrinkDetailsComponent
  ],
  imports: [
    CommonModule,
    DrinkRoutingModule
  ]
})
export class DrinkModule {
}
