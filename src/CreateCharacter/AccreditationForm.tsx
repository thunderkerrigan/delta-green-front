import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  styled,
  Typography,
  Box,
  Grid,
} from '@mui/material'
import React from 'react'
import paperImage from '../Images/paper_background.jpg'
import ImageUploader from '../ImageUploader/ImageUploader'
import dg_logo from '../Images/logo.png'

// eslint-disable-next-line quotes
const FORM_TITLE = "FORMULAIRE D'ACCRÉDITATION 48-B"

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(8),
  backgroundImage: `url(${paperImage})`,
}))

const PrintTypography = styled(Typography)(() => ({
  fontFamily: 'ToxTypewriter',
  fontWeight: 'bold',
  fontSize: '2.5rem',
}))

const PrintTextfield = styled(TextField)(() => ({
  '& label': {
    fontFamily: 'ToxTypewriter',
    color: 'black',
    fontweight: 'bold',
    fontSize: '2.5rem',
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Holocene',
    color: 'black',
  },
}))

const AccreditationForm = (): React.ReactElement => {
  return (
    <FormPaper>
      <Box sx={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            left: '45px',
            top: '-20px',
            width: '175px',
          }}
          src={dg_logo}
        />
      </Box>
      <PrintTypography variant="h4">{FORM_TITLE}</PrintTypography>
      <PrintTypography variant="h4">
        ___________________________________
      </PrintTypography>
      <Grid container mt={8} spacing={2}>
        <Grid item>
          <ImageUploader
            changeAvatar={() => console.log('starf')}
            avatar={''}
          />
        </Grid>
        <Grid item>
          <PrintTextfield label="First Name:" />
          <PrintTextfield label="Last Name:" />
        </Grid>
      </Grid>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Female" />
        <FormControlLabel control={<Checkbox />} label="Male" />
        <FormControlLabel control={<Checkbox />} label="Non binary" />
      </FormGroup>
    </FormPaper>
  )
}

export default AccreditationForm
