import React, { useState } from "react";

const Form = () => {
  const [InputField, setInputField] = useState({
      email:'',
      password:'',
      term:false
  });

  //   const [Email, setEmail] = useState("");
  //   const [Password, setPassword] = useState("");

  //   const setmail = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const setPass = (e) => {
  //     setPassword(e.target.value);
  //   };

const handleChange = (e) =>{
    const { target } = e;
    const { name } = target;
    const value = name === 'term' ? target.checked : target.value;

    setInputField({
        ...InputField,
        [name]: value
    });
}

  const OnSubmitForm = (e) => {
    e.preventDefault();
    // const data = {
    //   email: Email,
    //   password: Password,
    // };
    
    console.log(InputField);
  };

  return (
    <div className="mx-auto w-50 mt-2 mb-4">
      <form onSubmit={OnSubmitForm}>
        <div className="form-group">
        <code>Form Object : {JSON.stringify(InputField)}</code><br/>
          <label>Email address</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" name="term" className="form-check-input" onChange={handleChange} />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
