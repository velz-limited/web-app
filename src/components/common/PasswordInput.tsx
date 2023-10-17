"use client"
import React from "react"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  SxProps,
} from "@mui/material"

export interface PasswordInputProps {
  sx?: SxProps
  showResetPassword?: boolean
}

export default function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  function formControl() {
    return (
      <FormControl fullWidth sx={props.sx} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          fullWidth
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    )
  }
  if (props.showResetPassword === true) {
    return (
      <Stack direction="column" alignItems="center" spacing={2}>
        {formControl()}
        <Grid container justifyContent="right">
          <Link variant="plain" href="/auth/reset-password">Reset password?</Link>
        </Grid>
      </Stack>
    )
  }
  return formControl()
}
