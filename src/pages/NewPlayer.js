import React from 'react'
import Player from '../components/player/Player'
import { Box } from '@mui/material'
import Header from '../components/common/header'

function NewPlayer() {
  return (
    <Box>
    <Header/>
    <Player />
    </Box>
  )
}

export default NewPlayer