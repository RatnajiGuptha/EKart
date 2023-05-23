import React, { useState } from "react";
import "../../StyleSheets/Registration.css";
export const Registrationpage = (props) => {
    const [Username, setUsername] = useState('');
    const [Fullname, setFullname] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Contactnumber, setContactnumber] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Email);
    }
    return (
        <div className="div-container">
            <div className="auth-form-container">
                <form className='Registration-form' onSubmit={handleSubmit}>
                    <label htmlFor="Username">Username</label>
                    <input value={Username} name="userName" onChange={(e) => setUsername(e.target.value)} placeholder="Enter  username" type="Username" id="Username" name="Username" />

                    <label htmlFor="Fullname">Fullname</label>
                    <input value={Fullname} name="fullName" onChange={(e) => setFullname(e.target.value)} placeholder="Enter  Fullname" type="Fullname" id="Fullname" name="Fullname" />

                    <label htmlFor="Email">Email</label>
                    <input value={Email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter  Email" type="Email" id="Email" name="Email" />

                    <label htmlFor="Password">Password</label>
                    <input value={Password} name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type="Password" id="Password" name="Password" />

                    <label htmlFor="Contactnumber">Contactnumber</label>
                    <input value={Contactnumber} name="contactNumber" onChange={(e) => setContactnumber(e.target.value)} placeholder="Enter Contactnumber" type="Contactnumber" id="Contactnumber" name="Contactnumber" />

                    <button className="register" type="submit">Register</button>

                </form>
            </div>
        </div>
    )

}
export default Registrationpage;