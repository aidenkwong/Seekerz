import { Input } from "@nextui-org/react";
import React from "react";

const FormElement = ({
  label,
  placeholder
}: {
  label: string;
  placeholder: string;
}) => {
  return <Input clearable label={label} placeholder={placeholder} />;
};

export default FormElement;
