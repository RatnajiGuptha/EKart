import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import { UserBalanceService } from '../../Services/UserBalanceService';

const WalletComponent = () => {

    const [balance, setBalance] = useState("");
    const userName = localStorage.getItem("username");

    useEffect(() => {
        UserBalanceService.getUserBalance(userName).then((Response) => {
            setBalance(Response.data);
            console.log("Balance", Response.data);
        });
    }, [userName])


    return (
        <div className='container m-2 p-2'>
            <h1>Wallet Balance </h1>
            <input type="text" value={balance} />
            <button className='btn btn-info mt-2'>Update Balance</button>
        </div>
    )
}


export default WalletComponent;