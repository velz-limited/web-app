import { Button, Checkbox, FormControlLabel, Grid, Link, TextField, Toolbar, Typography } from "@mui/material"
import React from "react"
import HomeButton from "@/components/common/HomeButton"
import ThemeToggle from "@/components/common/ThemeToggle"
import { StyledHeader, ArrowButton, PasswordInput } from "@/components/common"
import { FacebookIcon, GoogleIcon } from "@/icons"
import { CheckBox, Label } from "@mui/icons-material"
import AuthFooter from "./AuthFooter"
import AuthButtons from "./AuthButtons"

export default function SignUp() {
  const width = {
    xs: 300,
    md: 450,
  }

  return (
    <Grid container direction="column" spacing={3} justifyContent="center" alignItems="center">
      <Grid textAlign="center" item width={width}>
        <StyledHeader before="Create " styledText="Velz" after=" account" />
      </Grid>

      <Grid item width={width}>
        <AuthButtons googleButton="Sign Up with Google" facebookButton="Sign Up with Facebook" />
      </Grid>
      <Grid item textAlign="center" width={width}>
        -OR-
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

      <Grid item width={width}>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <p>
              I have read and I accepted the <Link>terms and conditions</Link>{" "}
            </p>
          }
        />
      </Grid>

      <Grid item display="flex" width={width} justifyContent="flex-end">
        <AuthFooter link="/auth/log-in" linkText="Log In" mainText="Already have an account?" buttonText="Create" />
      </Grid>
    </Grid>
  )
}
