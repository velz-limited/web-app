import { Components } from "@mui/material/styles";
import { darkColors } from "@/theme";

export default function Drawer(darkMode: boolean): Components {
  return {
    MuiDrawer: {
        styleOverrides: {
            root:{
            },
            paper: {
                // display: "flex",
                // position: 'fixed', // To make the sidebar float
                // bottom: 20,
                // top: 20,
                // left: 10
                // margin: "10px",
                // marginBottom: "auto",
                // borderRadius: '15px', // Add round borders 
            }
        }
    }
  }
};