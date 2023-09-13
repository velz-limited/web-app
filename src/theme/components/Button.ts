import { Components, Theme, ThemeOptions } from "@mui/material/styles";
import { componentBackground, mainBackground } from "../colors";

export const style: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
        root: {
            textTransform: 'none',
        } 
    }
  },

  
  

};

export const MuiButton = style.MuiButton;