import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import {PersonService} from "./shared/services/person.service";
import { PersonFormComponent } from './person/person-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
