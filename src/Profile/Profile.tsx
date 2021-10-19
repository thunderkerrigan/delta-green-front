import React from 'react'
import {
  Button,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
} from '@mui/material'
import { RootState } from '../redux/store'
import { GeneralInfo } from '../Character/elements/GeneralInfo'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCharacters } from '../redux/UserSlice'
import { SkillsSet } from '../Character/elements/Skills'
import { StatsSet } from '../Character/elements/Stats'

const Profile = (): JSX.Element => {
  const { charactersList, currentSelectedCharacter } = useSelector(
    (state: RootState) => state.user,
  )
  const dispatch = useDispatch()
  const changeSelectedCharacter = (newIndex: number) =>
    dispatch(setSelectedCharacters(newIndex))

  const character = charactersList[currentSelectedCharacter]
  if (!character) {
    return <></>
  }
  return (
    <Paper>
      <Tabs
        value={currentSelectedCharacter}
        onChange={(e, index) => changeSelectedCharacter(index)}
      >
        {charactersList.map((character) => {
          const name = `${character.firstName} ${character.lastName}`
          return <Tab key={name} label={name} />
        })}
      </Tabs>
      <Grid container spacing={4}>
        <Grid container item>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => console.log('onClick')}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
        <Grid item container xs>
          <Grid item container spacing={2}>
            <Grid item xs={12} lg>
              <GeneralInfo {...character} />
            </Grid>
            <Grid item xs={12} lg>
              <StatsSet stats={character.stats} />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ margin: '16px' }} />
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
                skills={character.knowledgeSkills}
                masterySkills={character.profession.skills}
              />
              <SkillsSet
                category={'Expertise'}
                skills={character.expertiseSkills}
                masterySkills={character.profession.skills}
              />
              <SkillsSet
                category={'Sens'}
                skills={character.sensorialSkills}
                masterySkills={character.profession.skills}
              />
              <SkillsSet
                category={'Influence'}
                skills={character.influenceSkills}
                masterySkills={character.profession.skills}
              />

              <SkillsSet
                category={'Action'}
                skills={character.actionSkills}
                masterySkills={character.profession.skills}
              />
              <SkillsSet
                category={'Autres'}
                skills={character.otherSkills}
                masterySkills={character.profession.skills}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Profile
