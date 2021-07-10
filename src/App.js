import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [ submitted, setSubmitted ] = useState(false);
  const [ valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...setValues, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...setValues, lastName: event.target.value})
  }

  const handleEmailNameInputChange = (event) => {
    setValues({...setValues, emailName: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit= {handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        { submitted && !valid ? <div class="success-message">Success! Thank you for registering</div> : null }
        <input
          onChange = {handleFirstNameInputChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value = { values.firstName }
        />

        { submitted && values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          onChange = {handleLastNameInputChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value = { values.lastName }
        />

        { submitted && values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input 
          onChange = {handleEmailNameInputChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value = { values.email }
        />

        { submitted && values.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
