import React from 'react'
import {
  Grid,
  Typography,
  Avatar,
  makeStyles,
  Tooltip,
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import {
  CharacterModel,
  ClearanceLevel,
} from 'delta-green-core/src/models/CharacterModel'
import Flag from 'react-country-flag'
import { useBarcode } from 'react-barcodes'
import moment from 'moment'
import logo from '../../Images/logo.png'
import ID_background from '../../Images/ID_background4.jpg'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import RandomWord from '../../utils/RandomWord'
import useRandomWord from '../../utils/useRandomWord'

const useStyles = makeStyles((theme) => ({
  portrait: { width: theme.spacing(10), height: theme.spacing(10) },
  characterSheet: {
    padding: theme.spacing(3),
  },
  characterLineInfo: {
    // backgroundColor: 'white',
    fontWeight: 'bold',
  },
  idCard: {
    margin: 'auto',
    // border: '1px solid black',
    borderRadius: '6px',
    boxShadow: ' 2px 2px 6px black',

    backgroundImage: `url(${ID_background})`,
    backgroundSize: 'cover',
    height: '303px',
    width: '500px',
  },
  dgHeader: {
    marginTop: theme.spacing(2),
    backgroundColor: '#123718',
    height: '52px',
  },
  dgTitle: {
    fontFamily: 'VeteranTypewriter',
    color: 'white',
  },
  dgLogo: {
    marginRight: theme.spacing(1),
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
  },
  clearance: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    fontSize: theme.spacing(9),
    fontWeight: 'bold',
    border: `${theme.spacing(1.2)}px solid`,
  },
}))

const clearanceStyles: Record<ClearanceLevel, CSSProperties> = {
  0: {
    borderColor: 'grey',
    backgroundColor: 'white',
    color: 'darkGrey',
  },
  1: {
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
  },
  2: {
    borderColor: 'blue',
    backgroundColor: 'black',
    color: 'blue',
  },
  3: {
    borderColor: 'green',
    backgroundColor: 'black',
    color: 'green',
  },
  4: {
    borderColor: 'yellow',
    backgroundColor: 'black',
    color: 'orange',
  },
  5: {
    borderColor: 'red',
    backgroundColor: 'black',
    color: 'red',
  },
}

const UserBarCode = ({ value = 'bonjour' }: { value?: string }) => {
  const { inputRef } = useBarcode({
    value,
    options: {
      displayValue: false,
      height: 30,
      width: 2,
      margin: 5,
    },
  })

  return <svg ref={inputRef} />
}

const Clearance = ({
  clearanceLevel = 0,
}: {
  clearanceLevel?: ClearanceLevel
}): JSX.Element => {
  const classes = useStyles()

  return (
    <Avatar
      style={clearanceStyles[clearanceLevel]}
      className={classes.clearance}
    >
      {clearanceLevel}
    </Avatar>
  )
}

export const GeneralInfo = (
  character: Partial<CharacterModel>,
): JSX.Element => {
  const classes = useStyles()
  const {
    portrait,
    firstName,
    lastName,
    dob,
    age,
    employer,
    profession,
    nationality,
    clearanceLevel,
    gender,
    educationAndOccupationalHistory,
  } = character

  if (Object.keys(character).length > 0) {
    return (
      <Grid
        className={classes.idCard}
        container
        spacing={2}
        justifyContent="center"
      >
        <Grid
          item
          alignItems="center"
          container
          xs={12}
          className={classes.dgHeader}
        >
          <img src={logo} className={classes.dgLogo} />
          <Typography variant="h6" className={classes.dgTitle}>
            DELTA GREEN EMPLOYEE
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={3}
          spacing={2}
          direction="column"
          justifyContent="center"
        >
          <Grid item xs>
            <Avatar
              variant="rounded"
              className={classes.portrait}
              src={portrait}
            />
          </Grid>
          <Grid item xs>
            {nationality && (
              <Flag
                className="emojiFlag"
                svg
                style={{ width: '2em', height: '2em' }}
                countryCode={nationality}
                aria-label={nationality}
                title={nationality}
              />
            )}
          </Grid>
          <Grid item xs>
            <Tooltip title={`${age} ans`} aria-label="age">
              <Typography
                align="left"
                variant="overline"
                className={classes.characterLineInfo}
              >
                <RandomWord
                  word={`${moment(dob).format('DD/MM/YY')}`}
                />
              </Typography>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          item
          xs
          alignContent="flex-start"
          justifyContent="flex-start"
          direction="column"
        >
          <Grid item container xs direction="column">
            <Grid item xs>
              <Typography
                align="left"
                className={classes.characterLineInfo}
              >
                <RandomWord word={`${firstName} ${lastName}`} />
              </Typography>
            </Grid>
            <Grid item xs>
              {gender && (
                <Typography
                  align="left"
                  className={classes.characterLineInfo}
                >
                  {gender === 'male' ? '🚹 ' : '🚺 '}
                  <RandomWord word={` ${gender}`} />
                </Typography>
              )}
            </Grid>
            <Grid item xs>
              <Typography
                align="left"
                className={classes.characterLineInfo}
              >
                Profession:
                <RandomWord word={` ${profession?.name}`} />
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                align="left"
                className={classes.characterLineInfo}
              >
                Employeur:
                <RandomWord word={` ${employer}`} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Clearance clearanceLevel={clearanceLevel} />
        </Grid>
        <Grid item xs={12}>
          <UserBarCode value={`${educationAndOccupationalHistory}`} />
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid
        className={classes.idCard}
        container
        spacing={2}
        justifyContent="center"
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          className={classes.dgHeader}
        >
          <img src={logo} className={classes.dgLogo} />
          <Typography variant="h6" className={classes.dgTitle}>
            DELTA GREEN EMPLOYEE
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={3}
          spacing={2}
          direction="column"
          justifyContent="center"
        >
          <Grid item>
            <Skeleton className={classes.portrait} variant="rect" />
          </Grid>
          <Grid item xs>
            <Skeleton
              variant="rect"
              style={{ width: '2em', height: '2em', margin: 'auto' }}
            />
          </Grid>
          <Grid item xs>
            <Typography align="left" variant="overline">
              <Skeleton variant="text" />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          item
          xs
          alignContent="flex-start"
          justifyContent="flex-start"
          direction="column"
        >
          <Grid item container xs direction="column">
            <Grid item xs>
              <Typography align="left">
                <Skeleton variant="text" />
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography align="left">
                <Skeleton variant="text" />
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography align="left">
                <Skeleton variant="text" />
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography align="left">
                <Skeleton variant="text" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Clearance clearanceLevel={clearanceLevel} />
        </Grid>
        <Grid item>
          <Skeleton variant="text" width="400px" height="45px" />
        </Grid>
      </Grid>
    )
  }
}
