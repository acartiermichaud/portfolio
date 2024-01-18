import { select, unselect } from './displaySlice'


export const displaySelect = () => (dispatch) => {
  dispatch(select())
}

export const displayUnselect = () => (dispatch) => {
  dispatch(unselect())
}