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
            <form onSubmit={handleLogin}>
                <label > <b>  User Name </b>
                    <input type="text" value={username} onChange={handleUsername} placeholder="Enter a username" />
                </label>
                <label > <b>  Password </b>
                    <input type="password" value={password} onChange={handlePassword} placeholder="Enter a password" />
                </label>
                <div >
                    <button type='submit' className='btn btn-success m-2'> Login</button>
                    <button className='btn btn-warning m-2'> Sign Up</button>
                </div>
            </form>

        </div>
    )
}

export default LoginPage;