import { darkColors } from "@/theme";
import { Typography } from "@mui/material";
import React from "react";

export interface StyledHeaderProps {
  before?: string;
  styledText?: string;
  after?: string;
}

export default function StyledHeader(props: StyledHeaderProps) {
  return (
    <Typography variant="h4">
      {props.before}{" "}
      <span
        style={{
          fontStyle: "italic",
          color: darkColors.text.green,
        }}
      >
        {props.styledText}
      </span>
      {props.after}
    </Typography>
  );
}
