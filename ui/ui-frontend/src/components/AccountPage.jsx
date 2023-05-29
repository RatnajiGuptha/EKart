import Toys from "../components/Products/Toys";
import Footwear from "../components/Products/Footwear";
import React, { useState } from "react";
import "../StyleSheets/profile.css";
import ProfileComponent from "./ProfileComponent";
import Accessories from "./Products/Accessories";
import AddressComponent from "./AddressComponent";

const AccountPage = () => {
  const userName = localStorage.getItem("username");

  const [page, setPages] = useState(null);


  const handlePage = (type) => {
    setPages(type)
  }

  return (
    <div className="accounts">
      <div className="main-profile">
        <div className="main-profile-left">
          <div className="main-profile-side">
            <div className="profile">
              <img
                className="profile-img"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
              ></img>
              <div className="username">{userName}</div>
            </div>
            <div className="profile-categories">
              <p className="category" onClick={() => { handlePage("profile"); }}> Manage Profile</p>
              <p className="category" type="submit" onClick={() => { handlePage('address'); }}> Manage Address</p>
              <p className="category" type="submit" onClick={() => { handlePage('orders'); }}>My Orders</p>
              <p className="category" type="submit" onClick={() => { handlePage('wallet'); }}>wallet</p>
              <p className="category" >Logout</p>
            </div>
          </div>
        </div>
        <div className="main-profile-right">

          {page === 'profile' && <div>{<ProfileComponent />}</div>}
          {page === 'address' && <div>{<AddressComponent />}</div>}
          {page === 'orders' && <div>{<Footwear />}</div>}
          {page === 'wallet' && <div>{<Accessories />}</div>}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
