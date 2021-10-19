import React from 'react'
import {
  Grid,
  Typography,
  Avatar,
  Tooltip,
  styled,
} from '@mui/material'
import { Skeleton } from '@mui/lab'
import {
  CharacterModel,
  ClearanceLevel,
} from 'delta-green-core/src/models/CharacterModel'
import Flag from 'react-country-flag'
import { useBarcode } from 'react-barcodes'
import moment from 'moment'
import logo from '../../Images/logo.png'
// import ID_background from '../../Images/ID_background4.jpg'
import ID_background from '../../Images/ID_background2_2.png'
// import ID_background from '../../Images/ID_background2.png'
// import ID_background from '../../Images/ID_background5.jpg'
// import ID_background from '../../Images/ID_background6.gif'
import RandomWord from '../../utils/RandomWord'
import { CSSProperties } from '@mui/material/styles/createMixins'

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

const ClearanceAvatar = styled(Avatar)(({ theme }) => ({
  height: theme.spacing(12),
  width: theme.spacing(12),
  fontSize: theme.spacing(9),
  fontWeight: 'bold',
  border: '10px solid',
  marginRight: theme.spacing(2),
}))

const Clearance = ({
  clearanceLevel = 0,
}: {
  clearanceLevel?: ClearanceLevel
}): JSX.Element => {
  return (
    <ClearanceAvatar style={clearanceStyles[clearanceLevel]}>
      {clearanceLevel}
    </ClearanceAvatar>
  )
}

export const GeneralInfo = (
  character: Partial<CharacterModel>,
): JSX.Element => {
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
        sx={{
          margin: 'auto',
          overflow: 'hidden',
          borderRadius: '6px',
          boxShadow: ' 2px 2px 6px black',

          backgroundImage: `url(${ID_background})`,
          backgroundSize: 'cover',
          height: '303px',
          width: '500px',
        }}
        container
        spacing={1.5}
        justifyContent="center"
      >
        <Grid
          item
          alignItems="center"
          container
          xs={12}
          sx={{
            marginTop: '16px',
            backgroundColor: '#123718',
            height: '52px',
          }}
        >
          <img
            src={logo}
            style={{
              marginTop: '-8px',
              marginRight: '8px',
              width: '36px',
              height: '36px',
            }}
          />
          <Typography
            variant="h6"
            sx={{
              marginTop: '-8px',
              fontFamily: 'VeteranTypewriter',
              color: 'white',
            }}
          >
            DELTA GREEN AGENT
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
              sx={{ width: '80px', height: '80px' }}
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
                sx={{ fontWeight: 'bold' }}
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
              <Typography align="left" sx={{ fontWeight: 'bold' }}>
                <RandomWord word={`${firstName} ${lastName}`} />
              </Typography>
            </Grid>
            <Grid item xs>
              {gender && (
                <Typography align="left" sx={{ fontWeight: 'bold' }}>
                  {gender === 'male' ? '🚹 ' : '🚺 '}
                  <RandomWord word={` ${gender}`} />
                </Typography>
              )}
            </Grid>
            <Grid item xs>
              <Typography align="left" sx={{ fontWeight: 'bold' }}>
                Profession:
                <RandomWord word={` ${profession?.name}`} />
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography align="left" sx={{ fontWeight: 'bold' }}>
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
        sx={{
          margin: 'auto',
          overflow: 'hidden',
          // border: '1px solid black',
          borderRadius: '6px',
          boxShadow: ' 2px 2px 6px black',

          backgroundImage: `url(${ID_background})`,
          backgroundSize: 'cover',
          height: '303px',
          width: '500px',
        }}
        container
        spacing={2}
        justifyContent="center"
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          sx={{
            marginTop: '16px',
            backgroundColor: '#123718',
            height: '52px',
          }}
        >
          <img
            src={logo}
            style={{
              marginRight: '8px',
              width: '36px',
              height: '36px',
            }}
          />
          <Typography
            variant="h6"
            sx={{ fontFamily: 'VeteranTypewriter', color: 'white' }}
          >
            DELTA GREEN AGENT
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
            <Skeleton
              sx={{ width: '80px', height: '80px' }}
              variant="rectangular"
            />
          </Grid>
          <Grid item xs>
            <Skeleton
              variant="rectangular"
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
