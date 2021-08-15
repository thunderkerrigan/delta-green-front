import { Fade, Slide } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { ReactElement, useEffect, useState } from 'react'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    marginTop: '20%',
    width: '50em',
    height: '20em',
    backgroundColor: 'rgba(255,255,255, 0.2)',
    boxShadow: '0 0 20em rgba(255,255,255, 0.3)',
  },
})

interface PromoItem {
  direction: 'left' | 'right' | 'up' | 'down' | undefined
  content: ReactElement
}

export const Promo = (): ReactElement => {
  const classes = useStyles()
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
      <div className={classes.root}>LOL</div>
    </Fade>
  )
}
