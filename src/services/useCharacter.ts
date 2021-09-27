import axios from 'axios'
import { CharacterModel } from 'delta-green-core/src/models/CharacterModel'
import { useMemo } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { setCharacter } from '../redux/CharacterSlice'
import { RootState } from '../redux/store'
import { setCharacters, UserState } from '../redux/UserSlice'
export const useCharacter = (): {
  getMyCharacters: () => Promise<void>
  getCharacter: () => Promise<void>
  addCharacter: () => Promise<void>
} => {
  const dispatch = useDispatch()
  const character = useSelector((state: RootState) => state.character)
  const [cookies] = useCookies(['delta-green.JWT'])

  const getMyCharacters = useMemo(
    () => async () => {
      try {
        const { data } = await axios.get<
          Omit<UserState, 'isConnected'>
        >('http://localhost:33582/api/myCharacters', {
          headers: {
            Authorization: `Bearer ${cookies['delta-green.JWT']}`,
          },
        })
        if (data) {
          dispatch(setCharacters(data))
        }
      } catch (error) {
        // TODO
      }
    },
    [cookies, dispatch],
  )
  const getCharacter = useMemo(
    () => async (): Promise<void> => {
      try {
        dispatch(setCharacter(null))
        const { data } = await axios.get<CharacterModel>(
          'http://localhost:33582/api/randomCharacter',
          {
            headers: {
              Authorization: `Bearer ${cookies['delta-green.JWT']}`,
            },
          },
        )
        if (data) {
          dispatch(setCharacter(data))
        }
      } catch (error) {
        //  TODO
      }
    },
    [cookies, dispatch],
  )

  const addCharacter = useMemo(
    () => async () => {
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
    },
    [character, cookies],
  )
  return { addCharacter, getCharacter, getMyCharacters }
}
