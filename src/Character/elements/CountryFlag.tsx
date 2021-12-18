import React from 'react'
import { Grid, Skeleton } from '@mui/material'
import Flag from 'react-country-flag'

export const CountryFlag = ({
  countryCode,
}: {
  countryCode?: string
}): React.ReactElement => {
  if (!countryCode) {
    return (
      <Grid item xs>
        <Skeleton width="32px" height="32px" />
      </Grid>
    )
  }
  return (
    <Grid item xs>
      <Flag
        className="emojiFlag"
        svg
        style={{ width: '32px', height: '32px' }}
        countryCode={countryCode}
        aria-label={countryCode}
        title={countryCode}
      />
    </Grid>
  )
}
