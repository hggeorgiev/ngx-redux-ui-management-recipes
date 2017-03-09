import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {StoreModule} from "@ngrx/store";
import {metaReducer} from "./common/index";
import {TemplateModalComponent} from "./components/template-modal.component";
import {SidebarWatchDirective} from "./directives/sidebar-watch.directive";
import {LeftSidebarComponent} from "./components/left-sidebar.component";
import {SidebarToggleDirective} from "./directives/sidebar-toggle.directive";
import {RightSidebarComponent} from "./components/right-sidebar.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarWatchDirective,
    SidebarToggleDirective,
    TemplateModalComponent,
    RightSidebarComponent,
    LeftSidebarComponent
  ],
  imports: [
    NgbModule.forRoot(),
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
