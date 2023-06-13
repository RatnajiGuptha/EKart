import { React, useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { OrderService } from "../../Services/OrderService";
import { AddressService } from "../../Services/AddressService";
import "../../StyleSheets/Invoice.css";

const InvoiceComponent = () => {
    const { purchaseOrderId } = useParams();
    const [orderss, setOrderss] = useState([]);
    const [address, setAddress] = useState([]);
    const navigate = useNavigate("")

    useEffect(() => {

        OrderService.getOrderDetails(purchaseOrderId).then((response) => {
            console.log("addressid --> ", response.data.addressId)
            console.log("response.data--->", response.data)
            setOrderss(response.data);

            AddressService.getAddressById(response.data.addressId).then((res) => {
                setAddress(res.data)
                console.log("res.data", res.data)
            })
        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        });

    }, [navigate]);


    const calculateTotalAmount = (qty, price) => {
        let totalAmount = 0;
        totalAmount = qty * price;
        return { totalAmount };
    };

    // console.log(orderss);


    return (
        <div className="container">
            <div className="invoice-container">
                <h3> INVOICE COPY </h3>
                <div className="header">
                    <div className="order-status-container">
                        <div>
                            <h4 ><strong>Shipping Address</strong></h4>
                            <ul className="list-unstyled">
                                <li>Receiver Name:<span>{address.receiverName}</span> </li>
                                <li>Address: <span>{address.buildingNo} {" "} {address.street1}</span></li>
                                <li>City and pincode: <span>{address.city}{"-"}{address.pincode}</span></li>
                                <li>Phone number:<span>{address.receiverPhoneNumber}</span></li>
                            </ul>
                        </div>

                        <div>
                            <h4><strong>Payment Details</strong> </h4>
                            <ul className="list-unstyled">
                                <li>Inovice Id:  <span>{orderss.purchaseOrderId}</span></li>
                                <li>Order Date:  <span>{orderss.orderDate}</span></li>
                                <li>Order Status: <span>{orderss.paymentStatus}</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-condensed nomargin">
                            <thead>
                                <tr>
                                    <th>Product Details</th>
                                    <th>Size</th>
                                    <th>Color</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderss.productName?.map((items, index) => {
                                    return (
                                        <tr>
                                            <td >{items}</td>
                                            <td >{orderss.size[index]}</td>
                                            <td>{orderss.color[index]} </td>
                                            <td >{orderss.qty[index]}</td>
                                            <td>₹ {orderss.priceList[index]} /-</td>
                                            <td> ₹ {calculateTotalAmount(
                                                orderss.qty[index], orderss.priceList[index]).totalAmount} /-
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <hr className="mt-0" />
                    <div className="price-details">
                        <ul className="list-unstyled">
                            <li>Total Amount: ₹ <span>{orderss.price} /- </span></li>
                            <li>Promo code:  <span>Na</span></li>
                            <li>Discount: ₹ <span>0 /-</span></li>
                            <li>Grand Total: ₹ <span>{orderss.price} /-</span></li>
                        </ul>
                    </div>
                </div >
            </div >
        </div >



























    );
};




export default InvoiceComponent;