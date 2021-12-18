import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Fade,
  Grid,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { FC, ReactElement, useState } from 'react'
import logoPizza from '../Images/logo_V2.png'
import background2 from '../Images/background2.jpg'
import pizza from '../Images/pizza.jpg'
import pizza2 from '../Images/i30328-pizza-au-chorizo.jpg'
import pizza3 from '../Images/pizzz.jpg'
import doublePizza from '../Images/pizz.png'
import order from '../Images/order.png'
import menu from '../Images/menu.png'
import {
  Facebook,
  Instagram,
  LocalPizzaRounded,
  RestaurantMenu,
  ShoppingCart,
  Twitter,
} from '@mui/icons-material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { amber, blue, red } from '@mui/material/colors'
import { StyledEngineProvider } from '@mui/material/styles'
import { tos } from './tos'
import { Menu } from './menu'
import { Location } from './Location'
import { Command } from './Command'
import { Connect } from './connect'
import { CreateAccount } from './CreateAccount'
import './index.css'

const HeaderButton = styled(Button)(() => ({
  fontSize: '1.6em',
  fontWeight: 900,
  color: 'white',
  fontFamily: 'roboto',
}))
const PromoBox = styled(Box)(() => ({
  position: 'absolute',
  zIndex: 1000,
  bottom: '40em',
  width: '50em',
  height: '20em',
  borderRadius: '0 15px 15px 0 ',
}))
const BelowGrid = styled(Grid)(() => ({
  zIndex: -1,
  pointerEvents: 'auto',
  boxShadow: '0 3px 8px black',
  ':hover': {
    cardImage: {
      transform: 'scale(1.2) rotateZ(15deg);',
    },
    cardTitle: {
      transform: 'scale(1.2)',
    },
  },
}))
const BelowCard = styled(Card)(() => ({
  zIndex: 1000,
  width: '20em',
  height: '7em',
  borderRadius: '0 0 4px 4px',
  boxShadow:
    'inset 0px 12px 12px -10px black, inset 0px -11px 8px -10px black',
}))
const CardImage = styled(CardMedia)(() => ({
  height: '215px',
  width: 'auto',
  transition: 'transform .2s',
}))
const CardTitle = styled(Typography)(() => ({
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
  fontFamily: 'roboto',
}))

const PromoTypography = styled(Typography)(() => ({
  padding: '1em 1em',
  margin: 'auto',
  color: '#1f7d0d',
  textAlign: 'center',
  textShadow: '0 0 8px black',
  WebkitTextStrokeColor: 'yellow',
  WebkitTextStrokeWidth: '0.6px',
  fontWeight: 900,
  fontFamily: 'roboto',
  animationName: 'zoom',
  animationDuration: '1.2s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
}))

