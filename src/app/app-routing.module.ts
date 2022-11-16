import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from "./components/contacts/contacts.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";

const routes: Routes = [
  { path: '', component: SinglePostComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'single-post', component: SinglePostComponent},
  { path: 'not-found1', component: NotFoundComponent},
  { path: 'not-found2', component: NotFoundComponent},
  { path: 'not-found3', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
