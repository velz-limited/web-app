import { Button, Checkbox, FormControlLabel, Grid, Link, TextField, Toolbar, Typography } from "@mui/material"
import React from "react"
import HomeButton from "@/components/common/HomeButton"
import ThemeToggle from "@/components/common/ThemeToggle"
import { StyledHeader, ArrowButton, PasswordInput } from "@/components/common"
import { FacebookIcon, GoogleIcon } from "@/icons"
import { CheckBox, Label } from "@mui/icons-material"
import AuthFooter from "./AuthFooter"
import AuthButtons from "./AuthButtons"

export default function LogIn() {
  const width = {
    xs: 300,
    md: 450,
  }

  return (
    <Grid container direction="column" spacing={3} justifyContent="center" alignItems="center">
      <Grid textAlign="center" item width={width}>
        <StyledHeader before="Login to your " styledText="Velz" after=" account" />
      </Grid>

      <Grid item width={width}>
        <AuthButtons googleButton="Login Up with Google" facebookButton="Login with Facebook" />
      </Grid>
      <Grid item textAlign="center" width={width}>
        -OR-
      </Grid>

      <Grid item width={width}>
        <TextField fullWidth label="Email" />
      </Grid>
      <Grid item width={width}>
        <PasswordInput showResetPassword />
      </Grid>

      <Grid item display="flex" width={width} justifyContent="flex-end">
        <AuthFooter link="/auth/sign-up" linkText="Sign Up" mainText="Need an account?" buttonText="Login" />
      </Grid>
    </Grid>
  )
}
