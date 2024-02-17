import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function Input({ ...rest }: TextInputProps) {
  return(
    <TextInput
      className="h-32 bg-slate-800 rounded-md p-4 font-body text-white"
      placeholderTextColor={colors.slate[400]}
      textAlignVertical="top"
      multiline
      {...rest} 
    />
  )
}