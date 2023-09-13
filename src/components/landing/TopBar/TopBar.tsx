import { Home } from '@mui/icons-material'
import { Button, Toolbar } from '@mui/material'
import React from 'react'
import HomeButton from './HomeButton'
import ThemeToggle from '@/components/common/ThemeToggle'
import { greyTextColor } from '@/theme/colors'

export default function TopBar() {
  return (
    <Toolbar>
        <HomeButton />
        <ThemeToggle />
        <Button sx={{
          color: greyTextColor,
          textDecoration: 'underline',
          fontSize: '17px',
        }}>Login / Sign Up</Button>
    </Toolbar>
  )
}
