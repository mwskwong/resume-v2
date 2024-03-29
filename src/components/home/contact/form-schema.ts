import { z } from "zod";

const FormSchema = z.object({
  name: z.string().nonempty("Name is required").default(""),
  email: z.string().nonempty("Email is required").email().default(""),
  subject: z.string().nonempty("Subject is required").default(""),
  message: z.string().nonempty("Message is required").default(""),
});

export type FormSchema = z.infer<typeof FormSchema>;

export default FormSchema;
