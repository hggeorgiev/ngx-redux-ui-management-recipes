import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import * as games from "./games.actions";
import {Actions, Effect} from "@ngrx/effects";
import {GamesService} from "./games.service";
import {LoadGamesSuccessAction} from "./games.actions";
import {LoadGamesFailedAction} from "./games.actions";



@Injectable()
export class GameEffects {
  constructor(
    private _actions: Actions,
    private _service: GamesService
  ) { }



  @Effect() loadGames$ = this._actions.ofType(games.GameActionTypes.LOAD)
    .switchMap(() => this._service.query()
      .map((games) => {
    return new LoadGamesSuccessAction(games)

  }))
    .catch(() => Observable.of( new LoadGamesFailedAction())
    );




}
