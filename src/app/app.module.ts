import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {StoreModule} from "@ngrx/store";
import {metaReducer} from "./common/reducers/index";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    /*
      Provide the application reducer to the store.
     */
    StoreModule.provideStore(metaReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
