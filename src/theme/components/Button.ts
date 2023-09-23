import { Components } from "@mui/material/styles";
import { darkColors } from "@/theme";

export default function Button(darkMode: boolean): Components {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            textDecoration: "underline",
            fontSize: "17px",
            color: darkMode ? darkColors.text.grey : darkColors.text.dark,
          },
        },
        {
          props: { variant: "contained" },
          style: {},
        },
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: darkColors.background.components,
            border: `2px solid ${darkColors.text.green}`,
            ":hover": {
              border: `2px solid ${darkColors.text.green}`,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "15px !important",
        },
      },
    },
  };
}
