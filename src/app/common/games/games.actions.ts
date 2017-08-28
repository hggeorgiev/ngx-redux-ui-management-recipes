import {type} from "../util";
import {Action} from "@ngrx/store";

  /*
   Because the games collection is asynchronous, there need to be actions to handle
   each of the stages of the request.
   */
export const  LOAD = '[Games] load games';
export const  LOAD_SUCCESS = '[Games] successfully loaded games';
export const  LOAD_FAILURE = '[Games] failed to load games';





export class LoadGamesAction implements Action {
  readonly type = LOAD;
  constructor(public payload:any) {}
}

export class LoadGamesFailedAction implements Action {
  readonly type = LOAD_FAILURE;

  constructor() {
  }
}
export class LoadGamesSuccessAction implements Action {
  readonly type= LOAD_SUCCESS;
  constructor(public payload:any) {
  }
}


export type GameActions = LoadGamesAction | LoadGamesFailedAction | LoadGamesSuccessAction
