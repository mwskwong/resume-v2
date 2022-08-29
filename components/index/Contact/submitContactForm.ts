import FormValues from "./FormValues";
import { SubmissionResponse } from "@formspree/core/forms";

const url = "https://formspree.io/f/mrgjykpa";

type SubmitContactForm = (arg: FormValues) => Promise<SubmissionResponse>;

const submitContactForm: SubmitContactForm = async ({ name, email, subject, message }) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      message,
      subject: `[mwskwong.com] ${subject}`
    })
  });

  const body = await response.json();

  return { body, response };
};

export default submitContactForm;