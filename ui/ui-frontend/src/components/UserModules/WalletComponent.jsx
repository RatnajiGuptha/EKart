import { WindowSharp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserBalanceService } from '../../Services/UserBalanceService';
import UpdateWalletComponent from './UpdateWalletComponent';

const WalletComponent = () => {
    const [balance, setBalance] = useState(0);
    const userName = localStorage.getItem("username");
    const [amount, setAmount] = useState();
    const navigate = useNavigate("")
    // console.log(amount);

    useEffect(() => {
        UserBalanceService.getUserBalance(userName).then((Response) => {
            setBalance(Response.data);
            // localStorage.setItem('balance',Response.data);
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
            <form className='cashClass'>
                <table className='addressTable2' style={{marginLeft : "270px"}}>
                    <tr style={{ border: "2px solid black" }}>
                        {/* <td><img className="img-fluid" alt="/" src="https://www.pngkit.com/png/full/332-3321940_wallet-icon-control-money-icon-png.png" /></td> */}
                        <td> congrats you have  <strong >Rs.{balance}</strong> in wallet</td>
                    </tr>
                </table>
            </form>
            {/* <ChangeComponent /> */}
            <UpdateWalletComponent balance={balance} />
            {/* {window.location.reload()} */}
        </div>
    )
}



export default WalletComponent;
