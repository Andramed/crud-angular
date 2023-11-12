import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent	
	
],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,
	HttpClientModule
  ],
  providers: [
	
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
