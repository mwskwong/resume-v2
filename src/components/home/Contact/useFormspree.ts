import { SubmissionData } from "@formspree/core";
import { useForm } from "@formspree/react";
import { FormEvent } from "react";

const useFormspree: typeof useForm = (formKey, args) => {
  const [state, submitHandler, reset] = useForm(formKey, args);
  // const [state, setState] = useState(formspreeState);

  const handleFormSubmit = async (submissionData: FormEvent<HTMLFormElement> | SubmissionData) => {
    try {
      return await submitHandler(submissionData);
    } catch (error) {
      state.errors.push({
        message: String(error)
      });

      return Promise.resolve({ 
        body: { errors: [] },
        response: null 
      });
    }
  };

  return [state, handleFormSubmit, reset];
};

export default useFormspree;
