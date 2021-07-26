/* eslint-disable quotes */
import React, { Fragment } from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { Stat } from 'delta-green-core/src/models/CharacterModel'
import { Radar } from 'react-chartjs-2'

const useStyles = makeStyles({
  title: {
    margin: 'auto',
    minWidth: '140px',
    padding: '0 16px',
    fontFamily: 'VeteranTypewriter',
    backgroundColor: '#123718',
    color: 'white',
    borderRadius: '4px',
    boxShadow: '5px 5px 5px black',
  },
  statTitle: { textDecorationLine: 'underline', fontWeight: 'bold' },
})

export const StatsSet = ({
  stats,
}: {
  stats?: Record<Stat, number>
}): JSX.Element => {
  const classes = useStyles()
  if (stats === undefined) {
    return <Fragment />
  }

  const data = {
    labels: Object.keys(stats),
    datasets: [
      {
        label: 'individual evalutation',
        data: Object.values(stats),
        fill: true,
        backgroundColor: '#12371870',
        borderColor: '#123718',
        pointBackgroundColor: '#123718',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#123718',
      },
    ],
  }

  const config = {
    plugins: {
      legend: false,
    },
    maintainAspectRatio: false,
    scales: {
      r: {
        max: 20,
        min: 0,
        ticks: {
          stepSize: 5,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  }
  const statsValue = Object.keys(stats).map((stat) => {
    const value = stats[stat as Stat]
    const percentage = value * 5
    return (
      <Grid
        item
        container
        alignItems="baseline"
        xs
        key={stat}
        direction="row"
      >
        <Grid item xs>
          <Typography
            className={classes.statTitle}
            align="left"
          >{`${stat}:`}</Typography>
        </Grid>
        <Grid item>
          <Typography>{stats[stat as Stat]}</Typography>
        </Grid>
        <Grid item xs>
          <Typography>{`${percentage} %`}</Typography>
        </Grid>
      </Grid>
    )
  })
  return (
    <Grid item xs container spacing={2} style={{ height: '305px' }}>
      <Grid item>
        <Typography variant="h6" className={classes.title}>
          {"Résultat Préliminaire d'évalution:"}
        </Typography>
      </Grid>
      <Grid item container spacing={2} direction="column" xs={6}>
        {statsValue}
      </Grid>
      <Grid item xs={6}>
        <Radar data={data} options={config} />
      </Grid>
    </Grid>
  )
}
