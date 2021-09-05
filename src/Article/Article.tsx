// import { makeStyles } from '@material-ui/styles'
import React, { useRef, useState } from 'react'
// import background from '../Images/paper_background.jpg'
import { useConnection } from '../services/useConnection'

import { Avatar, TextField } from '@material-ui/core'
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

  const { getTinyJWT } = useConnection()

  return (
    <>
      <TextField placeholder="Title" />
      <TextField placeholder="Secret Level" />
      <Avatar variant="square" src={dglogo} />
      <Editor />
    </>
  )
}
