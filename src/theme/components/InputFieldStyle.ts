import { Components } from "@mui/material/styles"
import { getColors } from "@/theme"

export default function InputFieldStyle(darkMode: boolean): Components {
  const colors = getColors(darkMode)

  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "15px !important",
          backgroundColor: colors.background.components,
        },
      },
    },

    MuiTextField: {},

    MuiAutocomplete: {},
  }
}
