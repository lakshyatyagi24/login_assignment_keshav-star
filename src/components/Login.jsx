import React, { useState, useRef } from 'react'
import './login.css'
import loginImage from '../assets/bg.png'
import google from '../assets/google.png'
import linkedin from '../assets/linkedin.png'

const Login = () => {

    const email = useRef(null);
    const password = useRef(null);

    function tooglepassword() {
        let eye = document.getElementById('eye');
        let hidepasswordstatus = document.getElementById('password');
        if(eye.classList.contains('fa-eye-slash')){
            eye.classList.replace('fa-eye-slash','fa-eye');
            hidepasswordstatus.type='text';
        }
        else{
            eye.classList.replace('fa-eye','fa-eye-slash');
            hidepasswordstatus.type='password';
        }
        
    }

    function LoginRequested(e){
        e.preventDefault();
        console.log(email.current.value,password.current.value)
    }

    return (
        <div className='login-component'>
            <div className="login">
                <div className="login-image">
                    <img src={loginImage} alt="" />
                </div>
                <div className="login-container">
                    <form id='form' action="">
                        <h1>Login to continue</h1>
                        <div>
                            <label htmlFor="email">Email Address <span>*</span></label>
                            <input type="email" ref={email} name="email" id="email" placeholder='shivanshi@viasuccess.io' />
                        </div>
                        <div>
                            <label htmlFor="password">Password <span>*</span></label>
                            <input type="password" ref={password} name="password" id="password" placeholder='password' />
                            <i className="fa-regular fa-eye-slash" id="eye" onClick={tooglepassword}></i>
                        </div>
                        <div className='remember-forgot'>
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Remember Me</label>
                            <a href="#" className="forgot">Forgot password</a>
                        </div>
                        <div className="buttons">
                            <button onClick={LoginRequested} id='login'>Login</button>
                            <button id='signup'>Sign Up</button>
                        </div>
                        <p className='or'>or</p>
                        <div className="authentication">
                            <div className="google">
                            <img src={google} alt="" />
                                <span>login with Google</span>
                            </div>
                            <div className="linkedin">
                                <img src={linkedin} alt="" />
                                <span>login with Linkedin</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;