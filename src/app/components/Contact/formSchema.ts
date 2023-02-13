import { object, string } from "nope-validator";

const formSchema = object().shape({
  name: string().required(),
  email: string().email().required(),
  subject: string().required(),
  message: string().required()
});

export const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default formSchema;
