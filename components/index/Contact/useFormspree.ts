import { useCallback, useState } from "react";

import { FormError } from "@formspree/core/forms";
import FormValues from "./FormValues";

type FormState = {
  submitting: boolean
  succeeded: boolean
  errors: FormError[]
}
type HandleFormspreeSubmit = (data: FormValues) => Promise<Response>
type UseFormSpree = (formKey: string) => [
  FormState,
  HandleFormspreeSubmit
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

  const handleFormspreeSubmit = useCallback<HandleFormspreeSubmit>(async data => {
    setFormState(prevFormState => ({ ...prevFormState, submitting: true }));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
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

  return [formState, handleFormspreeSubmit];
};

export default useFormspree;