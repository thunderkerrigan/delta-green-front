import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  isConnected: boolean
}

const initialState: UserState = {
  isConnected: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    connect: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isConnected = true
    },
    disconnect: (state) => {
      state.isConnected = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { connect, disconnect } = userSlice.actions

export default userSlice.reducer
