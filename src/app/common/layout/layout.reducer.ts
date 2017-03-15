import * as layout from './layout.actions';

export interface State {
  openedModalName:string;
  leftSidebarOpened:boolean;
  rightSidebarOpened:boolean;
  windowHeight:number;
  windowWidth:number;
}

const initialState: State = {
  openedModalName: null,
  leftSidebarOpened:true,
  rightSidebarOpened:false,
  windowHeight: window.screen.height,
  windowWidth: window.screen.width
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
    /*
     Window resize case
     */
    case layout.LayoutActionTypes.RESIZE_WINDOW: {
      const height:number = action.payload['height'];
      const width:number = action.payload['width'];
      return Object.assign({}, state, {
        windowHeight: height,
        windowWidth: width
      });
    }


    default:
      return state;
  }
}

export const getOpenedModalName = (state:State) =>  state.openedModalName;
export const getLeftSidenavState = (state:State) => state.leftSidebarOpened;
export const getRightSidenavState = (state:State) => state.rightSidebarOpened;
export const getWindowWidth = (state:State) => state.windowWidth;
export const getWindowHeight = (state:State) => state.windowHeight;
