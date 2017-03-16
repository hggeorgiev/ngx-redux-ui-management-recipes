import {type} from "../util";
import {Action} from "@ngrx/store";
import {SelectTabAction} from "../layout/layout.actions";
export const GameActionTypes =  {
  /*
   Because the games collection is asynchronous, there need to be actions to handle
   each of the stages of the request.
   */
  LOAD: type('[Games] load games'),
  LOAD_SUCCESS: type('[Games] successfully loaded games'),
  LOAD_FAILURE: type('[Games] failed to load games'),
};


export class LoadGamesAction implements Action {
  type = GameActionTypes.LOAD;
  constructor(public payload:any) {}
}

export class LoadGamesFailedAction implements Action {
  type = GameActionTypes.LOAD_FAILURE;

  constructor() {
  }
}
export class LoadGamesSuccessAction implements Action {
  type = GameActionTypes.LOAD_SUCCESS;
  constructor(public payload:any) {
  }
}


export type GameActions = LoadGamesAction | LoadGamesFailedAction | LoadGamesSuccessAction
