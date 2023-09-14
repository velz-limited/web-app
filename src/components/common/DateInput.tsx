"use client";
import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';

export default function DateInput(props: DatePickerProps<string>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box flex={1}>
        <DatePicker slotProps={{ textField: { fullWidth: true } }}
         {...props} />
      </Box>
    </LocalizationProvider>
  )
}
