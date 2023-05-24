import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../StyleSheets/Login.css";
import SecurityService from "../../Services/SecurityService";

function Registrationpage() {

    const [registerData, setRegisterData] = useState({
        userName: '',
        fullName: '',
        email: '',
        password: '',
        contactNumber: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }


    const validateForm = async () => {
        let valid = true;
        const newError = {};

        const userNameExists = await SecurityService.getUserByUsername(registerData.userName)

        console.log(userNameExists.data);
        if (!registerData.userName || registerData.userName.trim().length < 4) {
            newError.userName = 'User name should have at least 5 characters';
            valid = false;
        } else if (userNameExists) {
            newError.userName = 'User name alredy exists';
            valid = false;
        }

        if (!registerData.fullName || registerData.fullName.trim().length < 3) {
            newError.fullName = 'Full name should have at least 3 characters';
            valid = false;
        } else if (!/^[a-zA-Z ]+$/.test(registerData.fullName)) {
            newError.fullName = 'Invalid Name';
            valid = false;
        }

        const userEmailExists = await SecurityService.getUserByEmail(registerData.email);
        if (!registerData.email || !registerData.email.trim()) {
            newError.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
            newError.email = "Invalid Email address"
            valid = false;
        } else if (userEmailExists) {
            newError.email = "Email address already exists"
            valid = false;
        }

        if (!registerData.contactNumber.trim() || registerData.contactNumber.trim().length !== 10) {
            newError.contactNumber = 'Mobile number should have 10 digits'
            valid = false;
        } else if (!/^[0-9]+$/.test(registerData.contactNumber)) {
            newError.contactNumber = 'Mobile number should have 10 digits'
            valid = false;
        }

        if (!registerData.password || registerData.password.trim().length < 8) {
            newError.password = 'Password should have at least 8 characters';
            valid = false;
        } else if (!/[a-zA-Z@#$%&.]/.test(registerData.password)) {
            newError.password = 'Password should contian specical characterts(@#$%&)';
            valid = false;
        }

        setErrors(newError);
        return valid;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if (await validateForm()) {
            SecurityService.addUser(registerData).then((res) => {
                console.log(res.data);
            })
        }
    }


    return (
        <div className="login-page">
            <form className='forms'>
                <label >Username
                    <input type="text"
                        name="userName"
                        placeholder="Enter user name"
                        value={registerData.userName}
                        onChange={handleChange}
                    />
                    {errors.userName && <span>{errors.userName}</span>}
                </label>

                <label >Fullname
                    <input type="text"
                        name="fullName"
                        placeholder="Enter Fullname"
                        value={registerData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <span>{errors.fullName}</span>}
                </label>

                <label >Email
                    <input type="text"
                        name="email"
                        placeholder="Enter Email"
                        value={registerData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </label>

                <label >Password
                    <input type="Password"
                        name="password"
                        placeholder="Enter Password"
                        value={registerData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </label>


                <label >Contact Number
                    <input type="text"
                        name="contactNumber"
                        placeholder="Enter Contactnumber"
                        value={registerData.contactNumber}
                        onChange={handleChange}
                    />
                    {errors.contactNumber && <span>{errors.contactNumber}</span>}
                </label>

                <div className="text-center">
                    <button className="btn btn-success m-2" type="submit" onClick={handleRegister}>Register</button>
                    <Link to="/login">
                        <button className="btn btn-warning m-2" > Back</button>
                    </Link>
                </div>
            </form >
        </div >
    )

}
export default Registrationpage;