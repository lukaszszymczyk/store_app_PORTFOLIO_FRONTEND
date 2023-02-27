import { RegisterOptions } from "react-hook-form";
import {
  FormInputProps,
  FormInputType,
} from "components/atoms/FormInput/index";

const getPatternValue = (type: FormInputType): RegExp => {
  switch (type) {
    case "text":
      // uppercase and lowercase letters from a to z
      return /^[a-zA-Z]+$/;
    case "email":
      return /\S+@\S+\.\S+/;
    case "phone":
      // nine digits
      return /\d{9}/;
    case "postcode":
      // five digits
      return /\d{5}/;
  }
};

export const registerOptions = ({
  id,
  name,
  type = "text",
  isRequired = true,
  maxLength,
  minLength,
}: FormInputProps): RegisterOptions => {
  return {
    required: {
      value: isRequired,
      message: `${name} is required`,
    },
    pattern: {
      value: getPatternValue(type),
      message: `Entered value does not match ${id} format`,
    },
    maxLength: maxLength && {
      value: maxLength,
      message: `Max length: ${maxLength}`,
    },
    minLength: minLength && {
      value: minLength,
      message: `Min length: ${minLength}`,
    },
  };
};