export const FakeFront: FC = (): ReactElement => {
  const [showDialog, setShowDialog] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showLocation, setShowLocation] = useState(false)
  const [showCommand, setShowCommand] = useState(false)
  const [showCreateAccount, setShowCreateAccount] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      {tos({
        open: showDialog,
        handleClose: () => setShowDialog(false),
      })}
      <Menu open={showMenu} handleClose={() => setShowMenu(false)} />
      <Connect
        open={showLogin}
        handleClose={() => setShowLogin(false)}
      />
      <CreateAccount
        open={showCreateAccount}
        handleClose={() => setShowCreateAccount(false)}
      />
      <Command
        open={showCommand}
        handleClose={() => setShowCommand(false)}
        handleSignIn={() => {
          setShowCommand(false)
          setShowLogin(true)
        }}
        handleSignUp={() => {
          setShowCommand(false)
          setShowCreateAccount(true)
        }}
      />
      <Location
        open={showLocation}
        handleClose={() => setShowLocation(false)}
      />
      <StyledEngineProvider injectFirst>
        <Box
          sx={{
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            zIndex: -100,
            overflow: 'hidden',
          }}
        >
          <Slider
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
            <>
              <Fade in={currentIndex === 0}>
                <PromoBox>
                  <PromoTypography variant="h2">
                    LES JEUDIS PARANORMAUX!
                  </PromoTypography>
                </PromoBox>
              </Fade>
              <img
                style={{
                  zIndex: -100,
                  width: '100%',
                }}
                src={pizza}
                alt="pizza"
              />
            </>
            <>
              <Fade in={currentIndex === 1}>
                <PromoBox>
                  <PromoTypography variant="h2">
                    NOUVELLE PÂTE! PLUS DE SAVEUR!
                  </PromoTypography>
                </PromoBox>
              </Fade>
              <img
                style={{
                  zIndex: -100,
                  width: '100%',
                }}
                src={pizza2}
                alt="pizza"
              />
            </>
            <>
              <Fade in={currentIndex === 2}>
                <PromoBox>
                  <PromoTypography variant="h2">
                    VENEZ COMME VOUS ÊTES!
                  </PromoTypography>
                </PromoBox>
              </Fade>
              <img
                style={{
                  zIndex: -100,
                  width: '100%',
                }}
                src={pizza3}
                alt="pizza"
              />
            </>
          </Slider>
        </Box>
      </StyledEngineProvider>

      <Box sx={{ height: '5em' }}></Box>
      <Box sx={{ flexGrow: 1, position: 'static' }}>
        <Box
          // mt={2}
          flexGrow={1}
          position="static"
          // width="100vw"
          sx={{
            boxShadow: '1em 1em 20em 1.2em #18470f',
          }}
        >
          <AppBar
            sx={{
              height: '9em',
              background: `url(${background2})`,
              backgroundSize: '420px 420px',
              boxShadow: '0 0px 6px 1px rgb(10,10,10)',
            }}
            position="static"
          >
            <Toolbar>
              <img
                style={{
                  marginTop: '5em',
                  width: '340px',
                  zIndex: 300,
                }}
                src={logoPizza}
                alt="logo-pizza"
              />
              <Box
                sx={{
                  flexGrow: 1,
                }}
              />
              <Grid container justifyContent="flex-end" spacing={4}>
                <HeaderButton onClick={() => setShowCommand(true)}>
                  <ShoppingCart />
                  Commander
                </HeaderButton>
                <div style={{ width: '3em' }} />
                <HeaderButton onClick={() => setShowMenu(true)}>
                  <RestaurantMenu />
                  Menu
                </HeaderButton>
                <div style={{ width: '3em' }} />
                <HeaderButton onClick={() => setShowLocation(true)}>
                  <LocalPizzaRounded />
                  Nous Trouver
                </HeaderButton>
                <Box sx={{ width: '3em' }} />
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
      <Box
        sx={{
          pointerEvents: 'none',
          bottom: 0,
          position: 'fixed',
          height: '12em',
          width: '100vw',
          backgroundColor: '#070707',
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.01) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 0), #060606',
          backgroundSize: '6px auto',
          boxShadow: 'inset 0 5px 12px black',
          zIndex: 400,
        }}
      >
        <StyledEngineProvider injectFirst>
          <Grid
            container
            sx={{
              height: '100%',
              zIndex: -300,
              boxShadow: 'inset 0 5px 12px black;',
              padding: '0 20em',
            }}
            justifyContent="space-around"
            alignContent="flex-start"
          >
            <BelowGrid item>
              <BelowCard
                className="card"
                style={{ backgroundColor: red[500] }}
              >
                <CardActionArea onClick={() => setShowMenu(true)}>
                  <CardImage
                    className="cardImage"
                    image={menu}
                    title="Menu"
                  />
                  <CardTitle className="cardTitle" variant="h4">
                    ENVIE DE PIZZA?
                  </CardTitle>
                </CardActionArea>
              </BelowCard>
            </BelowGrid>
            <BelowGrid item>
              <BelowCard
                className="card"
                style={{ backgroundColor: amber[500] }}
                // elevation={4}
              >
                <CardActionArea>
                  <CardImage
                    className="cardImage"
                    sx={{ width: '130px' }}
                    image={doublePizza}
                    title="pizza deal!"
                  />
                  <CardTitle className="cardTitle" variant="h4">
                    DOUBLE DEAL!
                  </CardTitle>
                </CardActionArea>
              </BelowCard>
            </BelowGrid>
            <BelowGrid item>
              <BelowCard
                className="card"
                style={{ backgroundColor: blue[500] }}
                // elevation={4}
              >
                <CardActionArea onClick={() => setShowCommand(true)}>
                  <CardImage
                    className="cardImage"
                    image={order}
                    title="Order Online"
                  />
                  <CardTitle className="cardTitle" variant="h4">
                    COMMANDER EN LIGNE
                  </CardTitle>
                </CardActionArea>
              </BelowCard>
            </BelowGrid>
          </Grid>
        </StyledEngineProvider>
        <Grid
          container
          style={{
            position: 'absolute',
            height: '12em',
            width: '14em',
            padding: '1em',
            bottom: 0,
            right: 0,
          }}
          justifyContent="flex-end"
          alignContent="center"
        >
          <Grid
            item
            sx={{
              pointerEvents: 'auto',
            }}
          >
            <>
              <IconButton
                size="large"
                href={'https://www.facebook.com/'}
              >
                <Facebook fontSize="large" color="success" />
              </IconButton>
              <IconButton size="large" href={'https://twitter.com'}>
                <Twitter fontSize="large" color="success" />
              </IconButton>
              <IconButton
                size="large"
                href={'https://www.instagram.com/'}
              >
                <Instagram fontSize="large" color="success" />
              </IconButton>
            </>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
