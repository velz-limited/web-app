"use client"
import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Icon } from '@mui/material';
import { Destination } from '@/types/Destination';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Padding } from '@mui/icons-material';
import { AutocompleteProps } from '@mui/material/Autocomplete';
import DestinationOption from './DestinationOption';

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