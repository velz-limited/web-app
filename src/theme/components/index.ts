import { Components } from "@mui/material/styles";
import Button from "./Button";
import InputField from "./InputField";
import Icon  from "./Icon";
import Drawer from "./Drawer";

function getComponents(darkMode: boolean): Components {
  const inputComp = InputField(darkMode);
  const buttonComp = Button(darkMode);
  const iconComp = Icon(darkMode);
  const drawerComp = Drawer(darkMode);

  return {
    ...inputComp,
    ...buttonComp,
    ...iconComp,
    ...drawerComp,
  };
}

export const darkComponents = getComponents(true);
export const lightComponents = getComponents(false);
