import { Button } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export interface ArrowButtonProps {
  label: string;
}

export default function ArrowButton(props: ArrowButtonProps) {
  return (
    <Button
    sx={{ fontWeight: 900, fontSize: 16 }}
    endIcon={
      <ArrowRightAltIcon
        fontSize="large"
        sx={{ fontWeight: 900, fontSize: 16 }}
      />
    }
    variant="contained"
  >
    {props.label}
  </Button>
  )
}
