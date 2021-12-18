import React, { useEffect } from 'react'
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  styled,
} from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import { GeneralInfo } from './elements/GeneralInfo'
import { SkillsSet } from './elements/Skills'
import { StatsSet } from './elements/Stats'
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { useCharacter } from '../services/useCharacter'
import {
  CharacterState,
  setCharacterProperties,
} from '../redux/CharacterSlice'
import { LoadingButton } from '@mui/lab'
import { useLazyGetNewCharacterQuery } from '../redux/CharacterAPISlice'
import { Link } from 'react-router-dom'

const CharacterPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
}))

const CharacterDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(2),
}))

// const useStyles = makeStyles((theme) => ({
//   '@keyframes popin': {
//     '0%': {
//       opacity: 0,
//       transform: 'scale(5) rotateZ(30deg)',
//       textShadow: '0 0 2em black',
//     },
//     '80%': { opacity: 0.3 },
//     '100%': {
//       opacity: 1,
//       transform: ' scale(1) rotateZ(30deg)',
//     },
//   },
//   topSecret: {
//     color: 'red',
//     fontFamily: 'TopSecret',
//     fontSize: '6em',
//     animationName: '$popin',
//     transform: 'rotateZ(30deg)',
//     animationDuration: '1.2s',
//     animationTimingFunction: 'ease-out',
//   },
//   portrait: { width: theme.spacing(10), height: theme.spacing(10) },
//   // button: { backgroundColor: '#123738' },
//   characterSheet: {
//     // margin: theme.spacing(2),
//     // padding: theme.spacing(3),
//   },
//   divider: { margin: theme.spacing(2) },
//   // divider: { margin: `${theme.spacing(2)}px 0` },
// }))

const FetchNewCharacterButton = () => {
  const [fetchUser, { isFetching, isLoading, data }] =
    useLazyGetNewCharacterQuery()
  const dispatch = useDispatch()
  useEffect(() => {
    if (data) {
      dispatch(setCharacterProperties(data))
    }
  }, [data])
  return (
    <LoadingButton
      // className={classes.button}
      loading={isLoading || isFetching}
      startIcon={<RefreshIcon />}
      variant="contained"
      color="secondary"
      onClick={() => fetchUser()}
    >
      Reroll
    </LoadingButton>
  )
}
const AddCharacterButton = () => {
  const { useAddCharacter } = useCharacter()
  const { loading } = useAddCharacter()

  return (
    <LoadingButton
      loading={loading}
      // className={classes.button}
      startIcon={<RefreshIcon />}
      variant="contained"
      color="secondary"
      onClick={useAddCharacter}
    >
      Select
    </LoadingButton>
  )
}

const CharacterToolBar = () => {
  return (
    <>
      <Grid item>
        <FetchNewCharacterButton />
      </Grid>
      <Grid item>
        <AddCharacterButton />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/createcharacter"
        >
          Create Character
        </Button>
      </Grid>
    </>
  )
}

const Character = (): JSX.Element => {
  const character = useSelector(
    (state: RootState) => state.character as CharacterState,
  )

  return (
    <CharacterPaper>
      <Grid item container xs spacing={1}>
        <CharacterToolBar />
        <Grid item xs={12}>
          <CharacterDivider />
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} lg>
            <Box sx={{ padding: '16px' }}>
              <GeneralInfo />
            </Box>
          </Grid>
          <Grid item xs={12} lg>
            <Box sx={{ padding: '16px' }}>
              <StatsSet stats={character?.stats} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <CharacterDivider />
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
              masterySkills={character.profession?.skills}
            />
            <SkillsSet
              category={'Expertise'}
              skills={character?.expertiseSkills}
              masterySkills={character.profession?.skills}
            />
            <SkillsSet
              category={'Sens'}
              skills={character?.sensorialSkills}
              masterySkills={character.profession?.skills}
            />
            <SkillsSet
              category={'Influence'}
              skills={character?.influenceSkills}
              masterySkills={character.profession?.skills}
            />

            <SkillsSet
              category={'Action'}
              skills={character?.actionSkills}
              masterySkills={character.profession?.skills}
            />
            <SkillsSet
              category={'Autres'}
              skills={character?.otherSkills}
              masterySkills={character.profession?.skills}
            />
          </Grid>
        </Grid>
      </Grid>
    </CharacterPaper>
  )
}

export default Character
