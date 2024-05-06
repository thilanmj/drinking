import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DrinkListComponent} from "./drink-list/drink-list.component";
import {DrinkDetailsComponent} from "./drink-details/drink-details.component";

const routes: Routes = [
  {
    path:'',
    component: DrinkListComponent
  },
  {
    path:':id',
    component: DrinkDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinkRoutingModule { }
