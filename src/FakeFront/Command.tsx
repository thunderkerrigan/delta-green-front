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
  Typography,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import React, { useEffect, useState } from 'react'
import { isUint16Array } from 'util/types'
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
    display: 'flex',
    minWidth: 150,
    height: '100%',
    boxShadow: 'inset -2px 0 4px black',
  },
})

interface PizzaCount extends Pizza {
  count: number
}

export const Command = ({ open, handleClose }: Props) => {
  const classes = useStyles()
  const [cartItems, setcartItems] = useState<Pizza[]>([])
  const cartCount = cartItems.reduce<PizzaCount[]>(
    (current, item) => {
      const index = current.map((i) => i.name).indexOf(item.name)
      if (index !== -1) {
        current[index].count++
        return current.sort((a, b) => a.name.localeCompare(b.name))
      } else {
        return [...current, { ...item, count: 1 }].sort((a, b) =>
          a.name.localeCompare(b.name),
        )
      }
    },
    [],
  )

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
          <Grid item xs={9} container spacing={2}>
            {pizzas.map((i) => (
              <Grid item key={i.name} xs={6}>
                <Card className={classes.root}>
                  <CardActionArea
                    style={{ display: 'flex' }}
                    onClick={() =>
                      setcartItems((current) => [...current, i])
                    }
                  >
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
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={3}>
            <Grow in={cartItems.length > 0}>
              <Paper style={{ width: '100%', padding: '1em 0' }}>
                {cartCount.map((i) => {
                  return (
                    <Grid
                      style={{ padding: '0 1em' }}
                      key={i.name}
                      container
                      spacing={2}
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <img
                          style={{ width: '20px' }}
                          src={i.imageURL}
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          style={{
                            display: 'flex',
                            flexGrow: 1,
                            padding: '0 0.2em',
                          }}
                          align="left"
                        >
                          {i.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography align="right">{`X ${i.count}`}</Typography>
                      </Grid>
                    </Grid>
                  )
                })}
                <Divider style={{ margin: '1em 0.4em' }} />
                <Grid
                  style={{ padding: '0 1em' }}
                  container
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Typography
                    style={{
                      display: 'flex',
                      flexGrow: 1,
                      padding: '0 0.2em',
                    }}
                    align="left"
                  >
                    Total
                  </Typography>
                  <Typography align="right">
                    {cartCount
                      .map((i) => i.count * i.price)
                      .reduce(
                        (sum, item) =>
                          parseFloat((sum += item).toFixed(2)),
                        0,
                      )}
                  </Typography>
                </Grid>
              </Paper>
            </Grow>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={handleClose}
          color="primary"
        >
          Payer
        </Button>
      </DialogActions>
    </Dialog>
  )
}
