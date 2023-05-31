import React, { useState } from 'react';
import "../../StyleSheets/Login.css"
import { useNavigate, Link } from "react-router-dom";
import SecurityService from "../../Services/SecurityService";

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
            window.location.reload(true);
            console.log(token);
        })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    setErrorMsg("Invalid Credentials");
                    console.log("Invalid Credentials")
                }
            })

        SecurityService.getUserInfo(userName).then((res) => {
            let i = res.data;
            console.log(i);
            localStorage.setItem("role", i.roles);
            
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
            <form className='forms' onSubmit={handleLogin}>
                <label >  User Name
                    <input type="text" name="userName" value={userName} onChange={handleUserName} placeholder="Enter a username" />
                </label>
                <label >   Password
                    <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Enter a password" />
                </label>
                {errorMsg && <span>{errorMsg}</span>}
                <div className='text-center mt-2 mb-2'>
                    <button type='submit' className='login-button' >  Login </button>
                    <Link to="/registration">
                        <button className='signup-button'> Sign Up</button>
                    </Link>
                </div>
                <p style={{ fontStyle: 'italic' }}>Become a seller?<a href="/addSeller"> <span style={{ color: "blue" }} >register here</span></a></p>
            </form>

        </div>
    )
}

export default LoginPage;