import { Destination } from "@/types/Destination";
import { Box, Icon } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export type DestinationOptionProps = {
  props: React.HTMLAttributes<HTMLLIElement>;
  option: Destination;
}

export default function DestinationOption(
  { props, option }: DestinationOptionProps
) {
  return (
    <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
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
      <Icon sx={{ mb: 1 }} style={{ width: 24, height: 24 }}>
        {option.available ? (
          <CheckCircleIcon style={{ color: "green" }} />
        ) : (
          <></>
        )}
      </Icon>
    </Box>
  );
}
