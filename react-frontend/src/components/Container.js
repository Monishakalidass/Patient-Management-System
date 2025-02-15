import React, {useState} from 'react';

// styling
import '../signIn.css';

// components
import SignIn from './SignIn';
import SignUp from './SignUp';

const Container = () => {
  const [welcome, setWelcome] = useState(false)

  const setBannerClass = () => {
    const classArr = ["banner-side cfb"]
    if (welcome) classArr.push('send-right')
    return classArr.join(' ')
  }

  const setFormClass = () => {
    const classArr = ["form-side cfb"]
    if (welcome) classArr.push('send-left')
    return classArr.join(' ')
  }

  return (
    <div className="Container cfb">

      <div className={setBannerClass()}> 

        {welcome ? 
          <h2>Hello!!</h2>
            : <h2>Welcome Back</h2>}

        <button onClick={()=> setWelcome(!welcome)}>
          {welcome ?
            "Log In"
              : "Create new Account"}
        </button>
      </div>

      <div className={setFormClass()}> 
          {welcome ? 
            <SignUp /> 
              : <SignIn/>
          }
          
      </div>
    </div>
  );
}

export default Container;