"use client";
import {  createTheme, Theme } from "@mui/material/styles";
import { componentBackground, mainBackground } from "./colors";
import { darkComponents, lightComponents } from "./components";

export const darkTheme:Theme = createTheme( {
  palette: {
    mode: 'dark',
    primary: {
      main: '#55C2B9',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: mainBackground,
      paper: componentBackground,
    },
  },
  components: darkComponents
 
});

export const lightTheme:Theme = createTheme( {
  palette: {
    background: { default: "#D6D6D6", paper: "#D6D6D6"},
    primary: { main: "#9147FF" },
    secondary: { main: "#2a48f3" },
    mode: "light",
  },
  components: lightComponents
});

