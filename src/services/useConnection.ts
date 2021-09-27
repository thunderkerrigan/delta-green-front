import axios from 'axios'
import { useMemo } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { connect, disconnect } from '../redux/UserSlice'

export const useConnection = (): {
  tryConnection: () => Promise<void>
  tryLogin: (
    username: string,
    password: string,
  ) => Promise<null | string>
  trySignUp: (username: string, password: string) => Promise<void>
  getTinyJWT: () => Promise<{ token: string }>
  logout: () => void
} => {
  const dispatch = useDispatch()
  const [cookies, setCookie, removeCookie] = useCookies([
    'delta-green.JWT',
  ])

  const tryConnection = useMemo(
    () => async () => {
      try {
        const { data } = await axios.get<boolean>(
          'http://localhost:33582/login',
          {
            headers: {
              Authorization: `Bearer ${cookies['delta-green.JWT']}`,
            },
          },
        )
        if (data === true) {
          dispatch(connect())
        } else {
          removeCookie('delta-green.JWT')
          dispatch(disconnect())
        }
      } catch (error) {
        removeCookie('delta-green.JWT')
        dispatch(disconnect())
      }
    },
    [cookies, dispatch, removeCookie],
  )

  const tryLogin = async (
    username: string,
    password: string,
  ): Promise<null | string> => {
    try {
      const { data } = await axios.post<string>(
        'http://localhost:33582/login',
        { username, password },
      )
      if (data != '') {
        setCookie('delta-green.JWT', data, {
          path: '/',
          sameSite: 'strict',
        })
        dispatch(connect())
        return null
      } else {
        removeCookie('delta-green.JWT')
        dispatch(disconnect())
        return 'problème de connexion'
      }
    } catch (error) {
      dispatch(disconnect())
      if (error && typeof error === 'object') {
        return error.toString()
      }
      return 'erreur'
    }
  }
  const trySignUp = async (username: string, password: string) => {
    try {
      const { data } = await axios.post<string>(
        'http://localhost:33582/login/signup',
        { username, password },
      )
      if (data != '') {
        setCookie('delta-green.JWT', data, {
          path: '/',
          sameSite: 'strict',
        })
        dispatch(connect())
      } else {
        removeCookie('delta-green.JWT')
        dispatch(disconnect())
      }
    } catch (error) {
      dispatch(disconnect())
    }
  }
  const getTinyJWT = async () => {
    const { data } = await axios.get<string>(
      'http://localhost:33582/login/tiny',
      {
        headers: {
          Authorization: `Bearer ${cookies['delta-green.JWT']}`,
        },
      },
    )
    if (data != '') {
      return { token: data }
    }
    return { token: '' }
  }

  const logout = () => {
    // simply delete cookie and disconnect from redux
    removeCookie('delta-green.JWT')
    dispatch(disconnect())
  }
  return { tryConnection, tryLogin, trySignUp, getTinyJWT, logout }
}
