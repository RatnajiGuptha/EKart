import { useState, useEffect, React } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserBalanceService } from '../../Services/UserBalanceService';
import { AddressService } from '../../Services/AddressService';
import { OrderService } from '../../Services/OrderService';
import AddressSelectionCompoonent from './AddressSelectionCompoonent';
import "../../StyleSheets/Checkout.css";

const CheckoutComponent = () => {
    var { userName, addressId, coupon } = useParams();

    console.log(userName);
    console.log(addressId);
    const navigate = useNavigate();
    const [purchaseOrder, setPurchaseOrder] = useState([]);
    const [balance, setBalance] = useState(0);
    const [address, setAddress] = useState([]);
    const [addressList, setAddressList] = useState([]);
    const [defaultAddId, setDefaultAddId] = useState();


    console.log("defaultid : ", defaultAddId);
    console.log(addressList)

    useEffect(() => {
        UserBalanceService.getUserBalance(userName).then((Response) => {
            setBalance(Response.data);
            console.log("Balance", Response.data);
        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        });

        AddressService.getAllAddress(userName).then((Response) => {
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
    }, [userName, addressId, defaultAddId, navigate]);

    const Email = localStorage.getItem("userEmail");
    console.log("email", Email);
    console.log(address.addressId)

    const paymentFromCart = async () => {
        if (addressId === undefined) {
            addressId = defaultAddId;
        }
        await OrderService.createOrderForCart(userName, address.addressId, coupon, Email).then((Response) => {
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
                                    <AddressSelectionCompoonent userName={userName} promoCode={coupon} />
                                </div>
                            </div>
                        </div>
                        <form className='cashClass'>
                            <table className='addressTable2'>
                                <tr style={{ border: "2px solid black" }}>
                                    <td><img className="img-fluid" alt="/" src="https://www.pngkit.com/png/full/332-3321940_wallet-icon-control-money-icon-png.png" /></td>
                                    <td> congrats you have  <strong >Rs.{balance}</strong> in wallet</td>
                                </tr>
                            </table>
                        </form>

                        <button className="btn btn-info mt-3" onClick={() => paymentFromCart()}>Proceed For payment</button>
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