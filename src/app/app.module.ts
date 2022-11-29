import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryComponent } from './history/history.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { LocationsComponent } from './locations/locations.component';
import { ErrorComponent } from './error/error.component';
import { MembershipComponent } from './membership/membership.component';
import { HonorsComponent } from './honors/honors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HistoryComponent,
    CampaignsComponent,
    LocationsComponent,
    ErrorComponent,
    MembershipComponent,
    HonorsComponent
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
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
