import { FormError, useForm } from "@formspree/react";
import { useState } from "react";

const useFormspree: typeof useForm = (formKey, args) => {
  const [state, submitHandler, reset] = useForm(formKey, args);
  const [clientErrors, setClientErrors] = useState<FormError[]>([]);

  return [
    clientErrors.length ? { ...state, errors: clientErrors } : state,
    async (submissionData) => {
      try {
        setClientErrors([]);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return await submitHandler(submissionData);
      } catch (error) {
        setClientErrors([{ message: String(error) }]);

        return Promise.resolve({
          body: { errors: [] },
          response: null,
        });
      }
    },
    reset,
  ];
};

export default useFormspree;
