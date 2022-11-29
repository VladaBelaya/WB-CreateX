import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { environment } from '../environments/environment';
import { LayoutComponent } from './components/common/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { SearchComponent } from './components/common/search/search.component';
import { BaseHrefService, WINDOW_PROVIDERS } from './services/base-href/base-href.service';
import { SocialNetworksComponent } from './components/common/social-networks/social-networks.component';
import { SocialIconComponent } from './components/common/social-networks/social-icon/social-icon.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SinglePostComponent } from './pages/blog/single-post/single-post.component';
import { SinglePostContentComponent } from './pages/blog/single-post-content/single-post-content.component';
import { SinglePostAsideComponent } from './pages/blog/single-post-aside/single-post-aside.component';
import { DistributionComponent } from './pages/blog/distribution/distribution.component';
import { CardAuthorComponent } from './pages/blog/single-post-aside/card-author/card-author.component';
import { CardTrendComponent } from './pages/blog/single-post-aside/card-trend/card-trend.component';
import { DateComponent } from './pages/blog/date/date.component';
import { OurBlogComponent } from './pages/blog/our-blog/our-blog.component';
import { BlogCardComponent } from './components/common/blog-cards/blog-card/blog-card.component';
import { BlogCardsComponent } from './components/common/blog-cards/blog-cards.component';
import { TagsComponent } from './pages/blog/tags/tags.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ChartComponent } from './pages/charts/chart/chart.component';
import { ColorfulDirective } from './directives/colorful.directive';
import { ChartsDirective } from './pages/charts/charts.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BlogComponent } from './pages/blog/blog.component';
import { FiltersComponent } from './pages/blog/filters/filters.component';
import { TabsComponent } from './components/common/tabs/tabs.component';
import { SelectComponent } from './components/common/select/select.component';
import {MatSelectModule} from "@angular/material/select";
import { PaginationComponent } from './components/common/pagination/pagination.component';

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
    ChartsDirective,
    BlogComponent,
    FiltersComponent,
    TabsComponent,
    SelectComponent,
    PaginationComponent,
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
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
  providers: [
    WINDOW_PROVIDERS,
    BaseHrefService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
