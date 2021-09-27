import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Record<string, string[]> = {}

export const chatSlice = createSlice({
  name: 'chat',
  initialState: initialState,
  reducers: {
    setChats: (
      _,
      action: PayloadAction<Record<string, string[]>>,
    ) => {
      return action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setChats } = chatSlice.actions

export default chatSlice.reducer
