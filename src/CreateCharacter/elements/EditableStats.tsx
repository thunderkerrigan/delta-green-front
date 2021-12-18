import { CasinoRounded as CasinoIcon } from '@mui/icons-material'
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import React from 'react'
import { setStats } from '../../redux/CharacterSlice'
import { useAppDispatch, useTypedSelector } from '../../redux/store'
import { rollStats } from '../../utils/dice'

const RollButtonAdornment = (
  change: (value: number) => unknown,
): React.ReactElement => {
  return (
    <InputAdornment position="start">
      <IconButton
        size="small"
        // sx={{ backgroundColor: 'lightGrey' }}
        onClick={() => change(rollStats())}
      >
        <CasinoIcon />
      </IconButton>
    </InputAdornment>
  )
}

const StatTextfield = (props: {
  label: string
  stats?: number
  changeStats: (value: number) => unknown
}) => {
  const { label, stats, changeStats } = props
  return (
    <TextField
      type="number"
      variant="standard"
      value={stats}
      onChange={(event) => changeStats(parseInt(event.target.value))}
      InputProps={{
        startAdornment: RollButtonAdornment(changeStats),
      }}
      label={label}
    />
  )
}

const EditableStats = (): React.ReactElement => {
  const { stats } = useTypedSelector((state) => state.character)
  const dispatch = useAppDispatch()
  const changeApparence = (Apparence: number) =>
    dispatch(setStats({ Apparence }))
  const changeDexterité = (Dexterité: number) =>
    dispatch(setStats({ Dexterité }))
  const changeTaille = (Taille: number) =>
    dispatch(setStats({ Taille }))
  const changeEndurance = (Endurance: number) =>
    dispatch(setStats({ Endurance }))
  const changeConstitution = (Constitution: number) =>
    dispatch(setStats({ Constitution }))
  const changeForce = (Force: number) => dispatch(setStats({ Force }))
  const changeÉducation = (Education: number) =>
    dispatch(setStats({ Education }))
  const changeIntelligence = (Intelligence: number) =>
    dispatch(setStats({ Intelligence }))
  const changePouvoir = (Pouvoir: number) =>
    dispatch(setStats({ Pouvoir }))

  const rollAllStats = () => {
    changeApparence(rollStats())
    changeDexterité(rollStats())
    changeTaille(rollStats())
    changeEndurance(rollStats())
    changeConstitution(rollStats())
    changeForce(rollStats())
    changeÉducation(rollStats())
    changeIntelligence(rollStats())
    changePouvoir(rollStats())
  }
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button onClick={rollAllStats}>
            <CasinoIcon />
            Roll all stats
          </Button>
        </Grid>
        <Grid item>
          <StatTextfield
            label="Apparence"
            stats={stats?.Apparence}
            changeStats={changeApparence}
          />
        </Grid>
        <Grid item>
          <StatTextfield
            label="Dexterité"
            stats={stats?.Dexterité}
            changeStats={changeDexterité}
          />
        </Grid>
        <Grid item>
          <StatTextfield
            label="Taille"
            stats={stats?.Taille}
            changeStats={changeTaille}
          />
        </Grid>
        <Grid item>
          <StatTextfield
            label="Endurance"
            stats={stats?.Endurance}
            changeStats={changeEndurance}
          />
        </Grid>
        <Grid item>
          <StatTextfield
            label="Constitution"
            stats={stats?.Constitution}
            changeStats={changeConstitution}
          />
        </Grid>
        <Grid item>
          <StatTextfield
            label="Force"
            stats={stats?.Force}
            changeStats={changeForce}
          />
        </Grid>
        <Grid item>
          <StatTextfield
            label="Education"
            stats={stats?.Education}
            changeStats={changeÉducation}
          />
        </Grid>
        <Grid item>
          <StatTextfield
            label="Intelligence"
            stats={stats?.Intelligence}
            changeStats={changeIntelligence}
          />
        </Grid>
        <Grid item>
          <StatTextfield
            label="Pouvoir"
            stats={stats?.Pouvoir}
            changeStats={changePouvoir}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default EditableStats
