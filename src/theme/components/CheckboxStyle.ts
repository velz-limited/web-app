import { Components } from "@mui/material/styles"
import { getColors } from "@/theme"

export default function CheckboxStyle(darkMode: boolean): Components {
  const colors = getColors(darkMode)

  return {
    MuiCheckbox: {
        
      styleOverrides: {
        
        root: {
        //   color: 'white'
          
          
        },
       
        

      },


    },
  }
}
