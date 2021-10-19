import axios from 'axios'
import { useCallback } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import useAsync from '../hooks/useAsync'
import { connect, disconnect } from '../redux/UserSlice'

export const useTryConnection = (): ReturnType<typeof useAsync> => {
  const dispatch = useDispatch()
  const [cookies, setCookie, removeCookie] = useCookies([
    'delta-green.JWT',
  ])
  const memoizedRequest = useCallback(async () => {
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
      return data
    } catch (error) {
      removeCookie('delta-green.JWT')
      dispatch(disconnect())
      return false
    }
  }, [cookies, dispatch, removeCookie])
  return useAsync<boolean>(memoizedRequest, [])
}

export const useConnection = (): {
  useTryConnection: () => ReturnType<typeof useAsync>
  tryLogin: (
    username: string,
    password: string,
  ) => Promise<null | string>
  trySignUp: (username: string, password: string) => Promise<void>
  logout: () => void
} => {
  const dispatch = useDispatch()
  const [cookies, setCookie, removeCookie] = useCookies([
    'delta-green.JWT',
  ])

  const useTryConnection = () =>
    useAsync<boolean>(async () => {
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
        return data
      } catch (error) {
        removeCookie('delta-green.JWT')
        dispatch(disconnect())
        return false
      }
    }, [dispatch])

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

  const logout = () => {
    // simply delete cookie and disconnect from redux
    removeCookie('delta-green.JWT')
    dispatch(disconnect())
  }
  return { useTryConnection, tryLogin, trySignUp, logout }
}
