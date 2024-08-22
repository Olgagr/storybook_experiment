import React from "react";

export interface LabelProps {
  label: string;
}

export const Label = ({ label = "Label" }: LabelProps) => {
  return <div>{label}!!!</div>;
};
