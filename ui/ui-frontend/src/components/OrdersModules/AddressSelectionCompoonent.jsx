import { useState, useEffect } from 'react';
import { AddressService } from '../../Services/AddressService';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import AddNewAddressComponent from '../UserModules/AddNewAddressComponent';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../StyleSheets/Checkout.css";


function AddressSelectionCompoonent(props) {
    const [addNewAddress, setAddNewAddress] = useState(true)
    const [show, setShow] = useState(false);
    const [addAddress, setAddAddress] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [addressList, setAddressList] = useState([]);
    const [id, setId] = useState();

    const navigate = useNavigate();
    const name = props.email;
    const coupon = props.promoCode;
    console.log(coupon);


    const handleClose1 = () => {
        setAddAddress(false);
        window.location.reload(false)
    }

    const handleClose = () => {
        setShow(false);
        window.location.reload(false)
    }

    useEffect(() => {
        AddressService.getAllAddress(name).then((Response) => {
            setAddressList(Response.data);
            // console.log(Response.data);
        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        });
    }, [name, navigate]);



    const handleOnChange = (e) => {
        console.log(e.target.value);
        setIsChecked(!isChecked);
        console.log(isChecked);

        // let i = e.target.value;
        setId(e.target.value);
        console.log(id);
        // recievingAddress(e.target.value);
    };
    //  console.log(id);

    const nextPage = () => {
        navigate(`/paymentPage/${name}/${id}/${coupon}`);
        setShow(false);
    }

    const AddAddressfuncton = () => {
        setShow(false);
        setAddAddress(true);
    }
    const iconClick = () => {
        setShow(true);
        setAddNewAddress(true);
    }

    return (
        <>
            <div className='changeBtn'>
                <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={() => iconClick()} />
            </div>

            <Modal show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90"
                aria-labelledby="example-custom-modal-styling-title" >

                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Select Delivery Address
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-start flex-column" style={{ height: 300 }}>
                        <div className='card1' style={{ overflowY: "scroll" }}>
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
                                                            onChange={handleOnChange} />
                                                    </td>
                                                    <td>
                                                        <p className='AddressText'>Reciever Name : {item.receiverName}</p>
                                                        <p className='AddressText'> Phone Number : {item.receiverPhoneNumber}</p>
                                                        <p className='AddressText'>{item.buildingNo},{item.street1}, {item.city}</p>
                                                        <p className='AddressText'>{item.district},{item.state}, pin : {item.pincode}</p>
                                                        <p className='AddressText'></p>
                                                    </td>
                                                </div>
                                            </tr>
                                        ))}
                                    </table>
                                </div>
                            </form>


                        </div>
                    </div>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>    Close</Button>
                        <button className='btn btn-info' onClick={() => nextPage()}>    save</button>
                        <button className='btn btn-warning ml-5' onClick={AddAddressfuncton}>    Add address</button>
                    </Modal.Footer>

                </Modal.Body>

            </Modal>

            <Modal show={addAddress}
                onHide={() => setAddAddress(false)}
                dialogClassName="modal-lg"
                aria-labelledby="example-custom-modal-styling-title"            >

                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Add New Address
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='addingAdressInModel'>
                        <div>
                            {addNewAddress && <AddNewAddressComponent />}
                        </div>
                    </div>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal.Body>
            </Modal>
        </>
    );
}


export default AddressSelectionCompoonent

