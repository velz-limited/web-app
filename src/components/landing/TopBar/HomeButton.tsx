import HomeLink from '@/components/common/HomeLink'
import { Typography } from '@mui/material'
import React from 'react'
import { greenTextColor } from '@/theme/colors'

export default function HomeButton() {
  return (
    <>
      <HomeLink/>
      <Typography paddingLeft={1} variant="h4" component="div" sx={{ color: greenTextColor, flexGrow: 1 }}>
        Velz
      </Typography>
    </>
  )
}
