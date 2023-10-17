import { Box, Grid, Link, Stack, SxProps } from "@mui/material"
import React from "react"
import { ArrowButton } from "@/components/common"

export interface AuthFooterProps {
  buttonText: string
  mainText: string
  linkText: string
  link: string
  sx?: SxProps
}

export default function AuthFooter(props: AuthFooterProps) {
  return (
    <Stack direction="row"
      sx={props.sx}
      width="100%"
      height="100%"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={2}>
      <p>
        {props.mainText}<br />
        <Link href={props.link} variant="brand">
          {props.linkText}
        </Link>
      </p>
      <ArrowButton label={props.buttonText} />
    </Stack>
  )
}
