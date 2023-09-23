export const mainBackground = "#040F1F";
export const componentBackground = "#132034";
export const greenTextColor = "#55C2B9";
export const greyTextColor = "#DADADA";
export const darkTextColor = "#171717";

function getColors(darkMode: boolean) {
  return {
    background: {
      main: "#040F1F",
      components: "#132034",
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

export const darkColors = getColors(true);
export const lightColors = getColors(false);
