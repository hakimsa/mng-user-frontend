import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewuserComponent } from './newuser/newuser.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component'; 
// <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NewuserComponent,
    DetailsUserComponent,
    NavbarComponent,
    NotFoundComponentComponent,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
