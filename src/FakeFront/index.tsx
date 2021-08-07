import {
  AppBar,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React, { FC, Fragment, ReactElement } from 'react'
import logoPizza from '../Images/logo_V2.png'
import background from '../Images/background.jpg'
import background2 from '../Images/background2.jpg'
import pizza from '../Images/pizza.jpg'
import pizza2 from '../Images/i30328-pizza-au-chorizo.jpg'
import pizza3 from '../Images/pizzz.jpg'
import {
  LocalPizzaRounded,
  RestaurantMenu,
  ShoppingCart,
} from '@material-ui/icons'
import { useDispatch } from 'react-redux'
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

const carrouselStep = [pizza, pizza2, pizza3]

const useStyles = makeStyles({
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
  },
  footer: {
    bottom: 0,
    position: 'fixed',
    height: '12em',
    width: '100vw',
    backgroundColor: '#081305',
    background:
      'linear-gradient(90deg, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 0), #ccc',
    backgroundSize: '4px auto',
    boxShadow: 'inset 0 5px 12px black',
    zIndex: 400,
  },
  card: {
    zIndex: 1000,
    width: '20em',
    height: '7em',
    borderRadius: '0 0 4px 4px',
  },
  cardImage: {
    boxShadow:
      'inset 0px 12px 12px -10px black, inset 0px -11px 8px -10px black',
  },
  belowContainer: {
    height: '100%',
    zIndex: -300,
    boxShadow: 'inset 0 5px 12px black;',
    padding: '0 20em',
  },
  below: { boxShadow: '0 3px 8px black' },
})

export const FakeFront: FC = (): ReactElement => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const login = () => dispatch(connect())
  return (
    <div>
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
      >
        <img
          className={classes.backgroundImage}
          src={pizza}
          alt="pizza"
        />

        <img
          className={classes.backgroundImage}
          src={pizza2}
          alt="pizza"
        />

        <img
          className={classes.backgroundImage}
          src={pizza3}
          alt="pizza"
        />
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
                  onClick={login}
                >
                  <ShoppingCart />
                  Commander
                </Button>
                <div style={{ width: '3em' }} />
                <Button className={classes.HeaderButton}>
                  <RestaurantMenu />
                  Menu
                </Button>
                <div style={{ width: '3em' }} />
                <Button className={classes.HeaderButton}>
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
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
                  component="img"
                  alt="Contemplative Reptile"
                  // height="140"
                  width="130px"
                  image={logoPizza}
                  title="Contemplative Reptile"
                />
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
                  alt="Contemplative Reptile"
                  // height="140"
                  className={classes.cardImage}
                  width="130px"
                  image={logoPizza}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item className={classes.below}>
            <Card
              style={{ backgroundColor: blue[500] }}
              // elevation={4}
              className={classes.card}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.cardImage}
                  width="130px"
                  image={logoPizza}
                  title="Contemplative Reptile"
                />
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
