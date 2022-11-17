import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from "./components/contacts/contacts.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";

export enum MainRoutes {
  Default = '',
  Contacts = 'contacts',
  Single_post = 'single-post',
  Not_found = 'not-found'

}

const routes: Routes = [
  {path: MainRoutes.Contacts, component: ContactsComponent},
  {path: MainRoutes.Single_post, component: SinglePostComponent},
  {path: MainRoutes.Not_found, component: NotFoundComponent},
  {path: MainRoutes.Default, pathMatch: 'full', redirectTo: MainRoutes.Single_post},
  {path: '**', redirectTo: MainRoutes.Not_found}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
