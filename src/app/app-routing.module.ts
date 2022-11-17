import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from "./components/contacts/contacts.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";

export enum MainRoutes {
  Default = '',
  Contacts = 'contacts',
  Single_post = 'single-post'

}

const routes: Routes = [
  {path: MainRoutes.Default, component: SinglePostComponent},
  {path: MainRoutes.Contacts, component: ContactsComponent},
  {path: MainRoutes.Single_post, component: SinglePostComponent},
  {path: 'not-found1', component: NotFoundComponent},
  {path: 'not-found2', component: NotFoundComponent},
  {path: 'not-found3', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
