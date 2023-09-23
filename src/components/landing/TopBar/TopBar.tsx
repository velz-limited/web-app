import { Button, Toolbar } from '@mui/material'
import React from 'react'
import HomeButton from '@/components/common/HomeButton'
import { ThemeToggle } from '@/components/common'

export default function TopBar() {
  return (
    <Toolbar>
      <HomeButton />
      <ThemeToggle />
      <Button variant='text'>Login / Sign Up</Button>
    </Toolbar>
  )
}
