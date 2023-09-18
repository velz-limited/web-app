import { Typography } from '@mui/material'
import { darkColors } from '@/theme'
import React from 'react'

export default function FormTitle() {
  return (
    <Typography variant="h4">
      Yours to <span style={{
        fontStyle: 'italic',
        color: darkColors.text.green }}>explore</span>!
    </Typography>
  )
}
