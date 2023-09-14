"use client"
import React from "react";
import DestinationInput from "./DestinationInput";
import DateInput from "@/components/common/DateInput";
import { Button, Grid, TextField } from "@mui/material";
import FormTitle from "./FormTitle";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function FinalForm() {
  const width = {
    xs: 300,
    md: 400,
  };

  return (
    <Grid
      container
      direction="column"
      spacing={3}
      justifyContent="center"
      alignItems="center"
    >
      <Grid textAlign="center" item width={width}>
        <FormTitle />
      </Grid>

      <Grid item width={width}>
        <DestinationInput />
      </Grid>
      <Grid item width={width}>
        <TextField fullWidth label="Number of days" />
      </Grid>
      <Grid item width={width}>
        <DateInput sx={{paddingTop: 0, marginTop: 0}} label="Start Date" />
      </Grid>

      <Grid item display="flex"  width={width} justifyContent="flex-end">
        <Button 
        sx={{fontWeight: 900, fontSize: 16}}
        endIcon={<ArrowRightAltIcon fontSize="large" sx={{fontWeight: 900, fontSize: 16}} />}
        variant="contained">Magic</Button>
      </Grid>
    </Grid>
  );
}
