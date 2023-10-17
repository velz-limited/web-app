import { Components } from "@mui/material/styles"
import { darkColors } from "@/theme"

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    plain: true // italic white
    brand: true // green
  }
}

export default function LinkStyle(darkMode: boolean): Components {
  return {
    MuiLink: {
      styleOverrides: {
        root: {},
      },
      variants: [
        {
          props: { variant: "plain" },
          style: {
            color: darkMode ? "white" : "black",
            fontStyle: "italic",
            textDecoration: "none",

            ":hover": {
              textDecoration: "underline",
            },
          },
        },
        {
          props: { variant: "brand" },
          style: {
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
          },
        },
      ],
    },
  }
}
