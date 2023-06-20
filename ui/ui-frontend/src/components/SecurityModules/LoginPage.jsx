import React, { useState } from 'react';
import "../../StyleSheets/Login.css"
import { useNavigate, Link } from "react-router-dom";
import { SecurityService } from "../../Services/SecurityService";
import { toast } from 'react-toastify';
import { ForgotPassword } from "../SecurityModules/ForgotPassword";

function LoginPage() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        SecurityService.loginUser({ userName, password }).then((response) => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('username', userName);
            navigate("/");
            window.location.reload(false);
            console.log(token);
            toast.info("Welcome Back")
        })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    setErrorMsg("Invalid Credentials");
                    console.log("Invalid Credentials")
                    toast.error("Invalid credentials / User not found!");
                }
            })

        SecurityService.getUserInfo(userName).then((res) => {
            let i = res.data;
            console.log(i);
            localStorage.setItem("role", i.roles);
            localStorage.setItem("name", i.fullName);
            localStorage.setItem("userEmail", i.email);
        })
    }

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="login-page">
            <div className='forms' >
                <label >  User Name
                    <input type="text" name="userName" value={userName} onChange={handleUserName} placeholder="Enter a username" />
                </label>
                <label >   Password
                    <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Enter a password" />
                </label>
                {errorMsg && <span>{errorMsg}</span>}
                <div className='text-center mt-2 mb-2'>
                    <button type='submit' className='login-button' onClick={handleLogin} >  Login </button>
                    <Link to="/registration">
                        <button className='signup-button'> Sign Up</button>
                    </Link>    
                </div>

                <p style={{ fontStyle: 'italic' }}><div className='d-flex'><div>Forgot password?</div><div><ForgotPassword /></div></div></p>
                <p style={{ fontStyle: 'italic' }}>Become a seller?<a href="/addSeller"> <span style={{ color: "blue" }} >register here</span></a></p>
            </div>
        </div>
    )
}

export default LoginPage;