import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import imageURL from '../Images/logo.png'
// import imageURL2 from '../Images/logo_V2.png'

import { Loader } from '@react-three/drei'
import { useWebGLState, WebGLImage, WebGLProvider } from './context'
import { Image } from './Image'

interface ImageProps {
  imageURL: string
}

export const WebGLCanvas = (): React.ReactElement => {
  const state = useWebGLState()
  return (
    <WebGLProvider>
      <Canvas
        orthographic
        style={{
          height: '100vh',
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: 'none',
          transform: 'translateZ(0)',
        }}
      >
        <Suspense fallback={<Loader />}>
          {state.map(
            (
              image: {
                data: { src: React.Key | null | undefined }
              },
              i: any,
            ): JSX.Element => (
              <Image key={image.data.src} image={image} />
            ),
          )}
        </Suspense>
      </Canvas>
    </WebGLProvider>
  )
}

const LoadingScreen = () => {
  return (
    <>
      <WebGLImage src={imageURL} />
    </>
  )
}
export default LoadingScreen
