import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import {Router, RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    SidebarComponent,
    TopnavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    TopnavComponent
  ]
})
export class ComponentsModule { }
