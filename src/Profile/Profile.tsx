import React from 'react'
import {
  Divider,
  Grid,
  makeStyles,
  Paper,
  Tab,
  Tabs,
} from '@material-ui/core'
import { RootState } from '../redux/store'
import { GeneralInfo } from '../Character/elements/GeneralInfo'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCharacters } from '../redux/UserSlice'
import { chromeTabsStylesHook } from '@mui-treasury/styles/tabs'
import { SkillsSet } from '../Character/elements/Skills'
import { StatsSet } from '../Character/elements/Stats'

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

const Profile = (): JSX.Element => {
  const classes = useStyles()
  const { charactersList, currentSelectedCharacter } = useSelector(
    (state: RootState) => state.user,
  )
  const dispatch = useDispatch()
  const changeSelectedCharacter = (newIndex: number) =>
    dispatch(setSelectedCharacters(newIndex))

  const tabsStyles = chromeTabsStylesHook.useTabs()
  const tabItemStyles = chromeTabsStylesHook.useTabItem()
  const character = charactersList[currentSelectedCharacter]
  if (!character) {
    return <></>
  }
  return (
    <Paper className={classes.characterSheet}>
      <Tabs
        classes={tabsStyles}
        value={currentSelectedCharacter}
        onChange={(e, index) => changeSelectedCharacter(index)}
      >
        {charactersList.map((character) => {
          const name = `${character.firstName} ${character.lastName}`
          return (
            <Tab key={name} classes={tabItemStyles} label={name} />
          )
        })}
      </Tabs>
      <Grid item container xs>
        <Grid item container spacing={2}>
          <Grid item xs={12} lg>
            <GeneralInfo {...character} />
          </Grid>
          <Grid item xs={12} lg>
            <StatsSet stats={character.stats} />
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
    </Paper>
  )
}

export default Profile
