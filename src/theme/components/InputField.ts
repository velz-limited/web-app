import { Components, Theme, ThemeOptions } from "@mui/material/styles";
import { componentBackground, mainBackground } from "../colors";

export const style: Components<Omit<Theme, "components">> = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: '15px !important',
        backgroundColor: componentBackground,
      }
    }
  },

  
  
  MuiTextField: {

  },


  MuiAutocomplete: {

  },
};

export const MuiAutocomplete = style.MuiAutocomplete;
export const MuiTextField = style.MuiTextField;
export const MuiInputBase = style.MuiInputBase;