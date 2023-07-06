import React, { useState } from 'react'
import "../../StyleSheets/ManageProfile.css";
import { SecurityService } from "../../Services/SecurityService";
import 'react-toastify/dist/ReactToastify.css';
import "../../StyleSheets/Home.css";


const ChangePassword = ({ email }) => {

    const [newPassword, setNewPassword] = useState("");
    const [reenterNewPassword, setReenterNewPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validatePassword = async () => {
        let valid = true;
        const newError = {};
        if (newPassword !== reenterNewPassword) {
            newError.passwordMatch = "passwords did not match"
            valid = false;
        } else if (!newPassword || newPassword.trim().length < 8) {
            newError.password = 'Password should have at least 8 characters';
            valid = false;
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(newPassword)) {
            newError.password = "Password should contains least one letter, one number and one special character";
            valid = false;
        }

        setErrors(newError);
        return valid;
    }
    const saveNewPassword = async (e) => {
        e.preventDefault();
        if (await validatePassword()) {

            await SecurityService.updatePasswordByEmail(email, newPassword).then((res) => {
                console.log(res)
            })

            window.location.reload(false)
        }
    }

    const cancelChanges = (e) => {
        window.location.reload(false)

    }

    return (
        <div>

            <div className="myprofile-profile-form">
                <label> New Password
                    <input type="password" name="newPassword" onChange={(e) => { setNewPassword(e.target.value) }} placeholder="Enter new Password" />
                    {errors.password && <span>{errors.password}</span>}
                </label>
                <label> Re-enter new password
                    <input type="password" name="re-enterNewPassword" onChange={(e) => { setReenterNewPassword(e.target.value) }} placeholder="Re-enter new Password" />
                    {errors.password && <span>{errors.password}</span>}
                </label>
                {errors.passwordMatch && <span>{errors.passwordMatch}</span>}
                <div>
                    <button className="btn btn-success" onClick={saveNewPassword}>save</button>
                    <button className="btn btn-warning" onClick={cancelChanges}>cancel</button>
                </div>

            </div>
        </div>
    )
}

export default ChangePassword