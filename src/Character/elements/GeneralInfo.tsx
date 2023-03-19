import React from 'react'
import {
  Grid,
  Typography,
  Avatar,
  Tooltip,
  styled,
  Skeleton,
  TextField,
  Autocomplete,
  Box,
  MenuItem,
  Select,
  TextFieldProps,
} from '@mui/material'
import {
  ClearanceLevel,
} from 'delta-green-core/src/models/CharacterModel'
// import Flag from 'react-country-flag'
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
import {
  Female as FemaleIcon,
  Male as MaleIcon,
} from '@mui/icons-material'
import { CountryFlag } from './CountryFlag'
import { DesktopDatePicker } from '@mui/lab'
import { useAppDispatch, useTypedSelector } from '../../redux/store'
import { setCharacterProperties } from '../../redux/CharacterSlice'
import { FlagItem, FlagList } from '../../config/FlagList'
import ImageUploader from '../../ImageUploader/ImageUploader'

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
  clearanceLevel = undefined,
}: {
  clearanceLevel?: ClearanceLevel
}): JSX.Element => {
  if (clearanceLevel === undefined) {
    return <ClearanceAvatar>?</ClearanceAvatar>
  }
  return (
    <Grid item>
      <ClearanceAvatar style={clearanceStyles[clearanceLevel]}>
        {clearanceLevel}
      </ClearanceAvatar>
    </Grid>
  )
}

const IDCard = styled(Grid)(() => ({
  margin: 'auto',
  overflow: 'hidden',
  borderRadius: '6px',
  boxShadow: ' 2px 2px 6px black',
  backgroundImage: `url(${ID_background})`,
  backgroundSize: 'cover',
  height: '303px',
  width: '500px',
}))

export const IDCardHeader = (): React.ReactElement => (
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
)

// const EditableBirthDate = ({
//   dob,
// }: {
//   age?: number
//   dob?: string
// }) => {
//   const dispatch = useAppDispatch()
//   const changeDob = (dob: string) =>
//     dispatch(setCharacterProperties({ dob }))

//   const dateValue = dob ? new Date(dob) : new Date()
//   return (
//     <Grid item xs>
//       <DesktopDatePicker
//         label="date of birth"
//         inputFormat="MM/dd/yyyy"
//         value={dateValue}
//         onChange={(date: Date) => {
//           date && changeDob(date.toString())
//         }}
//         renderInput={(
//           params: JSX.IntrinsicAttributes & TextFieldProps,
//         ) => <TextField variant="standard" {...params} />}
//       />
//     </Grid>
//   )
// }
const BirthDate = ({ age, dob }: { age?: number; dob?: string }) => {
  if (!dob || !age) {
    return (
      <Grid item xs>
        <Skeleton width="32px" height="32px" />
      </Grid>
    )
  }
  return (
    <Grid item xs>
      <Tooltip title={`${age} ans`} aria-label="age">
        <Typography
          align="left"
          variant="overline"
          sx={{ fontWeight: 'bold' }}
        >
          <RandomWord word={`${moment(dob).format('DD/MM/YY')}`} />
        </Typography>
      </Tooltip>
    </Grid>
  )
}

const ProfilePicture = ({ portrait }: { portrait?: string }) => {
  if (!portrait) {
    return (
      <Grid item xs>
        <Skeleton variant="rectangular" width="80px" height="80px" />
      </Grid>
    )
  }
  return (
    <Grid item xs>
      <Avatar
        variant="rounded"
        sx={{ width: '80px', height: '80px' }}
        src={portrait}
      />
    </Grid>
  )
}

const NameZone = ({
  firstName,
  lastName,
}: {
  firstName?: string
  lastName?: string
}) => {
  if (!firstName || !lastName) {
    return (
      <Grid item xs>
        <Skeleton width="200px" height="32px" />
      </Grid>
    )
  }
  return (
    <Grid item xs>
      <Typography align="left" sx={{ fontWeight: 'bold' }}>
        <RandomWord word={`${firstName} ${lastName}`} />
      </Typography>
    </Grid>
  )
}

const GenderZone = ({ gender }: { gender?: string }) => {
  if (!gender) {
    return (
      <Grid item xs>
        <Skeleton variant="text" />
      </Grid>
    )
  }
  let icon: React.ReactElement | null = null
  switch (gender) {
    case 'male':
      icon = <MaleIcon fontSize="small" />
      break
    case 'female':
      icon = <FemaleIcon fontSize="small" />
      break
    default:
      break
  }

  return (
    <Grid item xs justifyContent="baseline">
      <Typography align="left" sx={{ fontWeight: 'bold' }}>
        {icon}
        <RandomWord word={` ${gender}`} />
      </Typography>
    </Grid>
  )
}

const WorkZone = ({
  employer,
  profession,
}: {
  employer?: string
  profession?: string
}) => {
  if (!employer || !profession) {
    return (
      <Grid item container xs direction="column">
        <Grid item xs>
          <Skeleton variant="text" />
        </Grid>
        <Grid item xs>
          <Skeleton variant="text" />
        </Grid>
      </Grid>
    )
  }
  return (
    <Grid item container xs direction="column">
      <Grid item xs>
        <Typography align="left" sx={{ fontWeight: 'bold' }}>
          Profession:
          <RandomWord word={` ${profession}`} />
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography align="left" sx={{ fontWeight: 'bold' }}>
          Employeur:
          <RandomWord word={` ${employer}`} />
        </Typography>
      </Grid>
    </Grid>
  )
}

