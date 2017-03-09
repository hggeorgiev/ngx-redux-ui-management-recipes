import * as layout from './layout.actions';

export interface State {
  openedModalName:string;
  leftSidebarOpened:boolean;
  rightSidebarOpened:boolean;
}

const initialState: State = {
  openedModalName: null,
  leftSidebarOpened:true,
  rightSidebarOpened:false
};


/*
  The reducer of the layout state. Each time an action for the layout is dispatched,
  it will create a new state for the layout.
 */
export function reducer(state = initialState, action: layout.LayoutActions ): State {
  switch (action.type) {
    /*
      Modal cases
     */
    case layout.LayoutActionTypes.OPEN_MODAL: {

      const name = action.payload;
      return Object.assign({}, state, {
        openedModalName:name
      });
    }

    case layout.LayoutActionTypes.CLOSE_MODAL: {
      return Object.assign({}, state, {
        openedModalName:null
      });
    }

    /*
     Sidenav cases
     */
    case layout.LayoutActionTypes.CLOSE_LEFT_SIDENAV: {
      return Object.assign({}, state, {
        leftSidebarOpened: false
      });
    }
    case layout.LayoutActionTypes.OPEN_LEFT_SIDENAV: {
      return Object.assign({}, state, {
        leftSidebarOpened: true
      });
    }
    case layout.LayoutActionTypes.CLOSE_RIGHT_SIDENAV: {
      return Object.assign({}, state, {
        rightSidebarOpened: false
      });
    }
    case layout.LayoutActionTypes.OPEN_RIGHT_SIDENAV: {
      return Object.assign({}, state, {
        rightSidebarOpened: true
      });
    }

    default:
      return state;
  }
}

export const getOpenedModalName = (state:State) =>  state.openedModalName;
export const getLeftSidenavState = (state:State) => state.leftSidebarOpened;
export const getRightSidenavState = (state:State) => state.rightSidebarOpened;
