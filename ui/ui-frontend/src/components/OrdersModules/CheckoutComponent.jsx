import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OrderService from '../../Services/OrderService';
// import "../../StyleSheets/Checkout.css";

const CheckoutComponent = () => {
    const { userName } = useParams();
    console.log(userName);
    const navigate = useNavigate();
    const [purchaseOrder, setPurchaseOrder] = useState([]);
    useEffect(() => {
    }, []);

    const paymentFromCart = () => {
        OrderService.createOrderForCart(userName).then((Response) => {
            setPurchaseOrder(Response.data);
            return Response.data;
        }).then((data) => {
            console.log(data?.purchaseOrderId)
            console.log(data)

            console.log("...........receivedData.........");
            const i = data?.purchaseOrderId;
            navigate(`/paymentCompleted/${i}`);

        });


    }

    return (
        <div>
            <div className="d-flex align-content-center flex-column">
                <div className="d-flex align-items-start flex-column">
                    <div className="mb-auto p-2">Flex item1</div>
                </div>
                <div className="d-flex align-items-start flex-column" >

                    <div className="mt-auto p-2">
                        <div className="card mt-50 mb-50">
                            {/* <div className="card-title mx-auto">
                Settings
            </div> */}
                            <div className="nav">
                                <ul className="mx-auto">

                                    <li className="active"><a href="#">Payment</a></li>
                                </ul>
                            </div>
                            <form>
                                <span id="card-header">Saved cards:</span>

                                <div className="row row-1">
                                    <div className="col-2"><img className="img-fluid" src="https://www.pngkit.com/png/full/332-3321940_wallet-icon-control-money-icon-png.png" /></div>
                                    <div className="col-7">

                                        <input placeholder="**** **** **** 4296" name="saved card" />
                                    </div>
                                    <div className="col-3 d-flex justify-content-center">
                                        <a href="#">Remove card</a>
                                    </div>
                                </div>

                                <div className="row three">
                                    <div className="col-7">
                                        <div className="row-1">
                                            <div className="row row-2">
                                                <span id="card-inner">Card number</span>
                                            </div>
                                            <div className="row row-2">
                                                <input placeholder="5134-5264-4" name="Card Number" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <button className="btn d-flex mx-auto"><b>Pay {1}</b></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <button className="btn btn-success" onClick={() => paymentFromCart()}>Proceed For payment</button>
        </div >
    )
}

export default CheckoutComponent;