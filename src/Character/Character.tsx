import React from 'react'
import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import RefreshIcon from '@material-ui/icons/Refresh'
import { GeneralInfo } from './elements/GeneralInfo'
import { SkillsSet } from './elements/Skills'
import { StatsSet } from './elements/Stats'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { useCharacter } from '../services/useCharacter'
import { CharacterState } from '../redux/CharacterSlice'

const useStyles = makeStyles((theme) => ({
  '@keyframes popin': {
    '0%': {
      opacity: 0,
      transform: 'scale(5) rotateZ(30deg)',
      textShadow: '0 0 2em black',
    },
    '80%': { opacity: 0.3 },
    '100%': {
      opacity: 1,
      transform: ' scale(1) rotateZ(30deg)',
    },
  },
  topSecret: {
    color: 'red',
    fontFamily: 'TopSecret',
    fontSize: '6em',
    animationName: '$popin',
    transform: 'rotateZ(30deg)',
    animationDuration: '1.2s',
    animationTimingFunction: 'ease-out',
  },
  portrait: { width: theme.spacing(10), height: theme.spacing(10) },
  // button: { backgroundColor: '#123738' },
  characterSheet: {
    // margin: theme.spacing(2),
    // padding: theme.spacing(3),
  },
  divider: { margin: theme.spacing(2) },
  // divider: { margin: `${theme.spacing(2)}px 0` },
}))

const Character = (): JSX.Element => {
  const classes = useStyles()
  const character = useSelector(
    (state: RootState) => state.character as CharacterState,
  )
  const { getCharacter, addCharacter } = useCharacter()

  return (
    <Paper className={classes.characterSheet}>
      <Grid item container xs spacing={1}>
        <Grid item>
          <Button
            // className={classes.button}
            startIcon={<RefreshIcon />}
            variant="contained"
            color="secondary"
            onClick={getCharacter}
          >
            Reroll
          </Button>
        </Grid>
        <Grid item>
          <Button
            // className={classes.button}
            startIcon={<RefreshIcon />}
            variant="contained"
            color="secondary"
            onClick={addCharacter}
          >
            Select
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} lg>
            {character && <GeneralInfo {...character} />}
          </Grid>
          <Grid item xs={12} lg>
            <StatsSet stats={character?.stats} />
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid
            style={{ flex: 'grow' }}
            item
            xs={12}
            container
            // spacing={2}
            alignContent="center"
            // justifyContent="flex-start"
            justifyContent="center"
          >
            <SkillsSet
              category={'Connaissance'}
              skills={character?.knowledgeSkills}
              masterySkills={character?.profession.skills}
            />
            <SkillsSet
              category={'Expertise'}
              skills={character?.expertiseSkills}
              masterySkills={character?.profession.skills}
            />
            <SkillsSet
              category={'Sens'}
              skills={character?.sensorialSkills}
              masterySkills={character?.profession.skills}
            />
            <SkillsSet
              category={'Influence'}
              skills={character?.influenceSkills}
              masterySkills={character?.profession.skills}
            />

            <SkillsSet
              category={'Action'}
              skills={character?.actionSkills}
              masterySkills={character?.profession.skills}
            />
            <SkillsSet
              category={'Autres'}
              skills={character?.otherSkills}
              masterySkills={character?.profession.skills}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Character
