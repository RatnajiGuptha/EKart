import React, { useState } from "react";
import { useEffect } from "react";
import "../../StyleSheets/ManageProfile.css";
import { SecurityService } from "../../Services/SecurityService";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../SecurityModules/ChangePassword";

const ProfileComponent = () => {
  const email = localStorage.getItem('email');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const [displayProfile, setDisplayProfile] = useState(true);
  const [editProfile, setEditProfile] = useState(false);
  const [showChangepassword, setChangepassword] = useState(false);
  let status = false

  const [errors, setErrors] = useState({});
  const navigate = useNavigate('')

  useEffect(() => {

    SecurityService.getUserInfo(email).then((response) => {
      setFullName(response.data.fullName)
      setEmailAddress(response.data.email)
      setContactNumber(response.data.contactNumber)
      console.log(response.data)
    })
  }, [email]);

  const validateForm = async () => {
    let valid = true;
    const newError = {};

    const contactNumberExists = await SecurityService.getUserByContactNumber(contactNumber);
    if (contactNumberExists.data !== null) {
      status = true
      console.log(status)
    }
    console.log(status)

    console.log(contactNumberExists.data);
    if (!contactNumber.trim() || contactNumber.trim().length !== 10) {
      newError.contactNumber = 'Mobile number should have 10 digits'
      valid = false;
    } else if (status) {
      newError.contactNumber = "Mobile number already exists";
      valid = false;
    } else if (!/^[0-9]+$/.test(contactNumber)) {
      newError.contactNumber = 'Mobile number should only contain numbers'
      valid = false;
    }

    if (!fullName || fullName.trim().length < 3) {
      newError.fullName = 'Full name should have at least 3 characters';
      valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(fullName)) {
      newError.fullName = 'Invalid Name';
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
      status = false
      console.log(status)
      setDisplayProfile(true)
      setEditProfile(false)
      await SecurityService.updateUserData(fullName, emailAddress, contactNumber).then((response) => {
        console.log(response.data)
      }).catch((err) => {
        if (err.response.status === 401) {
          console.log(err.response.data)
          navigate("/login")
          localStorage.clear();
        }
      })
      window.location.reload(false)
    }
    console.log(fullName, emailAddress, contactNumber);
  };

  const cancelChanges = (e) => {
    window.location.reload(false)
    setDisplayProfile(true)
    setEditProfile(false)
    setChangepassword(false)

  }

  return (
    <div className="myprofile">
      <div className="myprofile-profile">
        {displayProfile && <div>
          <form className="myprofile-profile-form">
            <h2> My Profile</h2>

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
          </form></div>}
        {
          editProfile &&
          <form className="myprofile-profile-form">
            <h2> My Profile</h2>
              <label>Email
                <input type="text" name="email" value={emailAddress} placeholder="Enter email" />
                {errors.email && <span>{errors.email}</span>}
              </label>
            <label>Full Name
              <input type="text" name="fullName" value={fullName} onChange={(e) => { setFullName(e.target.value) }} placeholder="Enter full name" />
              {errors.fullName && <span>{errors.fullName}</span>}
              </label>

            <label>Contact number
              <input type="text" name="contactNumber" value={contactNumber} onChange={(e) => { setContactNumber(e.target.value) }} placeholder="Enter contact number" />
              {errors.contactNumber && <span>{errors.contactNumber}</span>}
            </label>
            <div className="myprofile-profile-form-buttons">
              <button className="btn btn-success saveProfile" onClick={(e) => { saveUserProfile(e); }}>save</button>
              <button className="btn btn-warning cancelChanges" onClick={(e) => { cancelChanges(e); }}>Back</button>
            </div>
          </form>
        }
        {
          showChangepassword &&
          <form className="myprofile-profile-form">
            <h2> My Profile </h2>

            <ChangePassword />

          </form>

        }
      </div>
    </div>
  );
};

export default ProfileComponent;
