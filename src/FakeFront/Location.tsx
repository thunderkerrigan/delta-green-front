import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Tooltip,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import React, { ReactElement } from 'react'
import GoogleMapReact, { ChildComponentProps } from 'google-map-react'
import { LocalPizzaRounded } from '@mui/icons-material'

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

export const Location = ({
  open,
  handleClose,
}: Props): JSX.Element => {
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
              key: process.env.REACT_APP_GOOGLE_MAP_API_KEY as string,
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
