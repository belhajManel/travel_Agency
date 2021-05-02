import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SigninComponent } from './signin/signin.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FactureComponent } from './facture/facture.component';
import { ProfileComponent } from './profile/profile.component';
import { DestinationComponent } from './destination/destination.component';
import { ReservationvolComponent } from './reservationvol/reservationvol.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ReservationComponent,
    SigninComponent,
    HotelsComponent,
    HomeComponent,
    NavbarComponent,
    FactureComponent,
    ProfileComponent,
    DestinationComponent,
    ReservationvolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
