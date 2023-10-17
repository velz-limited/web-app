import { FacebookIcon, GoogleIcon } from "@/icons"
import { Button, Grid } from "@mui/material"
import React from "react"

export interface AuthButtonsProps {
  googleButton: string
  facebookButton: string
}

export default function AuthButtons(props: AuthButtonsProps) {
  return (
    <Grid spacing={1} container direction="row" sx={{ alignItems: "stretch" }}>
      <Grid sx={{ width: "49%", height: "50%" }} item>
        <Button sx={{ width: "100%", height: "100%" }} variant="plain" startIcon={<GoogleIcon />}>
          {props.googleButton}
        </Button>
      </Grid>
      <Grid sx={{ width: "51%", height: "50%" }} item>
        <Button sx={{ width: "100%", height: "100%" }} variant="plain" startIcon={<FacebookIcon />}>
          {props.facebookButton}
        </Button>
      </Grid>
    </Grid>
  )
}
