import React, { useState } from 'react';
import '../CSS/SignUp.css';
import { useNavigate } from 'react-router-dom';
import Service from '../Services/Service';


const SignUp = () => {
    const [activeTab, setActiveTab] = useState('signup');
    const [clicked, setClicked] = useState(false);

    const [username, setUsername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleTabClick = (tab) => {

        setActiveTab(tab);

        if (tab === 'signup') {

            console.log(clicked);
            setClicked(false);
        }
        else {

            console.log(clicked);
            setClicked(true);
        }
    };

    const handleUserNameChange = (e) => {

        setUsername(e.target.value);

        const input = e.target;
        const label = input.previousElementSibling;

        if (input.value === "") {
            label.classList.remove('active', 'highlight');
        } else {
            label.classList.add('active', 'highlight');
        }
    };
    const handleEmailChange = (e) => {

        setemail(e.target.value);

        const input = e.target;
        const label = input.previousElementSibling;

        if (input.value === "") {
            label.classList.remove('active', 'highlight');
        } else {
            label.classList.add('active', 'highlight');
        }
    };
    const handlePasswordChange = (e) => {

        setpassword(e.target.value);

        const input = e.target;
        const label = input.previousElementSibling;

        if (input.value === "") {
            label.classList.remove('active', 'highlight');
        } else {
            label.classList.add('active', 'highlight');
        }
    };

    const handleInputBlur = (e) => {
        const input = e.target;
        const label = input.previousElementSibling;

        if (input.value === "") {
            label.classList.remove('active', 'highlight');
        } else {
            label.classList.remove('highlight');
        }
    };

    const handleInputFocus = (e) => {
        const input = e.target;
        const label = input.previousElementSibling;

        if (input.value === "") {
            label.classList.remove('active', 'highlight');
        } else {
            label.classList.add('highlight');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const details = { "email" : email, "username" : username, "password" : password }
        console.log(details);
        Service.signUp(details).then((res) =>{
            console.log(res);
            if(res.data){
                handleTabClick('login');
            }
        })
    };

    const navigate = useNavigate();

    const loginSubmit = (e) => {

        e.preventDefault();

        const details = { email, password }
        Service.login(details).then((res) => {
            console.log(res);
            if (res.data) {
                navigate({
                    pathname: "/home"
                })
            }
        });
    }


    return (
        <div className="form">

            <ul className="tab-group">
                <li className={`tab ${activeTab === 'signup' ? 'active' : ''}`}>
                    <a href="#signup" onClick={() => handleTabClick('signup')}>
                        Sign Up
                    </a>
                </li>
                <li className={`tab ${activeTab === 'login' ? 'active' : ''}`}>
                    <a href="#login" onClick={() => handleTabClick('login')}>
                        Log In
                    </a>
                </li>
            </ul>

            <>
                {clicked ? (

                    <div id="login">
                        <h1>Welcome Back!</h1>

                        <form action="/" method="post"
                            onSubmit={loginSubmit}>
                            <div className="field-wrap">
                                <label>
                                    Email Address<span className="req">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    autoComplete="off"
                                    onChange={handleEmailChange}
                                    onBlur={handleInputBlur}
                                    onFocus={handleInputFocus}
                                />
                            </div>

                            <div className="field-wrap">
                                <label>
                                    Password<span className="req">*</span>
                                </label>
                                <input
                                    type="password"
                                    required
                                    autoComplete="off"
                                    onChange={handlePasswordChange}
                                    onBlur={handleInputBlur}
                                    onFocus={handleInputFocus}
                                />
                            </div>

                            <button className="button button-block">Log In</button>
                        </form>
                    </div>
                ) : (
                    <>

                        <div id="signup">
                            <h1>Sign Up for Free</h1>

                            <form onSubmit={handleSubmit}>
                                <div className="field-wrap">
                                    <label>
                                        User Name<span className="req">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        autoComplete="off"
                                        onChange={handleUserNameChange}
                                        onBlur={handleInputBlur}
                                        onFocus={handleInputFocus}
                                    />
                                </div>



                                <div className="field-wrap">
                                    <label>
                                        Email Address<span className="req">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        autoComplete="off"
                                        onChange={handleEmailChange}
                                        onBlur={handleInputBlur}
                                        onFocus={handleInputFocus}
                                    />
                                </div>

                                <div className="field-wrap">
                                    <label>
                                        Create Password<span className="req">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        autoComplete="off"
                                        onChange={handlePasswordChange}
                                        onBlur={handleInputBlur}
                                        onFocus={handleInputFocus}
                                    />
                                </div>

                                <button type="submit" className="button button-block">
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </>
                )}

            </>

        </div >
    );
};

export default SignUp;