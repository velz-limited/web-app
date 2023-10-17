import { Components } from "@mui/material/styles";
import ButtonStyle from "./ButtonStyle";
import InputFieldStyle from "./InputFieldStyle";
import IconStyle  from "./IconStyle";
import DrawerStyle from "./DrawerStyle";
import LinkStyle from "./LinkStyle";
import CheckboxStyle from "./CheckboxStyle";

function getComponents(darkMode: boolean): Components {
  const inputComp = InputFieldStyle(darkMode);
  const buttonComp = ButtonStyle(darkMode);
  const iconComp = IconStyle(darkMode);
  const drawerComp = DrawerStyle(darkMode);
  const linkComp = LinkStyle(darkMode);
  const checkComp = CheckboxStyle(darkMode);

  return {
    ...inputComp,
    ...buttonComp,
    ...iconComp,
    ...drawerComp,
    ...linkComp,
    ...checkComp
  };
}

export const darkComponents = getComponents(true);
export const lightComponents = getComponents(false);
