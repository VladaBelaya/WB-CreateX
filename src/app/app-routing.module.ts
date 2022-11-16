import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from "./contacts/contacts.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SinglePostComponent} from "./single-post/single-post.component";

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent},
  { path: 'single-post', component: SinglePostComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
