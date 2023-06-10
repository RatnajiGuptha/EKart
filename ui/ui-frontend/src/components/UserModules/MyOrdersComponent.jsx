import React from "react";
import { useEffect, useState } from "react";
import { OrderService } from "../../Services/OrderService";
import "../../StyleSheets/MyOrders.css";
import { Link } from "react-router-dom";

const MyOrdersComponent = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        OrderService.getAllOrdersAfterPayment().then((response) => {
            setOrder(response.data.reverse());
            console.log(response.data);
            // console.log(order);
        });
    }, []);


    return (
        <div>
            {order.map((item) => {
                return (
                    <Link key={item.purchaseOrderId} to={`/invoice/${item.purchaseOrderId}`}>
                        <div className="orders table container">
                            <div className="d-flex raju">
                                {item.productName.map((item1) => {
                                    return (
                                        <div className="product-names table">
                                            <p className="product-names table">{item1}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div>
                                <p className="m-5">₹ {item.price}/-</p>
                            </div>
                            <div>
                                {item.paymentStatus === "PAYMENT_COMPLETED" ? (
                                    <div>
                                        <p className="greendot"></p>
                                        <p>{item.paymentStatus}</p>
                                    </div>
                                ) : (
                                    <div>
                                        {/* <p className="reddot"></p> */}
                                        <p>{item.paymentStatus}</p>
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