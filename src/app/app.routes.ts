import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { UserDetailComponent } from './components/user/user-detail.component';
import { UserAddComponent } from './components/user/user-add.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'add', component: UserAddComponent },
  { path: '**', component: HomeComponent }, //this should locate at the end, else, for loop picks ** instead of any other route
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
