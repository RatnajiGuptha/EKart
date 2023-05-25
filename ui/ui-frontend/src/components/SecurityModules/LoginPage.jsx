import React, { useState } from 'react';
import "../../StyleSheets/Login.css"
import { useNavigate, Link } from "react-router-dom";
import SecurityService from "../../Services/SecurityService";

function LoginPage() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        SecurityService.loginUser({ userName, password }).then((response) => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('username', userName);
            navigate("/");
            console.log({ userName, password });
            console.log(e)
        });

    }

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="login-page">
            <form className='forms' onSubmit={handleLogin}>
                <label >  User Name
                    <input type="text" name="userName" value={userName} onChange={handleUserName} placeholder="Enter a username" />
                </label>
                <label >   Password
                    <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Enter a password" />
                </label>
                <div className='text-center'>
                    <button type='submit' className='login-button' >  Login </button>
                    <Link to="/registration">
                        <button className='signup-button'> Sign Up</button>
                    </Link>

                </div>
            </form>

        </div>
    )
}

export default LoginPage;