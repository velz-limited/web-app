import { Components } from "@mui/material/styles"
import { getColors } from "@/theme"

export default function IconStyle(darkMode: boolean): Components {
  const colors = getColors(darkMode)

  return {
    MuiIconButton: {
      variants: [
        {
          props: { color: "primary" },
          style: {
            background: colors.icon.normalBackground,
            color: colors.icon.normalForeground,
          },
        },
        {
          props: { color: "secondary" },
          style: {
            background: colors.icon.selectedBackground,
            color: colors.icon.selectedForeground,
          },
        },
      ],
    },
  }
}
