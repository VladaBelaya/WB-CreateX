import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";
import {environment} from "../environments/environment";
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { SocialIconComponent } from './social-networks/social-icon/social-icon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
    LayoutComponent
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
