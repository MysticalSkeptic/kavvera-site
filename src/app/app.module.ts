import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryComponent } from './history/history.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { LocationsComponent } from './locations/locations.component';
import { ErrorComponent } from './error/error.component';
import { MembershipComponent } from './membership/membership.component';
import { HonorsComponent } from './honors/honors.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HistoryComponent,
    CampaignsComponent,
    LocationsComponent,
    ErrorComponent,
    MembershipComponent,
    HonorsComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: 'home-page', component: HomePageComponent},
        {path: 'campaigns', component: CampaignsComponent},
        {path: 'history', component: HistoryComponent},
        {path: 'locations', component: LocationsComponent},
        {path: 'membership', component: MembershipComponent},
        {path: 'honors', component: HonorsComponent},
        {path: '', redirectTo: '/home-page', pathMatch: 'full'},
        {path: '**', component: ErrorComponent}
        
      ],
      {
        preloadingStrategy: PreloadAllModules,
        useHash: true
      }
    )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
