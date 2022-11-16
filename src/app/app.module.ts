import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";
import {environment} from "../environments/environment";
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { SocialIconComponent } from './components/social-networks/social-icon/social-icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SinglePostComponent } from './components/single-post/single-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SinglePostContentComponent } from './components/single-post-content/single-post-content.component';
import { SinglePostAsideComponent } from './components/single-post-aside/single-post-aside.component';
import { DistributionComponent } from './components/distribution/distribution.component';
import { SearchComponent } from './components/search/search.component';
import { CardAuthorComponent } from './components/card-author/card-author.component';
import { CardTrendComponent } from './components/card-trend/card-trend.component';
import { TagComponent } from './components/tag/tag.component';
import { DateComponent } from './components/date/date.component';

const mapConfig: YaConfig = {
  apikey: environment.API_YA,
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    SignInComponent,
    SignUpComponent,
    SocialNetworksComponent,
    SocialIconComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    SinglePostComponent,
    NotFoundComponent,
    SinglePostContentComponent,
    SinglePostAsideComponent,
    DistributionComponent,
    SearchComponent,
    CardAuthorComponent,
    CardTrendComponent,
    TagComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    HttpClientModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
