import { FC, useState } from "react";
import { Checkbox as PaperCheckbox } from "react-native-paper";
import { CheckboxProps } from "./props";

export const Checkbox: FC<CheckboxProps> = ({
  label,
  checked: checkedProp,
  onPress,
}) => {
  const [internalChecked, setInternalChecked] = useState(false);

  const isControlled = checkedProp !== undefined;
  const checked = isControlled ? checkedProp : internalChecked;

  const handlePress = () => {
    if (isControlled && onPress) {
      onPress();
    } else {
      setInternalChecked(!internalChecked);
    }
  };

  return (
    <PaperCheckbox.Item
      label={label}
      status={checked ? "checked" : "unchecked"}
      onPress={handlePress}
      color="#4390DD"
      uncheckedColor="#000"
      labelStyle={{ color: "#000" }}
    />
  );
};
