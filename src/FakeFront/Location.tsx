import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Paper,
  Slide,
  Tooltip,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import React, { ReactElement } from 'react'
import GoogleMapReact, { ChildComponentProps } from 'google-map-react'
import { LocalPizzaRounded } from '@material-ui/icons'

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
    minWidth: 150,
    boxShadow: 'inset -2px 0 4px black',
  },
})

const LocationPin = ({
  text,
}: ChildComponentProps & {
  text: string
}): ReactElement<ChildComponentProps & { text: string }> => (
  <div
    style={{
      width: '8em',
      //   backgroundColor: 'white',
      display: 'flex',
      height: '36px',
      fontWeight: 900,
      color: '#1f7d0d',
      fontSize: '3em',
    }}
  >
    <Tooltip arrow title={text}>
      <LocalPizzaRounded fontSize="large" />
    </Tooltip>
  </div>
)

export const Location = ({ open, handleClose }: Props) => {
  //   const classes = useStyles()
  const defaultProps = {
    center: {
      lat: 38.9689868,
      lng: -77.0270396,
    },
    zoom: 11,
  }
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
        {'Nous trouver'}
      </DialogTitle>
      <DialogContent>
        <div style={{ height: '30em', width: '30em' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyB1Mh2tLYYG17iwBk8uSSiBpHQRraTZvn4',
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <LocationPin
              lat={38.9601923}
              lng={-77.0049921}
              text="Delta Green"
            />
          </GoogleMapReact>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
