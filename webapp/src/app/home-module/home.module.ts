import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
