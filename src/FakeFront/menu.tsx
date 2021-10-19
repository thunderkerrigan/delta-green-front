import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import React from 'react'
import { pizzas } from './pizzas/pizzas'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface Props {
  open: boolean
  handleClose: () => void
}

export const Menu = ({ open, handleClose }: Props): JSX.Element => {
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
              <Card
                sx={{
                  display: 'flex',
                  height: '150px',
                }}
              >
                <CardMedia
                  sx={{
                    minWidth: 150,
                    boxShadow: 'inset -2px 0 4px black',
                  }}
                  title={i.imageURL}
                  image={i.imageURL}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardContent
                    sx={{
                      flex: '1 0 auto',
                    }}
                  >
                    <Typography variant="h5">{i.name}</Typography>
                    <Typography variant="caption">
                      {i.ingredients.join(', ')}
                    </Typography>
                    <Typography>{i.price}</Typography>
                  </CardContent>
                </Box>
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
