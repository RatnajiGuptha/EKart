import React, { useState, useEffect } from "react";
import "../../StyleSheets/profile.css";
import ProfileComponent from "./ProfileComponent";
import WalletComponent from "./WalletComponent";
import AddressComponent from "./AddressComponent";
import { useParams, useNavigate } from "react-router-dom";
import MyOrdersComponent from "./MyOrdersComponent";

const AccountPage = () => {
  let { type } = useParams();

  // console.log(type);
  if (!type) {
    type = "info";
  }

  const navigate = useNavigate();
  const userName = localStorage.getItem("username");

  const [assignType, setAssignType] = useState(type);
  const [page, setPages] = useState(assignType);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handlePage = (type) => {
    console.log(type);
    setAssignType(type);
    setPages(type);
    navigate(`/profile/${type}`);
  };

  useEffect(() => {
    setPages(assignType);
  }, [assignType]);

  return (
    <div className="accounts">
      <div className="main-profile">
        <div className="main-profile-left">
          <div className="main-profile-side">
            <div className="profile">
              <img
                className="profile-img"
                alt="/"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
              ></img>
              <div className="username">{userName}</div>
            </div>
            <div className="profile-categories">
              <a
                className="category"
                href="/profile/info"
                onClick={() => {
                  handlePage("info");
                }}
              >
                {" "}
                Manage Profile
              </a>
              <a
                className="category"
                href="/profile/address"
                type="submit"
                onClick={() => {
                  handlePage("address");
                }}
              >
                {" "}
                Manage Address
              </a>
              <a
                className="category"
                href="/profile/orders"
                type="submit"
                onClick={() => {
                  handlePage("orders");
                }}
              >
                My Orders
              </a>
              <a
                className="category"
                href="/profile/wallet"
                type="submit"
                onClick={() => {
                  handlePage("wallet");
                }}
              >
                wallet
              </a>
              <a className="category" href="/" onClick={handleLogout}>
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="main-profile-right">
          <div className="scrollable-content">
            {page === "info" && <div>{<ProfileComponent />}</div>}
            {page === "address" && <div>{<AddressComponent />}</div>}
            {page === "orders" && <div>{<MyOrdersComponent />}</div>}
            {page === "wallet" && <div>{<WalletComponent />}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
