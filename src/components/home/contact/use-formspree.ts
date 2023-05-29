import { useForm } from "@formspree/react";

const useFormspree: typeof useForm = (formKey, args) => {
  const [state, submitHandler, reset] = useForm(formKey, args);

  return [
    state,
    async (submissionData) => {
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
    },
    reset,
  ];
};

export default useFormspree;
