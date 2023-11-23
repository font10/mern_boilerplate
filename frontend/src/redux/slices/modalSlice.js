import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showModal: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toFalse (state) {
      state.showModal = false
    },
    toTrue (state) {
      state.showModal = true
    }
  }
})

export const { toFalse, toTrue } = modalSlice.actions

export default modalSlice.reducer
