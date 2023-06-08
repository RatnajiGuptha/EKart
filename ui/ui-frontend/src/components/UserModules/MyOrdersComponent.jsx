import React from "react";

import { useEffect } from "react";

import { useState } from "react";

import {OrderService} from "../../Services/OrderService";

import "../../StyleSheets/MyOrders.css";

import { Link } from "react-router-dom";

const MyOrdersComponent = () => {

    const [order, setOrder] = useState([]);




    useEffect(() => {

        OrderService.getAllOrdersAfterPayment().then((response) => {

            setOrder(response.data);

            console.log(order);

        });

    }, [order]);

    return (

        <div>

            {order.map(function (Item) {

                return (

                    <Link to={`/invoice/${Item.purchaseOrderId}`}>

                        <div className="orders table container">

                            {/* <Paper className="orders"> */}

                            <div className="d-flex raju">

                                {Item.productName.map(function (item1) {

                                    return (

                                        <div className="product-names table">

                                            <p className="product-names table">{item1}</p>

                                        </div>

                                    );

                                })}

                            </div>

                            <div>

                                <p className="m-5">₹ {Item.price}/-</p>

                            </div>




                            <div>

                                {Item.paymentStatus === "PAYMENT_COMPLETED" ? (

                                    <div>

                                        <p className="greendot"></p>

                                        <p>{Item.paymentStatus}</p>

                                    </div>

                                ) : (

                                    <div>

                                        <p className="reddot"></p>

                                        <p>{Item.paymentStatus}</p>

                                    </div>

                                )}

                            </div>

                        </div>

                    </Link>

                );

            })}

        </div>

    );

};




export default MyOrdersComponent;