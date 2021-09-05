import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Slide,
  Typography,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import React from 'react'
import { pizzas } from './pizzas/pizzas'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface Props {
  open: boolean
  handleClose: () => void
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '150px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: 150,
    boxShadow: 'inset -2px 0 4px black',
  },
})

export const Menu = ({ open, handleClose }: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <Dialog
      maxWidth="md"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {'Menu Delta Green'}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {pizzas.map((i) => (
            <Grid item key={i.name} xs={6}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  title={i.imageURL}
                  image={i.imageURL}
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="h5">{i.name}</Typography>
                    <Typography variant="caption">
                      {i.ingredients.join(', ')}
                    </Typography>
                    <Typography>{i.price}</Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
