import { React, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AddressService } from '../../Services/AddressService';
import { OrderService } from '../../Services/OrderService';
import { UserBalanceService } from '../../Services/UserBalanceService';
import AddressSelectionCompoonent from './AddressSelectionCompoonent';
import "../../StyleSheets/Checkout.css";

const CheckoutComponent = () => {
    const email = localStorage.getItem("email");
    var { addressId, coupon } = useParams();

    console.log(email);
    console.log(addressId);
    const navigate = useNavigate();
    const [purchaseOrder, setPurchaseOrder] = useState([]);
    const [balance, setBalance] = useState(0);
    const [address, setAddress] = useState([]);
    const [addressList, setAddressList] = useState([]);
    const [defaultAddId, setDefaultAddId] = useState();
    const [OTP, setOTP] = useState(0);
    const [userEnteredOTP, setUserEnteredOTP] = useState(0);
    const [errors, setErrors] = useState({});
    const [otpVerify, setOtpverify] = useState(false)


    console.log("defaultid : ", defaultAddId);
    console.log(addressList)

    useEffect(() => {
        UserBalanceService.getUserBalance(email).then((Response) => {
            setBalance(Response.data);
            console.log("Balance", Response.data);
        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        });

        AddressService.getAllAddress(email).then((Response) => {
            setAddressList(Response.data);
            console.log(Response.data);
            setDefaultAddId(Response.data[0].addressId);
        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        })

        if (addressId === undefined) {
            AddressService.getAddressById(defaultAddId).then((Response) => {
                console.log(Response.data);
                setAddress(Response.data);
            }).catch((err) => {
                if (err.response.status === 401) {
                    console.log(err.response.data)
                    navigate("/login")
                    localStorage.clear();
                }
            })
        }
        else {
            AddressService.getAddressById(addressId).then((Response) => {
                console.log(Response.data);
                setAddress(Response.data);
            }).catch((err) => {
                if (err.response.status === 401) {
                    console.log(err.response.data)
                    navigate("/login")
                    localStorage.clear();
                }
            })
        }
    }, [email, addressId, defaultAddId, navigate]);

    console.log("email", email);
    console.log(address.addressId)
    const generateOTP = async () => {
        const otp = await OrderService.generateOtp(email).then()
        setOTP(otp.data)
        setOtpverify(true)
    }

    console.log(OTP)
    const paymentFromCart = async () => {
        const newError = {}
        if (userEnteredOTP == OTP && otpVerify) {
            if (addressId === undefined) {
                addressId = defaultAddId;
            }
            await OrderService.createOrderForCart(address.addressId, coupon, email).then((Response) => {
                setPurchaseOrder(Response.data);
                console.log(purchaseOrder);
                return Response.data;
            }).then((data) => {
                console.log(data?.purchaseOrderId)
                console.log(data)
                console.log("...........receivedData.........");
                const i = data?.purchaseOrderId;
                navigate(`/orderStatus/${i}`);
            }).catch((err) => {
                if (err.response.status === 401) {
                    console.log(err.response.data)
                    navigate("/login")
                    localStorage.clear();
                }
            });
        }
        else {
            newError.OtpCheck = "Please enter OTP."
            setErrors(newError);
        }

    }

    return (
        <div className='paymentPage'>
            <div className="d-flex align-content-center flex">
                <div className="d-flex align-items-center flex-column" >
                    <div className='card2'>
                        <div className="address-container1">
                            <div className="d-flex align-content-center flex">
                                <div>
                                    {(addressId || defaultAddId) ?
                                        <div className="addr1">
                                            <p className='addressText2'>{address.receiverName}, {address.buildingNo}</p>
                                            <p className='addressText2'>{address.street1},{address.city}</p>
                                            <p className='addressText2'>{address.district},{address.state}</p>
                                            <p className='addressText2'>{address.receiverPhoneNumber}, Pin - {address.pincode},</p>
                                        </div>
                                        : <p>Add address Here</p>
                                    }
                                </div>
                                
                                <div>
                                    <AddressSelectionCompoonent email={email} promoCode={coupon} />
                                </div>
                            </div>
                        </div>

                        <form className='cashClass'>
                            <table className='addressTable2'>
                                <tr>
                                    <td><img className="img-fluid" alt="/" src="https://www.pngkit.com/png/full/332-3321940_wallet-icon-control-money-icon-png.png" /></td>
                                    <td> congrats you have  <strong >Rs.{balance}</strong> in wallet</td>
                                </tr>
                            </table>
                        </form>


                        <label className="otp-label">OTP
                            <input type="number" name='otp' placeholder="Enter OTP" onChange={(e) => { setUserEnteredOTP(e.target.value) }}></input>
                            <button className="btn btn-warning " style={{ margin: "0px 15px" }} onClick={() => generateOTP()} > Request OTP</button>
                        </label>

                        {errors.OtpCheck && <span>{errors.OtpCheck}</span>}

                        <div>
                            <button className="btn btn-info mt-3" onClick={() => paymentFromCart()}>Proceed For payment</button>
                        </div>
                    </div>

                </div>

                <div className="d-flex align-items-start flex-column" >
                    <div className='paymentGif'>
                        <img src='https://res.cloudinary.com/dmanaxtze/image/upload/v1686544328/ezgif-1-e4608c3f86_yb9poo.gif' alt='paymentgif'></img>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CheckoutComponent;
