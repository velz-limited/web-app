"use client";
import { Roboto } from 'next/font/google';
import { PaletteOptions, createTheme, css, Theme, ThemeOptions } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export const darkTheme:Theme = createTheme( {
    palette: {
        mode: 'dark',
    }
});

export const lightTheme:Theme = createTheme( {
    palette: {
        mode: 'light',
    }
});

export const globalStyles = css`
  :root {
    body {
      background-color: #fff;
      color: #121212;
    }
  }

  [data-theme="dark"] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`;
