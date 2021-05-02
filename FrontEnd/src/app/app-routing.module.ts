
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelsComponent } from './hotels/hotels.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FactureComponent } from './facture/facture.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'hotels', component: HotelsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: '', component: HomeComponent},
  {path: 'facture', component:FactureComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
