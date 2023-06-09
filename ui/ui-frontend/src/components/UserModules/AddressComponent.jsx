import React, { useEffect, useState } from 'react';
import AddNewAddress from './AddNewAddressComponent';
import {AddressService} from '../../Services/AddressService';
import "../../StyleSheets/AddressPage.css";

const AddressComponent = () => {
    const [showAddNewAddress, setAddNewAddress] = useState(false);
    const [addressList, setAddressList] = useState([]);


    useEffect(() => {
        AddressService.getAllAddress(localStorage.getItem("username")).then((response) => {
            console.log(response.data.length);
            setAddressList(response.data);


        })
    }, [])

    const toggleAddNewAddress = (event) => {
        setAddNewAddress(!showAddNewAddress);
        event.preventDefault();
    };
    const removeAddress = async (addressId) => {

        AddressService.deleteAddress(addressId);
        console.log("address deleted successfully")
        window.location.reload(false);
    }
    return (
        <div className="address-box">
            <form className="Manage">
                <h3 className='managess'> Manage Address</h3>
                <div className="qkYgWG">
                    <div>
                        <div className="addNew-address">
                            <button onClick={toggleAddNewAddress}>
                                <img height="18" width="18" alt="/" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMTc1RkYiIGQ9Ik0xMS4yNSA2Ljc1aC00LjV2NC41aC0xLjV2LTQuNUguNzV2LTEuNWg0LjVWLjc1aDEuNXY0LjVoNC41Ii8+PHBhdGggZD0iTS0zLTNoMTh2MThILTMiLz48L2c+PC9zdmc+" className="_1g8pEu" />
                                ADD A NEW ADDRESS
                            </button>
                            {showAddNewAddress && <AddNewAddress />}
                        </div>
                    </div>
                </div>
                {addressList.map((item) => (
                    <div className="address-container">

                        <div className="addr">
                            <h5>{item.receiverName}- {item.receiverPhoneNumber}</h5>
                            <p>{item.buildingNo},{item.street1}</p>
                            <p>{item.city},{item.district},{item.state}-{item.pincode}</p>
                        </div>
                        <p className='remove-address' onClick={() => removeAddress(item.addressId)}>
                            delete
                        </p>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default AddressComponent;