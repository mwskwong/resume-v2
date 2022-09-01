import { useCallback, useEffect, useState } from "react";

import type { FormError } from "@formspree/core/forms";
import type FormValues from "./FormValues";
import type { SubmitHandler } from "react-hook-form";

type FormState = {
  submitting: boolean
  succeeded: boolean
  errors: FormError[]
}

type UseFormSpree = (formKey: string) => [
  FormState,
  SubmitHandler<FormValues>
]

/**
 * This is a stripped down version of the useForm from @formspree/react
 * Only essential features for the contact form are kept.
 */
const useFormspree: UseFormSpree = formKey => {
  const url = `https://formspree.io/f/${formKey}`;
  const [formState, setFormState] = useState<FormState>({
    submitting: false,
    succeeded: false,
    errors: []
  });

  const handleFormspreeSubmit = useCallback<SubmitHandler<FormValues>>(async data => {
    setFormState(prevFormState => ({ ...prevFormState, submitting: true }));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        ...data,
        subject: `[${process.env.NEXT_PUBLIC_URL}] ${data.subject}`
      })
    });

    if (response.ok) {
      setFormState(prevFormState => ({ ...prevFormState, succeeded: true }));
    } else {
      const { errors } = await response.json();
      setFormState(prevFormState => ({ ...prevFormState, errors }));
    }

    setFormState(prevFormState => ({ ...prevFormState, submitting: false }));

    return response;
  }, [url]);

  useEffect(() => {
    if (formState.succeeded) {
      const resetTimeout = setTimeout(
        () => setFormState(prevFormState => ({ ...prevFormState, succeeded: false })),
        5000
      );

      return () => clearTimeout(resetTimeout);
    }
  }, [formState.succeeded]);

  return [formState, handleFormspreeSubmit];
};

export default useFormspree;