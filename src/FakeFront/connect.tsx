import {
  AppBar,
  Box,
  Dialog,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import React, { useEffect } from 'react'
import { authUIInstance, uiConfig } from '../firebase'
import logoURL from '../Images/logo_V2.png'
import 'firebaseui/dist/firebaseui.css'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return (
    <Slide
      direction="up"
      mountOnEnter
      unmountOnExit
      ref={ref}
      {...props}
    />
  )
})

interface Props {
  open: boolean
  handleClose: () => void
}

const FirebaseAuthComponent = () => {
  useEffect(() => {
    console.log('uiinstance ready')
    console.log(
      `uiInstance.isPendingRedirect(): ${authUIInstance.isPendingRedirect()}`,
    )
    authUIInstance.start('#firebaseui-auth-container', uiConfig)
  }, [])

  return <Box margin={'16px'} id="firebaseui-auth-container" />
}

export const Connect = ({
  open,
  handleClose,
}: Props): JSX.Element => {
  return (
    <Dialog
      maxWidth="xs"
      open={open}
      fullWidth
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <AppBar position="static" id="alert-dialog-slide-title">
        <Toolbar>
          <img src={logoURL} width={'70px'} />
          <Typography variant="h6" color={'white'}>
            {'Connexion à Delta Green Pizza !'}
          </Typography>
        </Toolbar>
      </AppBar>
      <FirebaseAuthComponent />
    </Dialog>
  )
}
