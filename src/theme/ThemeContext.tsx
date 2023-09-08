import { createContext } from "react"
import { darkTheme } from "./styles"
import { Theme } from "@mui/material/styles"


export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: darkTheme,
  setTheme: (theme: Theme) => { },
})

