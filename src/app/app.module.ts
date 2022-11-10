import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";
import {environment} from "../environments/environment";

const mapConfig: YaConfig = {
  apikey: environment.API_YA,
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
