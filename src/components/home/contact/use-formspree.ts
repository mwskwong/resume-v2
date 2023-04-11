import { SubmissionData } from "@formspree/core";
import { useForm } from "@formspree/react";
import { FormEvent } from "react";

type Params = Parameters<typeof useForm>;
type Return = ReturnType<typeof useForm>;

export default function useFormspree(
  formKey: Params[0],
  args?: Params[1]
): Return {
  const [state, submitHandler, reset] = useForm(formKey, args);

  async function handleFormSubmit(
    submissionData: FormEvent<HTMLFormElement> | SubmissionData
  ) {
    try {
      return await submitHandler(submissionData);
    } catch (error) {
      state.errors.push({
        message: String(error),
      });

      return Promise.resolve({
        body: { errors: [] },
        response: null,
      });
    }
  }

  return [state, handleFormSubmit, reset];
}
