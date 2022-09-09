import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export const ContactForm = () => {
  const [state, handleSubmit] = useForm('xvoyzdgz');
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="email">
        <span className="form__title">Email</span>
        <input className="form__input" id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>
      <label className="form__label" htmlFor="textarea">
        <span className="form__title">Message</span>
        <textarea className="form__textarea" id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </label>

      <button
        className="form__button"
        type="submit"
        disabled={state.submitting}
      >
        Send mail to Val
      </button>
    </form>
  );
};
