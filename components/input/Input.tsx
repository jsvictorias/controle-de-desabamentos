import { FC } from "react";
import { InputProps } from "./props";
import * as S from "./styles";

export const Input: FC<InputProps> = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  return (
    <S.Input
      placeholder={placeholder}
      placeholderTextColor="#A6A6A6"
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
};
