import React, { useState } from "react";
import { useEffect } from "react";
// import Changepassword from "./Changepassword";
import "../StyleSheets/ManageProfile.css";
import SecurityService from "../Services/SecurityService";

const ProfileComponent = () => {
  const [showChangepassword, setChangepassword] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('username'));
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [displayProfile, setDisplayProfile] = useState(true);
  const [editProfile, setEditProfile] = useState(false);



  useEffect(() => {

    SecurityService.getUserInfo(userName).then((response) => {
      setFullName(response.data.fullName)
      setEmail(response.data.email)
      setContactNumber(response.data.contactNumber)

      console.log(response.data)
    })
  }, []);

  const toggleChangepassword = (event) => {
    setChangepassword(!showChangepassword);
    event.preventDefault();
  };
  const editUserProfile = (e) => {
    setDisplayProfile(false)
    setEditProfile(true)
    console.log(e);

  };
  const saveUserProfile = (e) => {
    setDisplayProfile(true)
    setEditProfile(false)
    SecurityService.updateUserByUserName(userName, fullName, email, contactNumber).then((response) => {
      console.log(response.data)
    })
    console.log(userName, fullName, email, contactNumber);
  };

  const cancelChanges = (e) => {
    setDisplayProfile(true)
    setEditProfile(false)
  }
  const handleUserData = (e) => {
    const { name, value } = e.target;

    if (name === 'fullName') {
      setFullName(value)
    }
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'contactNumber') {
      setContactNumber(value)
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
              <button className="change" onClick={editUserProfile}>Edit Profile</button>
              <button onClick={toggleChangepassword} className="change">
                change password
              </button>
            </div>
            {/* {showChangepassword && <Changepassword />} */}
          </form></div>}
        {
          editProfile &&
          <form className="myprofile-profile-form">
            <h2> My Profile</h2>
            <h6>User Name</h6>
            <input type="text" name="userName" value={userName} placeholder="Enter a username" />

            <h6>Full Name</h6>
            <input type="text" name="fullName" onChange={(e) => { handleUserData(e) }} placeholder="Enter full name" />

            <h6>Email</h6>
            <input type="text" name="email" onChange={(e) => { handleUserData(e) }} placeholder="Enter email" />

            <h6>Contact number</h6>
            <input type="text" name="contactNumber" onChange={(e) => { handleUserData(e) }} placeholder="Enter contact number" />
            <div className="myprofile-profile-form-buttons">
              <button className="change" onClick={(e) => { saveUserProfile(e); }}>save</button>
              <button className="change" onClick={(e) => { cancelChanges(e); }}>cancel</button>
            </div>
            </form>
        }
      </div>
    </div>
  );
};

export default ProfileComponent;
