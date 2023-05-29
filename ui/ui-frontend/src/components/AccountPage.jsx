import Toys from "../components/Products/Toys";
import Footwear from "../components/Products/Footwear";
import React, { useState } from "react";
import "../StyleSheets/profile.css";
import ProfileComponent from "./ProfileComponent";
import Accessories from "./Products/Accessories";
import AddressComponent from "./AddressComponent";
import { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';


const AccountPage = () => {
  let { type } = useParams();

  // console.log(type);
  if (!type) {
    type = "info";
  }
  const navigate = useNavigate();
  const userName = localStorage.getItem("username");

  const [assignType, setAssignType] = useState(type)
  const [page, setPages] = useState(assignType);

  const handlePage = (type) => {
    console.log(type);
    setAssignType(type)
    setPages(type)
    navigate(`/profile/${type}`);
  }
  useEffect(() => {
    setPages(assignType)
  }, [])

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
              <a className="category" onClick={() => { handlePage("info"); }}> Manage Profile</a>
              <a className="category" type="submit" onClick={() => { handlePage('address'); }}> Manage Address</a>
              <a className="category" type="submit" onClick={() => { handlePage('orders'); }}>My Orders</a>
              <a className="category" type="submit" onClick={() => { handlePage('wallet'); }}>wallet</a>
              <a className="category" >Logout</a>
            </div>
          </div>
        </div>
        <div className="main-profile-right">

          {page === 'info' && <div>{<ProfileComponent />}</div>}
          {page === 'address' && <div>{<AddressComponent />}</div>}
          {page === 'orders' && <div>{<Footwear />}</div>}
          {page === 'wallet' && <div>{<Accessories />}</div>}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
