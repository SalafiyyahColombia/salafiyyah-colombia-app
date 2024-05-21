import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {PagesComponent} from "./pages/pages/pages.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {TrustableSourcesComponent} from "./pages/thrustable-sources/thrustable-sources.component";
import {TopicIndexComponent} from "./pages/topic-index/topic-index.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {VideosComponent} from "./pages/videos/videos.component";
import {PdfComponent} from "./pages/pdf/pdf.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'trustable-sources', component: TrustableSourcesComponent},
      {path: 'topic-index', component: TopicIndexComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'videos', component: VideosComponent},
      {path: 'pdf', component: PdfComponent},
      {path: '', pathMatch: 'full', redirectTo: 'topic-index'},
    ]
  },

  {path: 'register', component: SignupComponent},
  {path: 'login', component: LoginComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
