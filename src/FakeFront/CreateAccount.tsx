import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  TextField,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import React, { useState } from 'react'
import { useConnection } from '../services/useConnection'

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

export const CreateAccount = ({
  open,
  handleClose,
}: Props): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  //   useDebounce(()=> {})
  const { trySignUp } = useConnection()
  const canClickLogin = username !== '' && password !== ''
  const handleSignup = () =>
    console.log('username', username, 'password', password)
  //   const handleConnect = () => trySignUp(username, password)
  return (
    <Dialog
      maxWidth="sm"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {'Créer un compte Delta Green Pizza !'}
      </DialogTitle>
      <DialogContent>
        <Grid container direction="column">
          <TextField id="email" label="email" placeholder="email" />
          <TextField
            id="password"
            label="password"
            placeholder="password"
            type="password"
          />
          <TextField
            id="password"
            label="confirm password"
            placeholder="confirm password"
            type="password"
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          disabled={!canClickLogin}
          onClick={handleSignup}
          color="primary"
        >
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  )
}
