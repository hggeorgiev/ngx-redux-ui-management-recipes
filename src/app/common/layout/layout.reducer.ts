import * as layoutActions from './layout.actions';
import {ElementRef, Component, ViewContainerRef} from "@angular/core";

export interface State {

}

const initialState: State = {

};

export function reducer(state = initialState, action: layoutActions.LayoutActions): State {
  switch (action) {
    default:
      return state;
  }
}


