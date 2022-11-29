import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryComponent } from './history/history.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { LocationsComponent } from './locations/locations.component';
import { ErrorComponent } from './error/error.component';
import { MembershipComponent } from './membership/membership.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HistoryComponent,
    CampaignsComponent,
    LocationsComponent,
    ErrorComponent,
    MembershipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
