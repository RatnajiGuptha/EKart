import React, { useState } from "react";
import { useEffect } from "react";
import "../../StyleSheets/ManageProfile.css";
import { SecurityService } from "../../Services/SecurityService";
import { useNavigate } from "react-router-dom";

const ProfileComponent = () => {
  const userName = localStorage.getItem('username');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const [newFullName, setNewFullName] = useState('');
  const [newEmail, setNewEmail] = useState("")
  const [newContactNumber, setNewContactNumber] = useState("");
  const [displayProfile, setDisplayProfile] = useState(true);
  const [editProfile, setEditProfile] = useState(false);
  const [showChangepassword, setChangepassword] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [reenterNewPassword, setReenterNewPassword] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate('')

  useEffect(() => {

    SecurityService.getUserInfo(userName).then((response) => {
      setFullName(response.data.fullName)
      setEmail(response.data.email)
      setContactNumber(response.data.contactNumber)

      console.log(response.data)
    })

  }, [userName]);

  const validateForm = async () => {
    let valid = true;
    const newError = {};


    const userEmailExists = await SecurityService.getUserByEmail(newEmail);
    console.log("email =", userEmailExists.data);
    if (!newEmail || !newEmail.trim()) {
      newError.email = "Email is required";
      valid = false;
    } else if (userEmailExists.data !== null) {
      newError.email = "Email address already exists";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(newEmail)) {
      newError.email = "Invalid Email address";
      valid = false;
    }

    const contactNumberExists = await SecurityService.getUserByContactNumber(newContactNumber);
    console.log(contactNumberExists.data);
    if (!newContactNumber.trim() || newContactNumber.trim().length !== 10) {
      newError.contactNumber = 'Mobile number should have 10 digits'
      valid = false;
    } else if (contactNumberExists.data !== null) {
      newError.contactNumber = "Mobile number already exists";
      valid = false;
    } else if (!/^[0-9]+$/.test(newContactNumber)) {
      newError.contactNumber = 'Mobile number should only contain numbers'
      valid = false;
    }

    if (!newFullName || fullName.trim().length < 3) {
      newError.fullName = 'Full name should have at least 3 characters';
      valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(newFullName)) {
      newError.fullName = 'Invalid Name';
      valid = false;
    }

    setErrors(newError);
    return valid;
  }

  const validatePassword = async () => {
    let valid = true;
    const newError = {};
    if (newPassword !== reenterNewPassword) {
      newError.passwordMatch = "passwords did not match"
      valid = false;
    } else if (!newPassword || newPassword.trim().length < 8) {
      newError.password = 'Password should have at least 8 characters';
      valid = false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(newPassword)) {
      newError.password = 'Password should at least one letter, one number and one special character';
      valid = false;
    }

    setErrors(newError);
    return valid;
  }

  const toggleChangepassword = (event) => {
    setChangepassword(!showChangepassword);
    setDisplayProfile(false)
    event.preventDefault();
  };
  const editUserProfile = (e) => {
    setDisplayProfile(false)
    setEditProfile(true)
    console.log(e);

  };
  const saveUserProfile = async (e) => {
    e.preventDefault();

    if (await validateForm()) {
      setDisplayProfile(true)
      setEditProfile(false)
      SecurityService.updateUserByUserName(userName, newFullName, newEmail, newContactNumber).then((response) => {
        console.log(response.data)
      }).catch((err) => {
        if (err.response.status === 401) {
          console.log(err.response.data)
          navigate("/login")
          localStorage.clear();
        }
      })
    }
    console.log(userName, fullName, email, contactNumber);
  };

  const saveNewPassword = async (e) => {
    e.preventDefault();
    if (await validatePassword()) {
      setDisplayProfile(true)
      setChangepassword(!showChangepassword)
      await SecurityService.updatePassword(userName, newPassword).then((res) => {
        console.log(res)
      })
    }
  }

  const cancelChanges = (e) => {
    setDisplayProfile(true)
    setEditProfile(false)
    setChangepassword(false)
  }
  const handleUserData = (e) => {
    const { name, value } = e.target;

    if (name === 'fullName') {
      setNewFullName(value)
    }
    if (name === 'email') {
      setNewEmail(value)
    }
    if (name === 'contactNumber') {
      setNewContactNumber(value)
    }
    if (name === 'newPassword') {
      setNewPassword(value)
    }
    if (name === 're-enterNewPassword') {
      setReenterNewPassword(value)
    }
  }
  return (
    <div className="myprofile">
      <div className="myprofile-profile">
        {displayProfile && <div>
          <form className="myprofile-profile-form">
            <h2> My Profile</h2>
            <h6>User Name</h6>
            <p>{userName}</p>

            <h6>Full Name</h6>
            <p>{fullName}</p>

            <h6>Email</h6>
            <p>{email}</p>

            <h6>Contact number</h6>
            <p>{contactNumber}</p>
            <div className="myprofile-profile-form-buttons">
              <button className=" btn btn-warning change" onClick={editUserProfile}>Edit Profile</button>
              <button onClick={toggleChangepassword} className="btn btn-info change">
                change password
              </button>
            </div>
            {/* {showChangepassword && <Changepassword />} */}
          </form></div>}
        {
          editProfile &&
          <form className="myprofile-profile-form">
            <h2> My Profile</h2>
            <label>User Name
              <input type="text" name="userName" value={userName} placeholder="Enter a username" />
            </label>
            <label>Full Name
              <input type="text" name="fullName" onChange={(e) => { handleUserData(e) }} placeholder="Enter full name" />
              {errors.fullName && <span>{errors.fullName}</span>}
            </label>
            <label>Email
              <input type="text" name="email" onChange={(e) => { handleUserData(e) }} placeholder="Enter email" />
              {errors.email && <span>{errors.email}</span>}
            </label>

            <label>Contact number
              <input type="text" name="contactNumber" onChange={(e) => { handleUserData(e) }} placeholder="Enter contact number" />
              {errors.contactNumber && <span>{errors.contactNumber}</span>}
            </label>
            <div className="myprofile-profile-form-buttons">
              <button className="btn btn-success saveProfile" onClick={(e) => { saveUserProfile(e); }}>save</button>
              <button className="btn btn-warning cancelChanges" onClick={(e) => { cancelChanges(e); }}>cancel</button>
            </div>
          </form>
        }
        {
          showChangepassword &&
          <form className="myprofile-profile-form">
            <h2> My Profile </h2>
            <label> New Password
              <input type="password" name="newPassword" onChange={(e) => { handleUserData(e) }} placeholder="Enter new Password" />
              {errors.password && <span>{errors.password}</span>}
            </label>
            <label> Re-enter new password
              <input type="password" name="re-enterNewPassword" onChange={(e) => { handleUserData(e) }} placeholder="Re-enter new Password" />
              {errors.password && <span>{errors.password}</span>}
            </label>
            {errors.passwordMatch && <span>{errors.passwordMatch}</span>}
            <div>
              <button className="btn btn-success" onClick={saveNewPassword}>save</button>
              <button className="btn btn-warning" onClick={cancelChanges}>cancel</button>
            </div>

          </form>

        }
      </div>
    </div>
  );
};

export default ProfileComponent;
