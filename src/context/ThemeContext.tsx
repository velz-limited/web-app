import { createContext, useContext } from "react"
import { darkTheme } from "../theme/styles"
import { Theme } from "@mui/material/styles"


export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: darkTheme,
  setTheme: (theme: Theme) => { },
})

export function useThemeContext() {
  return useContext(ThemeContext)
}

export function isDarkTheme(){
  const {theme} = useThemeContext()
  return theme.palette.mode === 'dark'
}