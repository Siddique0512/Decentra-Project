import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjnalzz");
  
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
      style={{
        background: 'linear-gradient(to right, #FFDAB9, #FFA07A)', // Light orange gradient colors
        padding: '20px', // Padding for spacing
        maxWidth: '400px', // Optional: Set a maximum width for the form
        margin: '0 auto', // Optional: Center the form horizontally
        transition: 'background-color 0.3s ease-in-out', // Transition effect for background color
        borderRadius: '10px', // Rounded corners
      }}
    >
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="phone">Phone Number</label>
      <input id="phone" type="tel" name="phone" />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        style={{
          backgroundColor: '#232f3e', // Button background color
          color: 'white', // Button text color
          border: 'none', // Remove button border
          padding: '10px 20px', // Button padding
          cursor: 'pointer', // Cursor style
          borderRadius: '5px', // Rounded corners for button
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
