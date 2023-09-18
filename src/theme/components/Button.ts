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
            color: darkMode? darkColors.text.grey: darkColors.text.dark,
          }
        },
      ],
      styleOverrides: {
          root: {
            textTransform: 'none',
          } 
      }
    },
  }
}
