import { Components } from "@mui/material/styles"
import { getColors } from "@/theme"

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    plain: true
  }
}

export default function ButtonStyle(darkMode: boolean): Components {
  const colors = getColors(darkMode)

  return {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            textDecoration: "underline",
            fontSize: "17px",
            color: darkMode ? colors.text.grey : colors.text.dark,
          },
        },
        {
          props: { variant: "contained" },
          style: {},
        },
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: colors.background.components,
            border: `2px solid ${colors.text.green}`,
            ":hover": {
              border: `2px solid ${colors.text.green}`,
            },
          },
        },
        {
          props: { variant: "plain" },
          style: {
            backgroundColor: colors.background.components,
            ":hover": {
              backgroundColor: colors.background.componentHover,
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
  }
}
