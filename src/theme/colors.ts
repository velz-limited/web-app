function getColorPalette(darkMode: boolean) {
  return {
    background: {
      main: darkMode? "#040F1F": "#D6D6D6",
      components: darkMode? "#132034": "#D6D6D6",
      componentHover: "#1D2A3E"
    },
    icon: {
      normalBackground: "#1F3C47",
      selectedBackground: "#55C2B9",
      selectedForeground: "#242F41",
      normalForeground: "#55C2B9",
    },
    text: {
      green: "#55C2B9",
      grey: "#DADADA",
      dark: "#171717",
    },
  };
}

export const darkColors = getColorPalette(true);
export const lightColors = getColorPalette(false);

export function getColors(darkMode: boolean){
  return darkMode? darkColors: lightColors 
}
