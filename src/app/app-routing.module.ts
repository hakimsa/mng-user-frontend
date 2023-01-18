import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DetailsUserComponent } from './details-user/details-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewuserComponent } from './newuser/newuser.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [
{path:"",component:HomePageComponent},
{path:'add',component:NewuserComponent},
{ path:'details/:id',component:DetailsUserComponent},
{ path: 'not-found',component:NotFoundComponentComponent},
{ path: '**', redirectTo: 'not-found',},

];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
