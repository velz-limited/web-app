"use client";
import React from "react";
import DestinationInput from "./DestinationInput";
import DateInput from "@/components/common/DateInput";
import { Button, Grid, TextField, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { darkColors } from "@/theme";
import { ArrowButton, StyledHeader } from "@/components/common";

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
        <StyledHeader before="Yours to " styledText="explore" after="!" />
      </Grid>

      <Grid item width={width}>
        <DestinationInput />
      </Grid>
      <Grid item width={width}>
        <TextField fullWidth label="Number of days" />
      </Grid>
      <Grid item width={width}>
        <DateInput sx={{ paddingTop: 0, marginTop: 0 }} label="Start Date" />
      </Grid>

      <Grid item display="flex" width={width} justifyContent="flex-end">
        <ArrowButton label="Magic" />
      </Grid>
    </Grid>
  );
}