const BarCode = ({ barcode }: { barcode?: string }) => {
  if (barcode === undefined) {
    return (
      <Grid item xs={12}>
        <Skeleton variant="text" width="400px" height="45px" />
      </Grid>
    )
  }
  return (
    <Grid item xs={12}>
      <UserBarCode value={`${barcode}`} />
    </Grid>
  )
}

export const GeneralInfo = ({
  editable = false,
}: {
  editable?: boolean
}): JSX.Element => {
  if (editable) {
    return <EditableGeneralInfo />
  } else {
    return <NonEditableGeneralInfo />
  }
}

const GenderSelector = ({
  value,
  changeGender,
}: {
  value?: string
  changeGender: (value: string) => void
}) => {
  return (
    <Select
      sx={{ minWidth: '200px' }}
      label="gender"
      value={value}
      onChange={(e) => changeGender(e.target.value)}
      variant="standard"
    >
      <MenuItem value="male">male</MenuItem>
      <MenuItem value="female">female</MenuItem>
      <MenuItem value="non-binary">non binary</MenuItem>
    </Select>
  )
}

const BirthdaySelector = ({
  date,
  changeDob,
}: {
  date?: Date
  changeDob: (stringDate: string) => void
}) => {
  return (
    <DesktopDatePicker
      label="date of birth"
      inputFormat="MM/dd/yyyy"
      value={date}
      onChange={(date: Date) => {
        date && changeDob(date.toString())
      }}
      renderInput={(
        params: JSX.IntrinsicAttributes & TextFieldProps,
      ) => <TextField variant="standard" {...params} />}
    />
  )
}

const EditableGeneralInfo = (): React.ReactElement => {
  const character = useTypedSelector((state) => state.character)
  const dispatch = useAppDispatch()
  const changeAvatar = (portrait: string) =>
    dispatch(setCharacterProperties({ portrait }))
  const changeFirstName = (firstName: string) =>
    dispatch(setCharacterProperties({ firstName }))
  const changeLastName = (lastName: string) =>
    dispatch(setCharacterProperties({ lastName }))
  const changeGender = (gender: string) => {
    const typedGender = gender as typeof character.gender
    return dispatch(setCharacterProperties({ gender: typedGender }))
  }
  const changeDob = (dob: string) =>
    dispatch(setCharacterProperties({ dob }))

  const dateValue = character?.dob
    ? new Date(character.dob)
    : new Date()
  return (
    <IDCard container spacing={1.5} justifyContent="center">
      <IDCardHeader />
      <Grid
        item
        container
        xs={3}
        spacing={2}
        direction="column"
        justifyContent="center"
      >
        <Grid item xs>
          <ImageUploader
            avatar={character?.portrait || ''}
            changeAvatar={changeAvatar}
          />
        </Grid>
        <Grid item xs>
          <CountrySelector />
        </Grid>
        <Grid item xs>
          <BirthdaySelector date={dateValue} changeDob={changeDob} />
        </Grid>
        <Grid item xs>
          <TextField
            label="first name"
            variant="standard"
            defaultValue={character?.firstName}
            onChange={(e) => changeFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs>
          <TextField
            label="last name"
            variant="standard"
            value={character?.lastName}
            onChange={(e) => changeLastName(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid item xs>
        <GenderSelector
          value={character?.gender}
          changeGender={changeGender}
        />
      </Grid>
      <Clearance clearanceLevel={character?.clearanceLevel} />
      <BarCode barcode={character?.educationAndOccupationalHistory} />
    </IDCard>
  )
}

const CountrySelector = () => {
  const character = useTypedSelector((state) => state.character)
  const selectedFlag = FlagList.find(
    (flag) => flag.Code === character?.nationality,
  )

  const dispatch = useAppDispatch()
  const changeNationality = (nationality: string) =>
    dispatch(setCharacterProperties({ nationality }))
  return (
    <Autocomplete
      sx={{ minWidth: 200 }}
      options={FlagList}
      autoHighlight
      defaultValue={selectedFlag}
      getOptionLabel={(option: FlagItem) => option.Name}
      onChange={(e, value) => changeNationality(value?.Code || '')}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.Code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.Code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.Name}
        </Box>
      )}
      renderInput={(params) => (
        <>
          <TextField
            {...params}
            variant="standard"
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        </>
      )}
    />
  )
}

export const NonEditableGeneralInfo = (): JSX.Element => {
  const {
    portrait,
    nationality,
    age,
    dob,
    firstName,
    lastName,
    gender,
    employer,
    profession,
    clearanceLevel,
    educationAndOccupationalHistory,
  } = useTypedSelector((state) => state.character)
  // if (Object.keys(character).length > 0) {
  return (
    <IDCard container spacing={1.5} justifyContent="center">
      <IDCardHeader />
      <Grid
        item
        container
        xs={3}
        spacing={2}
        direction="column"
        justifyContent="center"
      >
        <ProfilePicture portrait={portrait} />
        <CountryFlag countryCode={nationality} />
        <BirthDate age={age} dob={dob} />
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
        <NameZone firstName={firstName} lastName={lastName} />
        <GenderZone gender={gender} />
        <WorkZone employer={employer} profession={profession?.name} />
      </Grid>
      <Clearance clearanceLevel={clearanceLevel} />
      <BarCode barcode={educationAndOccupationalHistory} />
    </IDCard>
  )
}
