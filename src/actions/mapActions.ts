
export enum mapActionTypes {
  GET_LINE_POSITION = 'GET_LINE_POSITION',
  ADD_LINE_POSITION_TO_STATE = 'ADD_LINE_POSITION_TO_STATE',
  SET_ACTIVE_ROUTE = 'SET_ACTIVE_ROUTE'
}

export const getLinePosition = (payload: { from: number[], to: number[] }): GetLinePositionActionType => {
  return {
    type: mapActionTypes.GET_LINE_POSITION,
    payload
  }
}

export const addLinePositionToState = (payload: []): AddLinePositionToStateActionType => {
  return {
    type: mapActionTypes.ADD_LINE_POSITION_TO_STATE,
    payload
  }
}

export const setActiveRoute = (payload: number): SetActiveRouteActionType => {
  return {
    type: mapActionTypes.SET_ACTIVE_ROUTE,
    payload
  }
}

export type GetLinePositionActionType = {
  type: mapActionTypes.GET_LINE_POSITION,
  payload: { from: number[], to: number[] }
}

export type AddLinePositionToStateActionType = {
  type: mapActionTypes.ADD_LINE_POSITION_TO_STATE,
  payload: number[]
}

export type SetActiveRouteActionType = {
  type: mapActionTypes.SET_ACTIVE_ROUTE,
  payload: number
}

export type ActionTypes =
  | GetLinePositionActionType
  | AddLinePositionToStateActionType
  | SetActiveRouteActionType