import React, { useEffect, useState } from 'react'
import { CharacterModel } from 'delta-green-core/src/models/CharacterModel'
import axios from 'axios'
import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core'
import RefreshIcon from '@material-ui/icons/Refresh'
import { GeneralInfo } from './elements/GeneralInfo'
import { SkillsSet } from './elements/Skills'
import { StatsSet } from './elements/Stats'

const useStyles = makeStyles((theme) => ({
  portrait: { width: theme.spacing(10), height: theme.spacing(10) },
  characterSheet: {
    //margin: theme.spacing(2),
    padding: theme.spacing(3),
  },
  divider: { margin: theme.spacing(2) },
  // divider: { margin: `${theme.spacing(2)}px 0` },
}))

const Character = (): JSX.Element => {
  const classes = useStyles()
  const [character, setCharacter] = useState<CharacterModel>()

  const fetchCharacter = async () => {
    setCharacter(undefined)
    const response = await axios.get<CharacterModel>(
      'http://localhost:33582/api/randomCharacter',
    )
    setCharacter(response.data)
  }

  useEffect(() => {
    fetchCharacter()
    return () => {
      // TODO
    }
  }, [])
  return (
    <Paper className={classes.characterSheet}>
      <Grid item container spacing={2} xs>
        <Button
          startIcon={<RefreshIcon />}
          variant="contained"
          color="primary"
          onClick={fetchCharacter}
        >
          Reroll
        </Button>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} lg>
            <GeneralInfo {...character} />
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
            spacing={2}
            alignContent="center"
            justifyContent="flex-start"
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
