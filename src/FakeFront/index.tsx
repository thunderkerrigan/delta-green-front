import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Fade,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React, {
  FC,
  Fragment,
  ReactElement,
  useEffect,
  useState,
} from 'react'
import logoPizza from '../Images/logo_V2.png'
import background2 from '../Images/background2.jpg'
import pizza from '../Images/pizza.jpg'
import pizza2 from '../Images/i30328-pizza-au-chorizo.jpg'
import pizza3 from '../Images/pizzz.jpg'
import doublePizza from '../Images/pizz.png'
import order from '../Images/order.png'
import menu from '../Images/menu.png'
import {
  LocalPizzaRounded,
  RestaurantMenu,
  ShoppingCart,
} from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from '../redux/UserSlice'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  SocialLink,
  SocialProvider,
} from '@mui-treasury/components/socialLink'
import { useRoundSocialLinkStyles } from '@mui-treasury/styles/socialLink/round'
import { amber, blue, red } from '@material-ui/core/colors'
import { tos } from './tos'
import { Menu } from './menu'
import { Location } from './Location'
import { Command } from './Command'
import { Connect } from './connect'
import { RootState } from '../redux/store'

const useStyles = makeStyles({
  '@keyframes zoom': {
    '0%': { transform: 'scale(1) rotateZ(15deg)' },
    '50%': { transform: 'scale(1.2) rotateZ(10deg)' },
    '100%': { transform: 'scale(1) rotateZ(15deg)' },
  },
  grow: {
    flexGrow: 1,
  },
  logo: { marginTop: '5em', width: '340px', zIndex: 300 },
  HeaderButton: {
    fontSize: '1.6em',
    fontWeight: 900,
    color: 'white',
    fontFamily: 'Franklin Gothic',
  },
  glow: { boxShadow: '1em 1em 20em 1.2em #18470f' },
  appBar: {
    height: '9em',
    background: `url(${background2})`,
    backgroundSize: '420px 420px',
    boxShadow: '0 0px 6px 1px rgb(10,10,10)',
  },
  background: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    zIndex: -100,
    overflow: 'hidden',
  },
  backgroundImage: {
    zIndex: -100,
    width: '100%',
  },
  footer: {
    bottom: 0,
    position: 'fixed',
    height: '12em',
    width: '100vw',
    // backgroundColor: '#081305',
    backgroundColor: '#070707',
    background:
      'linear-gradient(90deg, rgba(255,255,255,0.01) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 0), #ccc',
    backgroundSize: '6px auto',
    boxShadow: 'inset 0 5px 12px black',
    zIndex: 400,
  },
  promoTitle: {
    padding: '1em 1em',
    // height: '100%',
    margin: 'auto',
    color: '#1f7d0d',
    textAlign: 'center',
    textShadow: '0 0 8px black',
    WebkitTextStrokeColor: 'yellow',
    WebkitTextStrokeWidth: '0.6px',
    fontWeight: 900,
    fontFamily: 'Franklin Gothic',
    animationName: '$zoom',
    animationDuration: '1.2s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  card: {
    zIndex: 1000,
    width: '20em',
    height: '7em',
    borderRadius: '0 0 4px 4px',
    boxShadow:
      'inset 0px 12px 12px -10px black, inset 0px -11px 8px -10px black',
  },
  overlayText: {
    position: 'absolute',
    zIndex: 1000,
    bottom: '40em',
    width: '50em',
    height: '20em',
    // backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: '0 15px 15px 0 ',

    // boxShadow: '0 0 20em rgba(255,255,255, 0.3)',
  },
  belowContainer: {
    height: '100%',
    zIndex: -300,
    boxShadow: 'inset 0 5px 12px black;',
    padding: '0 20em',
  },
  cardTitle: {
    padding: '0.2em 1em',
    position: 'absolute',
    top: '0',
    margin: 'auto',
    color: '#1f7d0d',
    textAlign: 'center',
    WebkitTextStrokeColor: 'yellow',
    WebkitTextStrokeWidth: '0.6px',
    fontWeight: 900,
    transition: 'transform .2s',
    fontFamily: 'Franklin Gothic',
  },
  cardImage: {
    transition: 'transform .2s',
  },
  below: {
    boxShadow: '0 3px 8px black',
    '&:hover': {
      '& $cardImage': {
        transform: 'scale(1.2) rotateZ(15deg);',
      },
      '& $cardTitle': {
        transform: 'scale(1.2)',
      },
    },
  },
})

