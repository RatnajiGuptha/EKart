import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserBalanceService } from '../../Services/UserBalanceService';

const WalletComponent = () => {
    const [balance, setBalance] = useState("");
    const userName = localStorage.getItem("username");
    const navigate = useNavigate("")

    useEffect(() => {
        UserBalanceService.getUserBalance(userName).then((Response) => {
            setBalance(Response.data);
            console.log("Balance", Response.data);
        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data);
                navigate("/login");
                localStorage.clear();
            }
        });
    }, [userName, navigate])


    return (
        <div className='container m-2 p-2'>
            <h1>Wallet Balance </h1>
            <input type="text" value={balance} />
            <button className='btn btn-info mt-2'>Update Balance</button>
        </div>
    )
}


export default WalletComponent;