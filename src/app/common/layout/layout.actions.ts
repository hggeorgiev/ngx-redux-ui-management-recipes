import {Action} from '@ngrx/store';
import {type} from "../util";

/*
 Layout actions are defined here
 */


export const LayoutActionTypes =  {
  OPEN_MODAL: type('[Layout] Open modal'),
  CLOSE_MODAL: type('[Layout] Close modal')
};

/*
  Modal actions
 */
export class OpenModalAction implements Action {
  type = LayoutActionTypes.OPEN_MODAL;
  constructor(public payload:string) {
  }
}

export class CloseModalAction implements Action {
  type = LayoutActionTypes.CLOSE_MODAL;
  constructor() {
  }
}


export type LayoutActions = CloseModalAction | OpenModalAction

