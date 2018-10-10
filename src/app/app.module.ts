import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CatFormComponent } from './cat-form/cat-form.component';
import { HomeComponent } from './home/home.component';
import { CardCatComponent } from './card-cat/card-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    CatFormComponent,
    HomeComponent,
    CardCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
