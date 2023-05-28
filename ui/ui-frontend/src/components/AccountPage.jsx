import Toys from "../components/Products/Toys";
import Footwear from "../components/Products/Footwear";
import React, { useState } from "react";
import "../StyleSheets/profile.css";
import ProfileComponent from "./ProfileComponent";
import Accessories from "./Products/Accessories";
import AddressComponent from "./AddressComponent";

const AccountPage = () => {
  const userName = localStorage.getItem("username");

  //   const [page, setPages] = useState("");
  const [submitProfile, setSubmitProfile] = useState(true);
  const [submitAddress, setSubmitAddress] = useState(false);
  const [submitMyorders, setSubmitMyorders] = useState(false);
  const [submitWallet, setSubmitWallet] = useState(false);

  const handleSubmitProfile = () => {
    setSubmitProfile(true);
    setSubmitAddress(false);
    setSubmitMyorders(false);
    setSubmitWallet(false);
    console.log("submit profile");
  };
  const handleSubmitAddress = () => {
    setSubmitProfile(false);
    setSubmitAddress(true);
    setSubmitMyorders(false);
    setSubmitWallet(false);
    console.log("submit address");
  };
  const handleSubmitMyorders = () => {
    setSubmitProfile(false);
    setSubmitAddress(false);
    setSubmitMyorders(true);
    setSubmitWallet(false);
    console.log("submit myOrders");
  };
  const handleSubmitWallet = () => {
    setSubmitProfile(false);
    setSubmitAddress(false);
    setSubmitMyorders(false);
    setSubmitWallet(true);
    console.log("submit wallet");
  };
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
              <p className="category" onClick={() => { handleSubmitProfile(); }}> Manage Profile</p>
              <p className="category" type="submit" onClick={() => { handleSubmitAddress(); }}> Manage Address</p>
              <p className="category" type="submit" onClick={() => { handleSubmitMyorders(); }}>My Orders</p>
              <p className="category" type="submit" onClick={() => { handleSubmitWallet(); }}>wallet</p>
              <p className="category">Logout</p>
            </div>
          </div>
        </div>
        <div className="main-profile-right">

          {submitProfile && <div>{<ProfileComponent />}</div>}
          {submitAddress && <div>{<AddressComponent />}</div>}
          {submitMyorders && <div>{<Footwear />}</div>}
          {submitWallet && <div>{<Accessories />}</div>}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
