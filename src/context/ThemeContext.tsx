import { createContext, useContext } from "react"
import { darkTheme, lightTheme } from "@/theme"
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

export function isDarkTheme(theme?: Theme){
  if(theme == null){
    const {theme} = useThemeContext()
    return theme.palette.mode === 'dark'
  }
  return theme.palette.mode === 'dark'
}

export function toggleTheme(context: ThemeContextType){
  const {theme, setTheme} = context
  isDarkTheme(theme) ? setTheme(lightTheme) : setTheme(darkTheme)
}