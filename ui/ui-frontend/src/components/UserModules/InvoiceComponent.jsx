import React from "react";
import "../../StyleSheets/Invoice.css";
import "../../StyleSheets/SellerModule.css";
import { OrderService } from "../../Services/OrderService";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const InvoiceComponent = () => {
    const { purchaseOrderId } = useParams();
    const [orderss, setOrderss] = useState([]);
    const navigate = useNavigate("")

    useEffect(() => {
        OrderService.getOrderDetails(purchaseOrderId).then((response) => {
            setOrderss(response.data);
            console.log(response.data);
            // console.log(response.data.brandName[0]);
        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        });
    }, [purchaseOrderId,navigate]);

    const calculateTotalAmount = (qty, price) => {
        let totalAmount = 0;
        totalAmount = qty * price;
        return { totalAmount };
    };

    console.log(orderss);

    return (
        <div>
            <div>
                <div className="d-flex">
                    <div>
                        <h1 className="left">E-Kart</h1>
                        <div>
                            <p className="orderId">Order Id: {orderss.purchaseOrderId}</p>
                            <p className="">Order Date: {orderss.orderDate}</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="right">INVOICE</h1>
                    </div>
                </div>
                <table className=" container table table-striped table-bordered top">
                    <thead>
                        <td className="back slno styles">Sl.No</td>
                        <td className=" back item-description styles">Item Description</td>
                        <td className=" back qty styles">Qty</td>
                        <td className=" back price styles"> Price</td>
                        <td className="back price styles">Amount</td>
                    </thead>

                    <tbody>
                        {orderss.productName?.map((items, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td className="data">{items}</td>
                                    <td className="data">{orderss.qty[index]}</td>
                                    <td className="data">{orderss.priceList[index]}</td>
                                    <td className="data">
                                        {
                                            calculateTotalAmount(
                                                orderss.qty[index],
                                                orderss.priceList[index]
                                            ).totalAmount
                                        }
                                    </td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td className="totalAmount text-right" colSpan="4"> Total    </td>
                            <td className="total">₹ {orderss.price}/-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};




export default InvoiceComponent;