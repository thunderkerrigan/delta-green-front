// import {
//   Autocomplete,
//   Box,
//   Grid,
//   InputAdornment,
//   MenuItem,
//   Select,
//   TextField,
// } from '@mui/material'
// import _ from 'lodash'
// import React from 'react'
// import ImageUploader from '../../ImageUploader/ImageUploader'
// import { setCharacterProperties } from '../../redux/CharacterSlice'
// import { useAppDispatch, useTypedSelector } from '../../redux/store'
// import { FlagItem, FlagList } from '../../config/FlagList'
// import { CountryFlag } from '../../Character/elements/CountryFlag'
// import { AccountCircle } from '@mui/icons-material'
// import { DesktopDatePicker } from '@mui/lab'
// import {
//   IDCard,
//   IDCardHeader,
// } from '../../Character/elements/GeneralInfo'

// const CountrySelector = () => {
//   const character = useTypedSelector((state) => state.character)
//   const selectedFlag = FlagList.find(
//     (flag) => flag.Code === character?.nationality,
//   )

//   const dispatch = useAppDispatch()
//   const changeNationality = (nationality: string) =>
//     dispatch(setCharacterProperties({ nationality }))
//   return (
//     <Autocomplete
//       sx={{ minWidth: 200 }}
//       options={FlagList}
//       autoHighlight
//       defaultValue={selectedFlag}
//       getOptionLabel={(option: FlagItem) => option.Name}
//       onChange={(e, value) => changeNationality(value?.Code || '')}
//       renderOption={(props, option) => (
//         <Box
//           component="li"
//           sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
//           {...props}
//         >
//           <img
//             loading="lazy"
//             width="20"
//             src={`https://flagcdn.com/w20/${option.Code.toLowerCase()}.png`}
//             srcSet={`https://flagcdn.com/w40/${option.Code.toLowerCase()}.png 2x`}
//             alt=""
//           />
//           {option.Name}
//         </Box>
//       )}
//       renderInput={(params) => (
//         <>
//           <TextField
//             {...params}
//             variant="standard"
//             label="Choose a country"
//             inputProps={{
//               ...params.inputProps,
//               autoComplete: 'new-password',
//             }}
//           />
//         </>
//       )}
//     />
//   )
// }

// const EditableGeneralInfo = (): React.ReactElement => {
//   const character = useTypedSelector((state) => state.character)
//   const dispatch = useAppDispatch()
//   const changeAvatar = (portrait: string) =>
//     dispatch(setCharacterProperties({ portrait }))
//   const changeFirstName = (firstName: string) =>
//     dispatch(setCharacterProperties({ firstName }))
//   const changeLastName = (lastName: string) =>
//     dispatch(setCharacterProperties({ lastName }))
//   const changeGender = (gender: string) => {
//     const typedGender = gender as typeof character.gender
//     return dispatch(setCharacterProperties({ gender: typedGender }))
//   }
//   const changeDob = (dob: string) =>
//     dispatch(setCharacterProperties({ dob }))

//   const dateValue = character?.dob
//     ? new Date(character.dob)
//     : new Date()
//   return (
//     <Box>
//       <IDCard container spacing={1.5} justifyContent="center">
//         <IDCardHeader />
//         <Grid
//           item
//           container
//           xs={3}
//           spacing={2}
//           direction="column"
//           justifyContent="center"
//         >
//           <Grid item xs>
//             <ImageUploader
//               avatar={character?.portrait || ''}
//               changeAvatar={changeAvatar}
//             />
//           </Grid>
//           <Grid item xs>
//             <TextField
//               label="first name"
//               variant="standard"
//               defaultValue={character?.firstName}
//               onChange={(e) => changeFirstName(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs>
//             <TextField
//               label="last name"
//               variant="standard"
//               value={character?.lastName}
//               onChange={(e) => changeLastName(e.target.value)}
//             />
//           </Grid>
//         </Grid>
//         <Grid item xs>
//           <Select
//             sx={{ minWidth: '200px' }}
//             label="gender"
//             value={character?.gender}
//             onChange={(e) => changeGender(e.target.value)}
//             variant="standard"
//           >
//             <MenuItem value="male">male</MenuItem>
//             <MenuItem value="female">female</MenuItem>
//             <MenuItem value="non-binary">non binary</MenuItem>
//           </Select>
//         </Grid>
//         <Grid item xs>
//           <DesktopDatePicker
//             label="date of birth"
//             inputFormat="MM/dd/yyyy"
//             value={dateValue}
//             onChange={(date) => {
//               date && changeDob(date.toString())
//             }}
//             renderInput={(params) => (
//               <TextField variant="standard" {...params} />
//             )}
//           />
//         </Grid>
//         <Grid item xs>
//           <CountrySelector />
//         </Grid>
//       </IDCard>
//     </Box>
//   )
// }

// export default EditableGeneralInfo
export {}