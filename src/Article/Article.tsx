// import { makeStyles } from '@material-ui/styles'
import React from 'react'
// import background from '../Images/paper_background.jpg'

import { Avatar, TextField } from '@mui/material'
import dglogo from '../Images/logo_V2.png'
import { Editor } from './elements/Editor'

// const useStyles = makeStyles({
//   root: {
//     backgroundImage: `url(${background})`,
//     backgroundColor: 'white',
//     backgroundBlendMode: 'luminosity',
//   },
// })

export const Article = (): JSX.Element => {
  // const classes = useStyles()

  return (
    <>
      <TextField placeholder="Title" />
      <TextField placeholder="Secret Level" />
      <Avatar variant="square" src={dglogo} />
      <Editor />
    </>
  )
}
