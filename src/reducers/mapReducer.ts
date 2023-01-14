import { mapActionTypes, ActionTypes } from '../actions/mapActions'

export interface MapState {
  route: number[] | null
  activeRoute: number | null
}

const initialState: MapState = {
  route: null,
  activeRoute: null
}

export const mapReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case mapActionTypes.ADD_LINE_POSITION_TO_STATE:
      return {
        ...state,
        route: action.payload
      }

    case mapActionTypes.SET_ACTIVE_ROUTE:
      return {
        ...state,
        activeRoute: action.payload
      }

    default: return state
  }
}