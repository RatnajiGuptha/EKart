import React from 'react'
import { Checkmark } from 'react-checkmark'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import OrderService from '../../Services/OrderService';
import { Roller } from 'react-awesome-spinners';
const CheckMark = () => {

    const { id } = useParams();
    console.log(id);
    const [paymentStatus, setPaymentStatus] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            OrderService.getOrderDetails(id).then((Response) => {
                console.log(Response.data);
                //  console.log(Response.data[0]);
                console.log(Response.data.paymentStatus);
                setPaymentStatus(Response.data.paymentStatus);
            })
            setIsLoading(false);
        }, 5000);

    }, [id]);

    if (isLoading) {

        return (
            <div style={{ marginTop: 200 }} >
                <div><Roller /></div>

                <div style={{ color: "black", marginTop: 40 }} className="ugb-highlight">
                    Payment is beeing processed, please wait
                </div>
                {/* <h1>............LOADING........</h1> */}
            </div>
        )

    }

    if (paymentStatus === "PAYMENT_FAILED") {
        console.log("................")
        return (
            <div >
                <div className='mt-5'>
                    <img src='https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1' alt="failed gif" width="400" height="300" />
                </div>
                <div style={{ color: "black", marginTop: 40 }} className="ugb-highlight">
                    Oops!!!!, your payment could not be processed
                </div>
                <div style={{ marginTop: 70 }}>
                    <Link to={'/cart'} ><button className="btn btn-danger">Retry Payment</button></Link>

                </div>
            </div>

        )
    }

    else {
        return (
            <div >
                <div className='mt-5'>
                    <Checkmark size='256px' />
                </div>
                <div style={{ color: "black", marginTop: 40 }} className="ugb-highlight">
                    Your payment Completed sucessfully....
                </div>
                <div style={{ marginTop: 50 }}>
                    <Link to={'/'} ><button className="btn btn-danger">Continue Shoping</button></Link>
                </div>
                {/* </div> */}
            </div>
        )
    }
}

export default CheckMark;
