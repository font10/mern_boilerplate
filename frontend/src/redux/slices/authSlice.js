import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  location: '/',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      localStorage.clear()
      state.user = action.payload.user
      state.token = action.payload.token
    },
    register(state, action) {
      localStorage.clear()
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout(state) {
      state.user = null
      state.token = null
      localStorage.clear()
    },
    changeLocation (state, action) {
      state.location = action.payload
    }
  }
})

export const { login, register, logout, changeLocation } = authSlice.actions

export default authSlice.reducer
