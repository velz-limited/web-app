"use client"
import { Button, Grid, TextField } from "@mui/material"
import React from "react"
import { StyledHeader, ArrowButton } from "@/components/common"
import { redirect } from "next/navigation"

export default function ResetPassword() {
  const width = {
    xs: 300,
    md: 400,
  }

  return (
    <Grid container direction="column" spacing={3} justifyContent="center" alignItems="center">
      <Grid textAlign="center" item width={width}>
        <StyledHeader before="Reset your password!" />
        <p>
          Enter your email address associated with <br />
          your Velz account
        </p>
      </Grid>

      <Grid item width={width}>
        <TextField fullWidth label="Email" />
      </Grid>

      <Grid
        item
        container
        height="100%"
        justifyContent="space-between"
        alignItems="flex-start"
        direction="row"
        width={width}
      >
        <Button href="/auth/log-in" sx={{ height: "45px", width: "25%" }} variant="plain">
          Back
        </Button>
        <ArrowButton label="Continue" />
      </Grid>
    </Grid>
  )
}
