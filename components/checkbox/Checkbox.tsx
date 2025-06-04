import { FC, useState } from "react";
import { Checkbox as PaperCheckbox } from "react-native-paper";
import { CheckboxProps } from "./props";

export const Checkbox: FC<CheckboxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <PaperCheckbox.Item
      label={label}
      status={checked ? "checked" : "unchecked"}
      onPress={() => setChecked(!checked)}
      color="#4390DD"
      uncheckedColor="#000"
      labelStyle={{ color: "#000" }}
    />
  );
};
