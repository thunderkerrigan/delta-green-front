/* eslint-disable quotes */
import React, { Fragment } from 'react'
import {
  Avatar,
  Fade,
  Grid,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  deepOrange,
  amber,
  yellow,
  lime,
  lightGreen,
  green,
  red,
  grey,
} from '@mui/material/colors'
import { Stat } from 'delta-green-core/src/models/CharacterModel'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip as ChartToolTip,
  Legend,
  ChartOptions,
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartToolTip,
  Legend,
)

const statScoreColor = (
  score: number,
): Record<keyof typeof green, string> => {
  if (score > 17) {
    return green
  } else if (score > 14) {
    return lightGreen
  } else if (score > 12) {
    return lime
  } else if (score > 10) {
    return yellow
  } else if (score > 8) {
    return amber
  } else if (score > 6) {
    return deepOrange
  } else {
    return red
  }
}

export const StatsSet = ({
  stats,
}: {
  stats?: Record<Stat, number>
}): JSX.Element => {
  if (!stats) {
    return <></>
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

  const config: ChartOptions<'radar'> = {
    plugins: {
      legend: { display: false },
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
  const statsValue =
    stats &&
    Object.keys(stats).map((stat) => {
      const value = stats[stat as Stat]
      const percentage = value * 5
      const statColor = statScoreColor(stats[stat as Stat])
      return (
        <Grid
          key={stat}
          item
          container
          alignItems="baseline"
          direction="row"
          xs={6}
          // className={classes.statItem}
        >
          <Grid item xs>
            <Tooltip
              title={stat}
              enterDelay={300}
              leaveDelay={100}
              placement="left-start"
            >
              <Typography
                sx={{
                  textDecorationLine: 'underline',
                  fontWeight: 900,
                }}
                align="left"
              >{`${stat.slice(0, 3)}:`}</Typography>
            </Tooltip>
          </Grid>
          <Grid item xs>
            <Avatar
              style={{
                backgroundColor: statColor[700],
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              {stats[stat as Stat]}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography
              sx={{
                backgroundColor: grey[300],
                borderRadius: '4px',
                padding: '2px',
              }}
            >{`${percentage} %`}</Typography>
          </Grid>
        </Grid>
      )
    })
  return (
    <Fade in={stats !== undefined}>
      <div style={{ width: '100%', height: '305px' }}>
        {stats && (
          <Grid container spacing={2} style={{ height: '305px' }}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  margin: 'auto',
                  minWidth: '140px',
                  width: '375px',
                  padding: '0 16px',
                  fontFamily: 'VeteranTypewriter',
                  backgroundColor: '#123718',
                  color: 'white',
                  borderRadius: '4px',
                  boxShadow: '5px 5px 5px black',
                }}
              >
                {"Résultat Préliminaire d'évaluation:"}
              </Typography>
            </Grid>
            <Fragment>
              <Grid item container spacing={2} direction="row" xs={6}>
                {statsValue}
              </Grid>
              <Grid item xs={6}>
                <div style={{ width: '300px', height: '300px' }}>
                  <Radar
                    width={300}
                    height={300}
                    data={data}
                    options={config}
                  />
                </div>
              </Grid>
            </Fragment>
          </Grid>
        )}
        {stats === undefined && (
          <Grid
            item
            xs={12}
            style={{ width: '300px', height: '300px' }}
          />
        )}
      </div>
    </Fade>
  )
}
