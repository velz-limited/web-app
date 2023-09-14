import { greenTextColor } from '@/theme/colors'
import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function FormTitle() {
  return (
    <Typography variant="h4">
      Yours to <span style={{
        fontStyle: 'italic',
        color: greenTextColor }}>explore</span>!
    </Typography>
  )
}
