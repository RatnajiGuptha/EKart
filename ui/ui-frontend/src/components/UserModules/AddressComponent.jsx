import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddressService } from '../../Services/AddressService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import AddNewAddress from './AddNewAddressComponent';
import "../../StyleSheets/AddressPage.css";

const AddressComponent = () => {
    const [showAddNewAddress, setAddNewAddress] = useState(false);
    const [addressList, setAddressList] = useState([]);
    const navigate = useNavigate("")

    useEffect(() => {
        AddressService.getAllAddress(localStorage.getItem("username")).then((response) => {
            console.log(response.data.length);
            setAddressList(response.data);
        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        })
    }, [navigate])

    const toggleAddNewAddress = (event) => {
        setAddNewAddress(!showAddNewAddress);
        event.preventDefault();
    };
    const removeAddress = async (addressId) => {
        await AddressService.deleteAddress(addressId).then(() => {
            console.log("address deleted successfully")
            window.location.reload(false);
        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        })

    }
    return (
        <div className="address-contianer">
            <form className="form-contianer">
                <h3> Manage Address</h3>
                <div className="add-address-btn">
                    <button onClick={toggleAddNewAddress} className='btn'>
                        <FontAwesomeIcon icon={faEdit} />{" "}
                        <span> Add new address </span>      </button>
                    {showAddNewAddress && <AddNewAddress />}
                </div>
                <div className='address-card'>
                    {addressList.map((item) => (
                        <div className="address-info-container">
                            <ul className="list-unstyled">
                                <li>{item.receiverName}- {item.receiverPhoneNumber}</li>
                                <li>{item.buildingNo},{item.street1}</li>
                                <li>{item.city},{item.district},{item.state}-{item.pincode}</li>
                            </ul>
                            <div>
                                <button className='btn' onClick={() => removeAddress(item.addressId)}>
                                    <FontAwesomeIcon icon={faTrash} /> </button>
                            </div>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    )
}

export default AddressComponent;