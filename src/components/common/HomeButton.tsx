import HomeLink from '@/components/common/HomeLink'
import { Typography } from '@mui/material'
import React from 'react'
import { darkColors } from '@/theme'

export default function HomeButton() {
  return (
    <>
      <HomeLink/>
      <Typography paddingLeft={1} variant="h4" component="div" sx={{ color: darkColors.text.green, flexGrow: 1 }}>
        Velz
      </Typography>
    </>
  )
}
