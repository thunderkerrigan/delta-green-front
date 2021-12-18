import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  CharacterModel,
  Stat,
} from 'delta-green-core/src/models/CharacterModel'
import { v4 as uuidv4 } from 'uuid'

export type CharacterState = Partial<CharacterModel>

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

const makeid = (length: number) => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * charactersLength),
    )
  }

  return result
}

const initialState: CharacterState = { clearanceLevel: 0 }

export const characterSlice = createSlice({
  name: 'character',
  initialState: initialState as CharacterState,
  reducers: {
    resetCharacter: (state) => {
      return state
    },
    setCharacterProperties: (
      state,
      action: PayloadAction<CharacterState>,
    ) => {
      return {
        ...state,
        ...action.payload,
        educationAndOccupationalHistory: makeid(16),
      }
    },
    setStats: (
      state,
      action: PayloadAction<{
        [key in Stat]?: number
      }>,
    ) => {
      state.stats = { ...state.stats, ...action.payload } as Record<
        Stat,
        number
      >
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCharacterProperties, resetCharacter, setStats } =
  characterSlice.actions

export default characterSlice.reducer
