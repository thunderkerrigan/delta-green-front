import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { CharacterModel } from 'delta-green-core/src/models/CharacterModel'

export type CharacterState = CharacterModel | null

// const charactersAdapter = createEntityAdapter<CharacterModel>({
//   selectId: (character) => character.id,
//   sortComparer: (a, b) => a.lastName.localeCompare(b.lastName),
// })
// const _setCharacter: CaseReducer<
//   CharacterState,
//   PayloadAction<CharacterModel>
// > = (state, action) => {
//   state = action.payload
// }

const initialState: CharacterState = null

export const characterSlice = createSlice({
  name: 'character',
  initialState: initialState as CharacterState,
  reducers: {
    setCharacter: (_, action: PayloadAction<CharacterState>) => {
      return action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCharacter } = characterSlice.actions

export default characterSlice.reducer
