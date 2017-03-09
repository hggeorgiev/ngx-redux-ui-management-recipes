import {Action} from '@ngrx/store';
import {type} from "../util";

/*
 Layout actions are defined here
 */


export const LayoutActionTypes =  {
  // Modal actions
  OPEN_MODAL: type('[Layout] Open modal'),
  CLOSE_MODAL: type('[Layout] Close modal'),
  //Left sidenav actions
  OPEN_LEFT_SIDENAV: type('[Layout] Open LeftSidenav'),
  CLOSE_LEFT_SIDENAV: type('[Layout] Close LeftSidenav'),
  //Right sidenav actions
  OPEN_RIGHT_SIDENAV: type('[Layout] Open RightSidenav'),
  CLOSE_RIGHT_SIDENAV: type('[Layout] Close RightSidenav'),
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

/*
  Sidenav  actions
 */

export class OpenLeftSidenavAction implements Action {
  type = LayoutActionTypes.OPEN_LEFT_SIDENAV;

  constructor() {
  }
}
export class CloseLeftSidenavAction implements Action {
  type = LayoutActionTypes.CLOSE_LEFT_SIDENAV;

  constructor() {
  }
}
export class OpenRightSidenavAction implements Action {
  type = LayoutActionTypes.OPEN_RIGHT_SIDENAV;

  constructor() {
  }
}

export class CloseRightSidenavAction implements Action {
  type = LayoutActionTypes.CLOSE_RIGHT_SIDENAV;

  constructor() {
  }
}

export type LayoutActions = CloseModalAction | OpenModalAction | CloseLeftSidenavAction |
                            OpenLeftSidenavAction | OpenRightSidenavAction | CloseRightSidenavAction

