import { Components } from "@mui/material/styles";
import { darkColors } from "@/theme";

export default function InputField(darkMode: boolean): Components {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '15px !important',
          backgroundColor: darkMode? darkColors.background.components: "",
        }
      }
    },
    
    MuiTextField: {
  
    },
  
    MuiAutocomplete: {
  
    },
  }
}