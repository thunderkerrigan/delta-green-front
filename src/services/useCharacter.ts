import axios from 'axios'
import { CharacterModel } from 'delta-green-core/src/models/CharacterModel'
import { useCallback } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import {
  resetCharacter,
  setCharacterProperties,
} from '../redux/CharacterSlice'
import { RootState } from '../redux/store'
import useAsync from '../hooks/useAsync'
import { setCharacters, UserState } from '../redux/UserSlice'
export const useCharacter = (): {
  useGetMyCharacters: () => ReturnType<typeof useAsync>
  useGetCharacter: () => ReturnType<typeof useAsync>
  useAddCharacter: () => ReturnType<typeof useAsync>
  useRemoveCharacter: () => ReturnType<typeof useAsync>
} => {
  const dispatch = useDispatch()
  const character = useSelector((state: RootState) => state.character)
  const [cookies] = useCookies(['delta-green.JWT'])

  const memoizedGetMyCharacterRequest = useCallback(async () => {
    const { data } = await axios.get<Omit<UserState, 'isConnected'>>(
      'http://localhost:33582/api/myCharacters',
      {
        headers: {
          Authorization: `Bearer ${cookies['delta-green.JWT']}`,
        },
      },
    )
    if (data) {
      dispatch(setCharacters(data))
    }
  }, [cookies, dispatch])

  const useGetMyCharacters = () =>
    useAsync<void>(memoizedGetMyCharacterRequest, [])
  const memoizedGetCharacterRequest = useCallback(async () => {
    try {
      dispatch(resetCharacter())
      const { data } = await axios.get<CharacterModel>(
        'http://localhost:33582/api/randomCharacter',
        {
          headers: {
            Authorization: `Bearer ${cookies['delta-green.JWT']}`,
          },
        },
      )
      if (data) {
        dispatch(setCharacterProperties(data))
      }
    } catch (error) {
      //  TODO
    }
  }, [cookies, dispatch])

  const useGetCharacter = () =>
    useAsync<void>(memoizedGetCharacterRequest)

  const memoizedAddCharacterRequest = useCallback(async () => {
    try {
      const { data } = await axios.put<CharacterModel>(
        'http://localhost:33582/api/add',
        character,
        {
          headers: {
            Authorization: `Bearer ${cookies['delta-green.JWT']}`,
          },
        },
      )
      if (data) {
        // dispatch(setCharacter(data))
      }
    } catch (error) {
      //   TODO
    }
  }, [character, cookies])

  const useAddCharacter = () =>
    useAsync<void>(memoizedAddCharacterRequest)

  const memoizedRemoveCharacterRequest = useCallback(async () => {
    try {
      const { data } = await axios.put<CharacterModel>(
        'http://localhost:33582/api/remove',
        character?.id,
        {
          headers: {
            Authorization: `Bearer ${cookies['delta-green.JWT']}`,
          },
        },
      )
      if (data) {
        // dispatch(setCharacter(data))
      }
    } catch (error) {
      //   TODO
    }
  }, [character, cookies])

  const useRemoveCharacter = () =>
    useAsync<void>(memoizedRemoveCharacterRequest)
  return {
    useAddCharacter,
    useGetCharacter,
    useGetMyCharacters,
    useRemoveCharacter,
  }
}
