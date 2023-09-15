"use client"
import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Destination } from '@/types/Destination';
import DestinationOption from './DestinationOption';

// TODO: show available ones first in alphabatical order 
export default function DestinationInput() {
  return (
    <Autocomplete
      options={destinations }
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField 
        {...params}
      label="Destination" />}
      renderOption={(props, option) => {
        return (
          <DestinationOption props={props} option={option} />
        )
      }} />
  )
}

const destinations: readonly Destination[] = [
  {
    label: "Mousul",
    code: "IQ",
    country: "Iraq",
    available: true
  },
  {
    label: "Amman",
    code: "JO",
    country: "Jordan",
    available: false
  }
]