import { Button, Grid, TextField, Toolbar } from "@mui/material";
import React from "react";
import HomeButton from "@/components/common/HomeButton";
import ThemeToggle from "@/components/common/ThemeToggle";
import { StyledHeader, ArrowButton, PasswordInput } from "@/components/common";

export default function SignIn() {
  const width = {
    xs: 300,
    md: 450,
  };

  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
      <Grid item>
        <Toolbar>
          <HomeButton />
          <ThemeToggle />
        </Toolbar>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        style={{ paddingBottom: 160, flex: 1 }}
      >
        <Grid
          container
          direction="column"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Grid textAlign="center" item width={width}>
            <StyledHeader before="Create " styledText="Velz" after=" account" />
          </Grid>

          <Grid item width={width}>
            <Grid container direction="row">
              <Grid item>
                <Button variant="contained">A</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary">B</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item width={width}>
            <TextField fullWidth label="Name" />
          </Grid>
          <Grid item width={width}>
            <TextField fullWidth label="Email" />
          </Grid>
          <Grid item width={width}>
            <PasswordInput />
          </Grid>

          <Grid item display="flex" width={width} justifyContent="flex-end">
            <ArrowButton label="Sign Up" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
