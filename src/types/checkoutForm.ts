import { FormInputType } from "components/atoms/FormInput/FormInput";

export interface FormFieldProps {
  id: string;
  name: string;
  type?: FormInputType;
  isRequired?: boolean;
  maxLength?: number;
  minLength?: number;
}
