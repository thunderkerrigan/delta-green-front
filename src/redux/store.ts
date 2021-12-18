import { configureStore, Reducer, AnyAction } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import characterReducer, { CharacterState } from './CharacterSlice'
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'
import { CharacterAPI } from './CharacterAPISlice'

export const store = configureStore({
  reducer: {
    [CharacterAPI.reducerPath]: CharacterAPI.reducer,
    user: userReducer,
    character: characterReducer as Reducer<CharacterState, AnyAction>,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = () =>
  useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> =
  useSelector
