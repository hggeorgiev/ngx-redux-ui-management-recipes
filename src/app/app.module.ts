import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {StoreModule} from "@ngrx/store";
import {metaReducer} from "./common/index";
import {TemplateModalComponent} from "./components/template-modal.component";
import {SidebarWatchDirective} from "./directives/sidebar-watch.directive";
import {LeftSidebarComponent} from "./components/left-sidebar.component";
import {SidebarToggleDirective} from "./directives/sidebar-toggle.directive";
import {RightSidebarComponent} from "./components/right-sidebar.component";
import {EffectsModule} from "@ngrx/effects";
import {GameEffects} from "./common/games/games.effects";
import {GamesService} from "./common/games/games.service";
import {GamesListComponent} from "./components/games-list.component";
import {AlertsListComponent} from "./components/alerts-list.component";


@NgModule({
  declarations: [
    AppComponent,
    SidebarWatchDirective,
    SidebarToggleDirective,
    TemplateModalComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
    GamesListComponent,
    AlertsListComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    JsonpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    /*
      Provide the application reducer to the store.
     */
    StoreModule.provideStore(metaReducer),
    /*
      Run effects
     */
    EffectsModule.run(GameEffects)
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
