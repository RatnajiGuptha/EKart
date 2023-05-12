import React, { useState } from 'react';
import "../StyleSheets/Login.css"

function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="login-page">
            <form className='forms' onSubmit={handleLogin}>
                <label >  User Name
                    <input type="text" value={username} onChange={handleUsername} placeholder="Enter a username" />
                </label>
                <label >   Password
                    <input type="password" value={password} onChange={handlePassword} placeholder="Enter a password" />
                </label>
                <div className='text-center'>
                    <button type='submit' className='login-button'> Login </button>
                    <button className='signup-button'> Sign Up</button>
                </div>
            </form>

        </div>
    )
}

export default LoginPage;