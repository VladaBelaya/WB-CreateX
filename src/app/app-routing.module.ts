import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {NotFoundComponent} from "./components/common/not-found/not-found.component";
import {ChartsComponent} from "./pages/charts/charts.component";
import {SinglePostComponent} from "./pages/blog/single-post/single-post.component";

export enum MainRoutes {
  Default = '',
  Charts = 'charts',
  Contacts = 'contacts',
  Single_post = 'single-post',
  Not_found = 'not-found'

}

const routes: Routes = [
  {path: MainRoutes.Charts, component: ChartsComponent},
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
