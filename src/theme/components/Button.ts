import { Components } from "@mui/material/styles";
import { darkTextColor, greyTextColor } from "@/theme/colors";

export default function Button(darkMode: boolean): Components {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            textDecoration: "underline",
            fontSize: "17px",
            color: darkMode? greyTextColor: darkTextColor,
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
