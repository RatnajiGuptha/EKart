import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {OrderService} from '../../Services/OrderService';
import "../../StyleSheets/Checkout.css";
import {UserBalanceService} from '../../Services/UserBalanceService';
import {AddressService} from '../../Services/AddressService';


const CheckoutComponent = () => {
    const { userName } = useParams();
    // console.log(userName);
    const navigate = useNavigate();
    const [purchaseOrder, setPurchaseOrder] = useState([]);
    const [balance, setBalance] = useState(0);

    const [isChecked, setIsChecked] = useState(false);
    const [address, setAddress] = useState([]);

    const [addressList, setAddressList] = useState([]);

    useEffect(() => {
        UserBalanceService.getUserBalance(userName).then((Response) => {
            setBalance(Response.data);
            console.log(Response.data);
        });

        AddressService.getAllAddress(userName).then((Response) => {
            setAddressList(Response.data);
            console.log(Response.data);
        })

    }, []);

    // let id = 0;
    const handleOnChange = (e) => {
        console.log(e.target.value);
        setIsChecked(!isChecked);
        console.log(isChecked);

        // id = e.target.value;
        recievingAddress(e.target.value);
    };
    const recievingAddress = (e) => {
        AddressService.getAddressById(e).then((Response) => {
            console.log(Response.data);
            setAddress(Response.data);
        })
    }


    const paymentFromCart = () => {
        OrderService.createOrderForCart(userName, address.addressId).then((Response) => {
            setPurchaseOrder(Response.data);
            return Response.data;
        }).then((data) => {
            console.log(data?.purchaseOrderId)
            console.log(data)

            console.log("...........receivedData.........");
            const i = data?.purchaseOrderId;
            navigate(`/orderStatus/${i}`);

        });
    }

    return (
        <div>
            <div className="d-flex align-content-center flex-column">

            <div className="d-flex align-items-start flex-column" style={{ height: 300 }}>
                
                    
                        <div className='card1' style={{overflowY: "scroll"}}>
                        <p><strong>Please select delivery address</strong></p>
                        <form>
                            < div className="table-responsive">
                                <table >
                                    {addressList.map((item) => (
                                        <tr style={{ border: "2px solid black" }} >
                                            < div className="Address" >
                                                <td >
                                                    <input type="radio"
                                                        id={item.addressId}
                                                        name="Address"
                                                        value={item.addressId}
                                                        //checked={Address === {item.addessId}}                                                        
                                                        onChange={handleOnChange} />
                                                </td>
                                                <td>
                                                    {/* <div className="product-info"> */}
                                                    <p className='AddressText'>Name : {item.receiverName}, Phone Number : {item.receiverPhoneNumber}</p>
                                                    <p className='AddressText'>{item.buildingNo},{item.street1}, {item.city}</p>
                                                    <p className='AddressText'>{item.district},{item.state}, pin : {item.pincode}</p>
                                                    <p className='AddressText'></p>
                                                    {/* </div> */}
                                                </td>
                                            </div>
                                        </tr>
                                    ))
                                    }
                                </table>
                            </div>
                        </form>
                       
                        </div>
                    {/* </div> */}
                </div>



                <div className="d-flex align-items-start flex-column" >
                    {/* <div className="card mt-50 mb-50 ml-50"> */}
                    <div className='card2'>
                    {/* <a href="/addAddress">Add address</a> */}
                        {address.addressId ?
                            <div className="address-container">
                                <div className="addr">
                                    <h5>{address.receiverName}- {address.receiverPhoneNumber}</h5>
                                    <p>{address.buildingNo},{address.street1}</p>
                                    <p>{address.city},{address.district},{address.state}-{address.pincode}</p>
                                </div>
                            </div>
                            : <p><strong>Please Select Address</strong></p>
                        }
                        <form className='cashClass'>
                            <table className='addressTable2'>
                                <tr style={{ border: "2px solid black" }}>
                                    <td><img className="img-fluid" src="https://www.pngkit.com/png/full/332-3321940_wallet-icon-control-money-icon-png.png" /></td>
                                    <td> congrats you have  <strong >Rs.{balance}</strong> in wallet</td>
                                </tr>
                            </table>
                        </form>

                        <button className="btn btn-info mt-5" onClick={() => paymentFromCart()}>Proceed For payment</button>
                    </div>
                    {/* </div> */}

                </div>
            </div>

         </div >


    )
}

export default CheckoutComponent;