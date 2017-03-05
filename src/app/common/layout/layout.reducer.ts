import * as layout from './layout.actions';

export interface State {
  openedModalName:string;
}

const initialState: State = {
  openedModalName: null
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
    default:
      return state;
  }
}

export const getOpenedModalName = (state:State) =>  state.openedModalName;
