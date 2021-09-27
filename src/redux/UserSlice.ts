import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CharacterModel } from 'delta-green-core/src/models/CharacterModel'

export interface UserState {
  isConnected: boolean
  charactersList: CharacterModel[]
  currentSelectedCharacter: number
}

const initialState: UserState = {
  isConnected: false,
  charactersList: [],
  currentSelectedCharacter: -1,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    connect: (state) => {
      state.isConnected = true
    },
    disconnect: () => {
      return initialState
    },
    setCharacters: (
      state,
      action: PayloadAction<Omit<UserState, 'isConnected'>>,
    ) => {
      state.charactersList = action.payload.charactersList
      state.currentSelectedCharacter =
        action.payload.currentSelectedCharacter
    },
    setSelectedCharacters: (state, action: PayloadAction<number>) => {
      state.currentSelectedCharacter = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  connect,
  disconnect,
  setCharacters,
  setSelectedCharacters,
} = userSlice.actions

export default userSlice.reducer
