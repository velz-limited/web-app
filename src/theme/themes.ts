"use client"
import { createTheme, Theme } from "@mui/material/styles"
import { darkColors, lightColors } from "./colors"
import { darkComponents, lightComponents } from "./components"

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: darkColors.text.green,
    },
    background: {
      default: darkColors.background.main,
      paper: darkColors.background.components,
    },
  },
  components: darkComponents,
})

// TODO: fix light theme 
export const lightTheme: Theme = createTheme({
  palette: {
    background: {
      default: lightColors.background.main,
      paper: lightColors.background.components,
    },
    primary: { main: "#9147FF" },
    secondary: { main: "#2a48f3" },
    mode: "light",
  },
  components: lightComponents,
})