export const FakeFront: FC = (): ReactElement => {
  const classes = useStyles()
  const [showDialog, setShowDialog] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showLocation, setShowLocation] = useState(false)
  const [showCommand, setShowCommand] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const isConnected = useSelector(
    (state: RootState) => state.user.isConnected,
  )

  useEffect(() => {
    if (!isConnected !== showLogin) {
      setShowLogin(!isConnected)
    }
  }, [isConnected, showLogin])
  return (
    <div>
      {tos({
        open: showDialog,
        handleClose: () => setShowDialog(false),
      })}
      <Menu open={showMenu} handleClose={() => setShowMenu(false)} />
      <Connect
        open={showLogin}
        handleClose={() => setShowLogin(false)}
      />
      <Command
        open={showCommand}
        handleClose={() => setShowCommand(false)}
      />
      <Location
        open={showLocation}
        handleClose={() => setShowLocation(false)}
      />
      <Slider
        className={classes.background}
        // style={{ height: '100vh' }}
        arrows={false}
        autoplay
        infinite
        speed={500}
        autoplaySpeed={6000}
        draggable={false}
        slidesToShow={1}
        slidesToScroll={1}
        pauseOnHover={false}
        beforeChange={() => setCurrentIndex(-1)}
        afterChange={(i) => setCurrentIndex(i)}
      >
        <div>
          <Fade in={currentIndex === 0}>
            <div className={classes.overlayText}>
              <Typography variant="h2" className={classes.promoTitle}>
                LES JEUDIS PARANORMAUX!
              </Typography>
            </div>
          </Fade>
          <img
            className={classes.backgroundImage}
            src={pizza}
            alt="pizza"
          />
        </div>
        <div>
          <Fade in={currentIndex === 1}>
            <div className={classes.overlayText}>
              <Typography variant="h2" className={classes.promoTitle}>
                NOUVELLE PÂTE! PLUS DE SAVEUR!
              </Typography>
            </div>
          </Fade>
          <img
            className={classes.backgroundImage}
            src={pizza2}
            alt="pizza"
          />
        </div>
        <div>
          <Fade in={currentIndex === 2}>
            <div className={classes.overlayText}>
              <Typography variant="h2" className={classes.promoTitle}>
                VENEZ COMME VOUS ÊTES!
              </Typography>
            </div>
          </Fade>
          <img
            className={classes.backgroundImage}
            src={pizza3}
            alt="pizza"
          />
        </div>
      </Slider>
      <div style={{ height: '5em' }}></div>
      <div className={classes.grow} style={{ position: 'static' }}>
        <div className={classes.glow}>
          <AppBar className={classes.appBar} position="static">
            <Toolbar>
              <img
                className={classes.logo}
                src={logoPizza}
                alt="logo-pizza"
              />
              <div className={classes.grow} />
              <Grid container justifyContent="flex-end" spacing={4}>
                <Button
                  className={classes.HeaderButton}
                  onClick={() => setShowCommand(true)}
                >
                  <ShoppingCart />
                  Commander
                </Button>
                <div style={{ width: '3em' }} />
                <Button
                  className={classes.HeaderButton}
                  onClick={() => setShowMenu(true)}
                >
                  <RestaurantMenu />
                  Menu
                </Button>
                <div style={{ width: '3em' }} />
                <Button
                  className={classes.HeaderButton}
                  onClick={() => setShowLocation(true)}
                >
                  <LocalPizzaRounded />
                  Nous Trouver
                </Button>
                <div style={{ width: '3em' }} />
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
      </div>
      <div className={classes.footer}>
        <Grid
          container
          className={classes.belowContainer}
          justifyContent="space-around"
          alignContent="flex-start"
        >
          <Grid item className={classes.below}>
            <Card
              style={{ backgroundColor: red[500] }}
              // elevation={4}
              className={classes.card}
            >
              <CardActionArea onClick={() => setShowMenu(true)}>
                <CardMedia
                  className={classes.cardImage}
                  component="img"
                  alt="Menu"
                  // height="140"
                  // width="130px"
                  image={menu}
                  title="Menu"
                />
                <Typography
                  className={classes.cardTitle}
                  variant="h4"
                >
                  ENVIE DE PIZZA?
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item className={classes.below}>
            <Card
              style={{ backgroundColor: amber[500] }}
              // elevation={4}
              className={classes.card}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="pizza deal!"
                  // height="140"
                  className={classes.cardImage}
                  width="130px"
                  image={doublePizza}
                  title="pizza deal!"
                />
                <Typography
                  className={classes.cardTitle}
                  variant="h4"
                >
                  DOUBLE DEAL!
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item className={classes.below}>
            <Card
              style={{ backgroundColor: blue[500] }}
              // elevation={4}
              className={classes.card}
            >
              <CardActionArea onClick={() => setShowCommand(true)}>
                <CardMedia
                  component="img"
                  alt="Order online"
                  className={classes.cardImage}
                  // height="160"
                  // width="130"
                  image={order}
                  title="Order Online"
                />
                <Typography
                  className={classes.cardTitle}
                  variant="h4"
                >
                  COMMANDER EN LIGNE
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            position: 'absolute',
            // zIndex: 800,
            height: '12em',
            width: '14em',
            padding: '1em',
            bottom: 0,
            right: 0,
          }}
          justifyContent="flex-end"
          alignContent="center"
        >
          <Grid item>
            <SocialProvider useStyles={useRoundSocialLinkStyles}>
              <>
                <SocialLink
                  brand={'FacebookCircle'}
                  href={'https://www.facebook.com/'}
                />
                <SocialLink
                  brand={'Twitter'}
                  href={'https://twitter.com'}
                />
                <SocialLink
                  brand={'Instagram'}
                  href={'https://www.instagram.com/'}
                />
              </>
            </SocialProvider>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
