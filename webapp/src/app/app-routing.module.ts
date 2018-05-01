
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home-module/home/home.component';
import {ListingComponent} from "./listing-module/listing/listing.component";
import {ForumComponent} from "./forum-module/forum/forum.component";
import {ForumCommentComponent} from "./forum-module/forum-comment/forum-comment.component";

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'listing',
    component: ListingComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'forumComment',
    component: ForumCommentComponent
  },
  { path: '404', redirectTo: '404'},
  { path: '**', redirectTo: '/home' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule {

}
