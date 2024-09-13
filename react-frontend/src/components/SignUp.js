import React from 'react';

// styling
import '../signIn.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import HospService from '../services/HospService';

const SignUp = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  let history = useHistory();

  const handleEmailChange = (e) => {
    setemail(e.target.value);
};

  const handleNameChange = (e) => {
    setname(e.target.value);
};
const handlePasswordChange = (e) => {
  setpassword(e.target.value);
};
const handleSubmit = (e) => {
  e.preventDefault();

  const details = {name, email, password }
        HospService.signup(details).then((res) => {
            console.log(res);
            if (res.data) {
              history.push('/patients');                
            }
        });
};

  return (
    <div className="form-comp cfb">
      <h1>Create an new Account</h1>
      <form className="sign-up-form cfb"
         onSubmit={handleSubmit}>
        <label>
          Name:
          <br/>
          <input  onChange={handleNameChange}/>
        </label>
        <label>
          Email:
          <br/>
          <input  onChange={handleEmailChange} />
        </label>
        <label>
          Create Password:
          <br/>
          <input type='password' onChange={handlePasswordChange}/>
        </label>
        <br/>
        
        
        <button id='btn'>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;