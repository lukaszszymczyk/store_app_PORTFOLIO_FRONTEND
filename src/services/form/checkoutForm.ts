import { FormInputType } from "components/atoms/FormInput";

export interface FormFieldProps {
  id: string;
  name: string;
  type?: FormInputType;
  isRequired?: boolean;
  maxLength?: number;
  minLength?: number;
}

export const formStepHeaders: string[] = ["Personal Information", "Address"];

export const formFields: FormFieldProps[][] = [
  [
    { id: "firstName", name: "First Name", type: "text" },
    { id: "lastName", name: "Last Name", type: "text" },
    { id: "email", name: "Email", type: "email" },
    { id: "phone", name: "Phone", type: "phone", minLength: 9, maxLength: 9 },
  ],
  [
    { id: "address1", name: "Address Line 1", type: "text" },
    { id: "address2", name: "Address Line 2", isRequired: false, type: "text" },
    { id: "city", name: "City", type: "text" },
    {
      id: "postcode",
      name: "Postcode",
      minLength: 5,
      maxLength: 5,
      type: "postcode",
    },
  ],
];
