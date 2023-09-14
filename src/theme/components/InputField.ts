import { Components } from "@mui/material/styles";
import { componentBackground } from "@/theme/colors";

export default function InputField(darkMode: boolean): Components {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '15px !important',
          backgroundColor: darkMode? componentBackground: "",
        }
      }
    },
    
    MuiTextField: {
  
    },
  
    MuiAutocomplete: {
  
    },
  }
}