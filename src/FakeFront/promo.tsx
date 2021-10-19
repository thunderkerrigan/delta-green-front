import React, { ReactElement, useEffect, useState } from 'react'
import { Box, Fade } from '@mui/material'

export const Promo = (): ReactElement => {
  const [showPromo, setShowPromo] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPromo((current) => !current)
      setTimeout(() => {
        setShowPromo((current) => !current)
      }, 500)
    }, 6000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <Fade in={showPromo} unmountOnExit mountOnEnter>
      <Box
        sx={{
          position: 'absolute',
          marginTop: '20%',
          width: '50em',
          height: '20em',
          backgroundColor: 'rgba(255,255,255, 0.2)',
          boxShadow: '0 0 20em rgba(255,255,255, 0.3)',
        }}
      >
        LOL
      </Box>
    </Fade>
  )
}
