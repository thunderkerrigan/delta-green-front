import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Grow,
  makeStyles,
  Paper,
  Slide,
  Slider,
  TextField,
  Typography,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import React, { useEffect, useState } from 'react'
import { isUint16Array } from 'util/types'
import { useConnection } from '../services/useConnection'
import { Pizza, pizzas } from './pizzas/pizzas'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<any, any>
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

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(255,255,255, 0.1)',
    backdropFilter: 'blur(5px)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: 'flex',
    minWidth: 150,
    height: '100%',
    boxShadow: 'inset -2px 0 4px black',
  },
})

interface PizzaCount extends Pizza {
  count: number
}

export const Connect = ({ open, handleClose }: Props) => {
  const classes = useStyles()
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
