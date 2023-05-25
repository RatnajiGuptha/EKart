import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OrderService from '../../Services/OrderService';

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
            <button className="payment-btn" onClick={() => paymentFromCart()}>Proceed For payment</button>
        </div>
    )
}

export default CheckoutComponent;