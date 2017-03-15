import { createSelector } from 'reselect';
import * as games from './games.actions';



export interface State {
  loaded: boolean;
  loading: boolean;
  entities: Array<any>;
  count: number;
  page: number;
};

const initialState: State = {
  loaded: false,
  loading: false,
  entities: [],
  count: 0,
  page: 1
};

export function reducer(state = initialState, action: games.GameActions): State {
  switch (action.type) {


    case games.GameActionTypes.LOAD: {
      const page = action.payload;

      return Object.assign({}, state, {
        loading: true,
        /*
         If there is no page selected, use the page from the initial state
         */
        page: page == null ? state.page : page
      });
    }

    case games.GameActionTypes.LOAD_SUCCESS: {
      const games = action.payload['results'];
      const gamesCount = action.payload['number_of_total_results'];

      return Object.assign({}, state ,{
        loaded: true,
        loading: false,
        entities: games,
        count: gamesCount
      });
    }

    case games.GameActionTypes.LOAD_FAILURE: {
      return Object.assign({}, state ,{
        loaded: true,
        loading: false,
        entities:[],
        count: 0
      });
    }
    default:
      return state;


  }

}
/*
 Selectors for the state that will be later
 used in the games-list component
 */
export const getEntities = (state:State) =>  state.entities;
export const getPage = (state:State) => state.page;
export const getCount = (state:State) => state.count;
export const getLoadingState = (state:State) => state.loading;
