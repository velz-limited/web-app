"use client"
import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Icon } from '@mui/material';
import { Destination } from '@/types/Destination';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Padding } from '@mui/icons-material';

export default function DestinationInput() {
  return (
    <Autocomplete
    
      options={destinations }
      getOptionLabel={(option) => option.label}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField 
        {...params}
      label="Destination" />}
      renderOption={(props, option) => {
        return (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <Box paddingLeft={1} sx={{ flexGrow: 1 }}>
            <img
              loading="lazy"
              width="24"
              src={`https://flagcdn.com/24x18/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label} ({option.country}) 
          </Box>
          <Icon sx={{mb: 1}} style={{width:24, height: 24}}>
            {option.available ? <CheckCircleIcon style={{color: 'green' }}/> : <></>}
          </Icon>
        </Box>
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