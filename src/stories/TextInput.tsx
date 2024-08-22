import React from "react";

export interface TextInputProps {
  placeholder: string;
}

export const TextInput = ({ placeholder }: TextInputProps) => {
  return <input type="text" placeholder={placeholder} />;
};
