import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent,
	
	
],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [
	
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
