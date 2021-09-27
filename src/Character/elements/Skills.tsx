import React, { Fragment } from 'react'
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import { Skills } from 'delta-green-core/src/models/CharacterModel'

const useStyles = makeStyles({
  categorie: {
    minWidth: '140px',
    padding: '0 16px',
    fontFamily: 'VeteranTypewriter',
    backgroundColor: '#123718',
    color: 'white',
    borderRadius: '4px',
    boxShadow: '5px 5px 5px black',
  },
})

export const SkillsSet = ({
  category,
  skills,
  masterySkills,
}: {
  category: string
  skills?: Partial<
    Record<Partial<Skills>, number> & Record<string, number>
  >
  masterySkills?: Partial<Skills[] | string[]>
}): JSX.Element => {
  const classes = useStyles()
  if (skills === undefined) {
    return <Fragment />
  }
  const skillKeys = Object.keys(skills)
  const masterySkillsKeys =
    masterySkills?.map((i) => i?.toString()) || []
  return (
    <Grid
      style={{ padding: '1em', margin: '0.2rem', flexGrow: 1 }}
      component={Paper}
      container
      direction="row"
      justifyContent="flex-start"
      alignContent="flex-start"
      spacing={2}
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
    >
      <Grid item>
        <Typography variant="h6" className={classes.categorie}>
          {category}
        </Typography>
      </Grid>

      {skillKeys.map((s) => {
        const isMasterySkills = masterySkillsKeys?.indexOf(s) !== -1
        let style: React.CSSProperties = {}
        if (isMasterySkills) {
          style = {
            color: 'green',
            fontWeight: 'bold',
          }
        }
        return (
          <Grid item key={s} container spacing={2}>
            <Grid item style={style} component={Typography}>
              {s}
            </Grid>
            <Grid
              item
              style={style}
              component={Typography}
              align="right"
              xs
            >
              {`${skills[s]} %`}
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}
