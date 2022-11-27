import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactsComponent} from './components/pages/contacts/contacts.component';
import {SignInComponent} from './components/auth/sign-in/sign-in.component';
import {SignUpComponent} from './components/auth/sign-up/sign-up.component';
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";
import {environment} from "../environments/environment";
import {LayoutComponent} from './components/common/layout/layout.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotFoundComponent} from './components/common/not-found/not-found.component'
import {SearchComponent} from './components/common/search/search.component';
import {BaseHrefService, WINDOW_PROVIDERS} from "./services/base-href/base-href.service";
import {SocialNetworksComponent} from "./components/common/social-networks/social-networks.component";
import {SocialIconComponent} from "./components/common/social-networks/social-icon/social-icon.component";
import {NavbarComponent} from "./components/navbar-footer/navbar/navbar.component";
import {FooterComponent} from "./components/navbar-footer/footer/footer.component";
import {SinglePostComponent} from "./components/pages/blog/single-post/single-post.component";
import {SinglePostContentComponent} from "./components/pages/blog/single-post-content/single-post-content.component";
import {SinglePostAsideComponent} from "./components/pages/blog/single-post-aside/single-post-aside.component";
import {DistributionComponent} from "./components/pages/blog/distribution/distribution.component";
import {CardAuthorComponent} from "./components/pages/blog/single-post-aside/card-author/card-author.component";
import {CardTrendComponent} from "./components/pages/blog/single-post-aside/card-trend/card-trend.component";
import {DateComponent} from "./components/pages/blog/date/date.component";
import {OurBlogComponent} from "./components/pages/blog/our-blog/our-blog.component";
import {BlogCardComponent} from "./components/common/blog-cards/blog-card/blog-card.component";
import {BlogCardsComponent} from "./components/common/blog-cards/blog-cards.component";
import {TagsComponent} from "./components/pages/blog/tags/tags.component";
import {ChartsComponent} from "./components/pages/charts/charts.component";
import {ChartComponent} from "./components/pages/charts/chart/chart.component";
import {ColorfulDirective} from "./directives/colorful.directive";
import {ChartsDirective} from "./components/pages/charts/charts.directive";

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
    DateComponent,
    OurBlogComponent,
    BlogCardComponent,
    BlogCardsComponent,
    TagsComponent,
    ChartsComponent,
    ChartComponent,
    ColorfulDirective,
    ChartsDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    WINDOW_PROVIDERS,
    BaseHrefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
