import React, { useState } from "react";
// import Changepassword from "./Changepassword";
import "../StyleSheets/ManageProfile.css";

const ProfileComponent = () => {
  const [showChangepassword, setChangepassword] = useState(false);
  const userName = localStorage.getItem("username");

  const toggleChangepassword = (event) => {
    setChangepassword(!showChangepassword);
    event.preventDefault();
  };
  return (
    <div className="c-container">
      <div className="byy">
        <form className="Profile">
          <h1> My Profile</h1>
          <h4>User Name</h4>
          <p>{userName}</p>

          <h4>Full Name</h4>
          <p>Madhuri Sandhi</p>

          <h4>Email</h4>
          <p>madhuri23@gmail.com</p>

          <h4>Contact number</h4>
          <p>9874563210</p>

          <button className="change">Edit</button>
          <button onClick={toggleChangepassword} className="change">
            change password
          </button>
          {/* {showChangepassword && <Changepassword />} */}
        </form>
      </div>
    </div>
  );
};

export default ProfileComponent;
