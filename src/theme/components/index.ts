import { Components } from "@mui/material/styles";
import Button from "./Button";
import InputField from "./InputField";

function getComponents(darkMode: boolean): Components {
  const inputComp = InputField(darkMode);
  const buttonComp = Button(darkMode);

  return {
    ...inputComp,
    ...buttonComp,
  };
}

export const darkComponents = getComponents(true);
export const lightComponents = getComponents(false);
