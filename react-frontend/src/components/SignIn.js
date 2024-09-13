import React, { useState } from 'react';

// styling
import '../signIn.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import HospService from '../services/HospService';

const SignIn = () => {


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  let history = useHistory();

  const handleEmailChange = (e) => {
    setemail(e.target.value);
};
const handlePasswordChange = (e) => {
  setpassword(e.target.value);
};
const handleSubmit = (e) => {
  e.preventDefault();

  const details = { email, password }
        HospService.login(details).then((res) => {
            console.log(res);
            if (res.data) {
              history.push('/patients');
            }
        });
};

  return (
    <div className="form-comp cfb">
      <h1>Login</h1>
      <form className="sign-up-form cfb"
      onSubmit={handleSubmit}>
        <label>
          Email:
          <br/>
          <input
          onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <br/>
          <input type='password'
           onChange={handlePasswordChange}/>
        </label>
        <br/>
        <button>
         Log In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
