import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserBalanceService } from "../../Services/UserBalanceService";
import UpdateWalletComponent from "./UpdateWalletComponent";
import "../../StyleSheets/Wallet.css";
const WalletComponent = () => {
  const [balance, setBalance] = useState(0);
  const email = localStorage.getItem("email");

  const navigate = useNavigate("");
  // console.log(amount);

  useEffect(() => {
    UserBalanceService.getUserBalance(email)
      .then((Response) => {
        setBalance(Response.data);
        // localStorage.setItem('balance',Response.data);
        console.log("Balance", Response.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log(err.response.data);
          navigate("/login");
          localStorage.clear();
        }
      });
  }, [email, navigate]);

  return (
    <div className="wallet-container">
      <div className="image-container"></div>
      <div className="card-container">
        <h4>
          congrats you have <strong>Rs.{balance}</strong> in wallet
        </h4>
        <UpdateWalletComponent balance={balance} />
      </div>
    </div>
  );
};

export default WalletComponent;
