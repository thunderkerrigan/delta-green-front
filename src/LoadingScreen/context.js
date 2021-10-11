/* eslint-disable react/prop-types */

import { extend } from '@react-three/fiber'
import React, {
  useState,
  createContext,
  useContext,
  useRef,
} from 'react'
const WebGLStateContext = createContext()
const WebGLDispatchContext = createContext()
export const WebGLProvider = ({ children }) => {
  const [state, dispatch] = useState([])
  return (
    <WebGLStateContext.Provider value={state}>
      <WebGLDispatchContext.Provider value={dispatch}>
        {children}
      </WebGLDispatchContext.Provider>
    </WebGLStateContext.Provider>
  )
}

export function useWebGLState() {
  const context = useContext(WebGLStateContext)
  if (context === undefined) {
    throw new Error(
      'useWebGLState must be used within a WebGLProvider',
    )
  }
  return context
}
export function useWebGLDispatch() {
  const context = useContext(WebGLDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useWebGLDispatch must be used within an WebGLProvider',
    )
  }
  return context
}

export const WebGLImage = (props) => {
  const ref = useRef()
  const dispatch = useWebGLDispatch()
  const [loaded, setLoaded] = useState(false)
  const handleLoad = () => {
    setLoaded(true)
    dispatch((images) => [...images, { data: ref.current }])
  }
  return (
    <img
      alt=""
      {...props}
      ref={ref}
      onLoad={handleLoad}
      style={{
        opacity: loaded ? 0 : 1,
      }}
    />
  )
}

extend(WebGLImage)
