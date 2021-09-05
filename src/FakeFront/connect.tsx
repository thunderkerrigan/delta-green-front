import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  TextField,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import React, { useState } from 'react'
import { useConnection } from '../services/useConnection'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement
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

export const Connect = ({
  open,
  handleClose,
}: Props): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { tryLogin } = useConnection()
  const canClickLogin = username !== '' && password !== ''
  const handleConnect = () => tryLogin(username, password)
  return (
    <Dialog
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {'Connexion à votre compte Delta Green Pizza !'}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Identifiant"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mot de Passe"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          disabled={!canClickLogin}
          onClick={handleConnect}
          color="primary"
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  )
}
