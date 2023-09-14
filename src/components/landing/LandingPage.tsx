import React from 'react'
import { TopBar } from './TopBar'
import { FinalForm } from './Form'
import { Grid } from '@mui/material'

export default function LandingPage() {
  return (
    <Grid container direction="column" style={{ minHeight: '100vh' }}>
      <Grid item>
        <TopBar />
      </Grid>
      <Grid item container alignItems="center" justifyContent="center" style={{ paddingBottom: 160, flex: 1 }}>
        <FinalForm />
      </Grid>
    </Grid>
  )
}
