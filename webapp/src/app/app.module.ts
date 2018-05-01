import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FooterModule } from './footer-module/footer.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home-module/home.module';
import {HeaderModule} from "./header-module/header.module";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {ListingModule} from "./listing-module/listing.module";
import { ForumComponent } from './forum-module/forum/forum.component';
import {ForumModule} from "./forum-module/forum.module";

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    CommonModule,
    HeaderModule,
    FooterModule,
    AppRoutingModule,
    HomeModule,
    AngularFontAwesomeModule,
    FormsModule,
    ListingModule,
    ForumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
