import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      localStorage.clear()
      console.log(current(state))

      console.log(action.payload)
      state.user = action.payload.user
      state.token = action.payload.token
      console.log(current(state))
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
    changeInfoUser(state, action) {
      const { firstName, lastName, username, birthdate } = action.payload
      state.user.firstName = firstName
      state.user.lastName = lastName
      state.user.username = username
      state.user.birthdate = birthdate
    }
  }
})

export const { login, register, logout, changeInfoUser } = authSlice.actions

export default authSlice.reducer
