import { React, useState, useEffect ,useRef} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { OrderService } from "../../Services/OrderService";
import { PromoCodesService } from "../../Services/PromoCodesService";
import "../../StyleSheets/Invoice.css";
import {useReactToPrint} from 'react-to-print';

const InvoiceComponent = () => {
    const { purchaseOrderId } = useParams();
    const [orderss, setOrderss] = useState([]);
    const [receiverNamee, setReceiverNamee] = useState("")
    const [address, setAddress] = useState("")
    const [locality, setLocality] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const componentRef = useRef();

    const [promoCode, setPromoCode] = useState("NA")
    const [discountPrice, setDiscountPrice] = useState(0);

    const navigate = useNavigate("")

    const printData = useReactToPrint({
        content : () => componentRef.current,
        documentTitle : "Invoice " + purchaseOrderId,
        onafterprint : () => alert('print Sucess')
    });

    useEffect(() => {
        OrderService.getOrderDetails(purchaseOrderId).then((response) => {
            console.log("response.data--->", response.data)
            setOrderss(response.data);
            setReceiverNamee(response.data.address[2])
            setAddress(response.data.address[4] + " " + response.data.address[5])
            setLocality(response.data.address[6] + "-" + response.data.address[9])
            setPhoneNumber(response.data.address[3])
            setPromoCode(response.data.promoCode)


            PromoCodesService.getDiscountPrice(response.data.promoCode).then((response) => {
                setDiscountPrice(response.data)
            })

        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        });

    }, [purchaseOrderId, navigate]);


    const calculateTotalAmount = (qty, price) => {
        let totalAmount = 0;
        totalAmount = qty * price;
        return { totalAmount };
    };

    return (
        <div className="container" ref={componentRef}>
            <div className="invoice-container">
                <h3> INVOICE COPY </h3>
                <div className="header">
                    <div className="order-status-container">
                        <div>
                            <h4 ><strong>Shipping Address</strong></h4>
                            <ul className="list-unstyled">
                                <li>Receiver Name:<span>{receiverNamee}</span> </li>
                                <li>Address: <span>{address}</span></li>
                                <li>City and pincode: <span>{locality}</span></li>
                                <li>Phone number:<span>{phoneNumber}</span></li>
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
                    <div className="price-containers">
                        <div>
                        </div>
                        <div className="saved-card">
                            <p>You have saved <span> ₹ {discountPrice*orderss.totalAmount}/-</span> </p>
                            <h6>Thank you for Shopping</h6>
                        </div>
                        <div className="price-details">
                            <ul className="list-unstyled">
                                <li>Total price: ₹ <span>{orderss.totalAmount}/-</span></li>
                                <li>Promo Code: <span>{promoCode}</span></li>
                                <li>Discount amount: ₹ <span>{discountPrice*orderss.totalAmount}/-</span></li>
                                <li>Grand Total: ₹ <span>{orderss.price}/-</span></li>
                            </ul>
                        </div>
                    </div>

                </div >
                <button onClick={printData}>print</button>
            </div >
        </div >
    );
};




export default InvoiceComponent;