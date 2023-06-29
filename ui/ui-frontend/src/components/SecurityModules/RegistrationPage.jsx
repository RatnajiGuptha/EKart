import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserBalanceService } from "../../Services/UserBalanceService";
import { SecurityService } from "../../Services/SecurityService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../StyleSheets/Login.css";

function Registrationpage() {

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: '',
    password: "",
    contactNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = async () => {
    let valid = true;
    const newError = {};


    if (!registerData.email || !registerData.email.trim()) {
      newError.email = "Email is required";
      valid = false;
    } else if (registerData.email !== "") {
      const userEmailExists = await SecurityService.getUserByEmail(registerData.email);
      console.log(userEmailExists.data);
      if (userEmailExists.data !== null) {
        newError.email = "Email address already exists";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
        newError.email = "Invalid Email address";
        valid = false;
      }
    }

    if (!registerData.fullName || registerData.fullName.trim().length < 3) {
      newError.fullName = "Full name should have at least 3 characters";
      valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(registerData.fullName)) {
      newError.fullName = "Invalid Name";
      valid = false;
    }

    if (registerData.contactNumber !== "") {
      const userPhoneNo = await SecurityService.getUserByContactNumber(registerData.contactNumber);
      console.log(userPhoneNo.data);
      if (userPhoneNo.data !== null) {
        newError.contactNumber = "Contact number already exists";
      }
    }
    if (!registerData.contactNumber.trim() || registerData.contactNumber.trim().length !== 10) {
      newError.contactNumber = "Mobile number should have 10 digits";
      valid = false;
    } else if (!/^[0-9]+$/.test(registerData.contactNumber)) {
      newError.contactNumber = "Mobile number should have 10 digits";
      valid = false;
    }

    if (!registerData.password || registerData.password.trim().length < 8) {
      newError.password = "Password should have at least 8 characters";
      valid = false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(registerData.password)) {
      newError.password = "Password should contains least one letter, one number and one special character";
      valid = false;
    }

    setErrors(newError);
    if (newError === {}) {
      toast.error("Check the required fields");
    }
    return valid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (await validateForm()) {
      SecurityService.addUser(registerData).then((res) => {
        console.log(res.data);
        toast.success("registered successfully");

        UserBalanceService.addMoneyTowallet({ email: registerData.email, price: 0 }).then((res) => {
          console.log(res.data);
        })
      });
    }
  };

  return (
    <div className="login-page">
      <form className="forms">
        <label>  Fullname
          <input type="text" name="fullName" placeholder="Enter Fullname" value={registerData.fullName} onChange={handleChange} />
          {errors.fullName && <span>{errors.fullName}</span>}
        </label>

        <label>  Email
          <input type="text" name="email" placeholder="Enter Email" value={registerData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </label>

        <label>  Password
          <input type="Password" name="password" placeholder="Enter Password" value={registerData.password} onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>}
        </label>

        <label>  Contact Number
          <input type="number" name="contactNumber" placeholder="Enter Contactnumber" value={registerData.contactNumber} onChange={handleChange} />
          {errors.contactNumber && <span>{errors.contactNumber}</span>}
        </label>

        <div className="text-center">
          <button className="btn btn-success m-2" type="submit" onClick={handleRegister}>  Register</button>
          <Link to="/login">
            <button className="btn btn-warning m-2"> Back</button>
          </Link>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
export default Registrationpage;