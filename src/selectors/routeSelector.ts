import { RootState } from "../store"

const selectRouteFromState = (state: RootState) => {
  return state.map
}

export const selectRoute = (state: RootState) => {
  return selectRouteFromState(state).route
}

export const selectActiveRoute = (state: RootState) => {
  return selectRouteFromState(state).activeRoute
}