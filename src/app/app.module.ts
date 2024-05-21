import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TrustableSourcesComponent } from './pages/thrustable-sources/thrustable-sources.component';
import { TopicIndexComponent } from './pages/topic-index/topic-index.component';
import { PagesComponent } from './pages/pages/pages.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {AngularMaterialModule} from "./shared/modules/angular-material.module";
import {RouterModule} from "@angular/router";
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideosComponent } from './pages/videos/videos.component';
import {HttpClientModule} from "@angular/common/http";
import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from "@angular/common";
import { PdfComponent } from './pages/pdf/pdf.component';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    PageNotFoundComponent,
    TrustableSourcesComponent,
    TopicIndexComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContactUsComponent,
    AboutUsComponent,
    VideosComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    TranslateModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
