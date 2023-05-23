import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderService from '../../Services/OrderService';

const CheckoutComponent = () => {
    const { userName } = useParams();
    console.log(userName);
    const [purchaseOrder, setPurchaseOrder] = useState([]);
    useEffect(() => {
    }, []);

    const paymentFromCart = () => {
        OrderService.createOrderForCart(userName).then((Response) => {
            setPurchaseOrder(Response.data);
            console.log(Response.data);
        });
    }

    return (
        <div>
            <button className="payment-btn" onClick={() => paymentFromCart()}>Proceed For payment</button>
        </div>
    )
}

export default CheckoutComponent;