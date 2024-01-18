import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nightMode: false
}

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    select: (state) => {
      state.nightMode = true
    },
    unselect: (state) => {
      state.nightMode = false
    }
  }
})

export const { select } = displaySlice.actions
export const { unselect } = displaySlice.actions
export default displaySlice.reducer