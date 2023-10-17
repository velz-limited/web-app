import { ThemeToggle } from '@/components/common';
import HomeButton from '@/components/common/HomeButton';
import { Grid, Toolbar } from '@mui/material';
import * as React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
    <Grid item>
      <Toolbar>
        <HomeButton />
        <ThemeToggle />
      </Toolbar>
    </Grid>
    <Grid item container alignItems="center" justifyContent="center" style={{ paddingBottom: 160, flex: 1 }}>
        {children}
    </Grid>
  </Grid>
  );
}
