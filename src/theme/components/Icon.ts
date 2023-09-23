import { Components } from "@mui/material/styles";
import { darkColors } from "@/theme";

export default function Icon(darkMode: boolean): Components {
  return {
    MuiIconButton: {
      variants: [
        {
          props: { color: "primary" },
          style: {
            background: darkColors.icon.normalBackground,
            color: darkColors.icon.normalForeground,
          },
        },
        {
          props: { color: "secondary" },
          style: {
            background: darkColors.icon.selectedBackground,
            color: darkColors.icon.selectedForeground,
          },
        },
      ],
    },
  };
}
