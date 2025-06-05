export interface InputProps {
  placeholder?: string;
  secureTextEntry: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}
