import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
import { AddressService } from '../../Services/AddressService';
import { useNavigate } from 'react-router-dom';
import "../../StyleSheets/Checkout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


function AddressSelectionCompoonent(props) {
    const [addNewAddress, setAddNewAddress] = useState(true)
    const [addressSuccesful, setAddressSuccesful] = useState(true)
    const [Name, setName] = useState('');
    const [ContactNumber, setContactNumber] = useState('');
    const [buildingNo, setBuildingNo] = useState('')
    const [Area, setArea] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [District, setDistrict] = useState('');
    const [Pincode, setPincode] = useState('');
    const email = localStorage.getItem("email");
    const handleClose1 = () => setAddAddress(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setAddNewAddress(false)
        AddressService.addNewAddress({
            userName: localStorage.getItem("email"),
            receiverName: Name,
            receiverPhoneNumber: ContactNumber,
            buildingNo: buildingNo,
            street1: Area,
            city: City,
            district: District,
            state: State,
            pincode: Pincode
        }).then((response) => {
            console.log(response.data)
            let id = response.data;


            navigate(`/paymentPage/${email}/${id}`);
            handleClose1();

            window.location.reload(false)


        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        })
        console.log(Name, ContactNumber, Area, City, State, District, Pincode);
        console.log(place);



    }

    const handleAddress = (e) => {
        const { id, value } = e.target;
        if (id === "Name") {
            setName(value)
        }
        if (id === "ContactNumber") {
            setContactNumber(value)
        }
        if (id === "buildingNo") {
            setBuildingNo(value)
        }
        if (id === "Area") {
            setArea(value)
        }
        if (id === "City") {
            setCity(value)
        }
        if (id === "State") {
            setState(value)
        }
        if (id === "District") {
            setDistrict(value)
        }
        if (id === "Pincode") {
            setPincode(value)
        }
    }

    const handleAddressCancel = (e) => {
        setAddNewAddress(false)
    }




    const [show, setShow] = useState(false);
    const [addAddress, setAddAddress] = useState(false);
    const handleClose = () => setShow(false);


    const [isChecked, setIsChecked] = useState(false);
    const [addressList, setAddressList] = useState([]);
    const [id, setId] = useState();

    const navigate = useNavigate();
    const name = props.email;
    const coupon = props.promoCode;
    console.log(coupon);

    const place = "checkout";
    // console.log(name);

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
                {/* <FontAwesomeIcon icon={faMoneyCheckPen} /> */}
                <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={() => iconClick()} />
                {/* <button className='btn btn-warning ml-5 mt-4'>change</button> */}
            </div>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90"
                aria-labelledby="example-custom-modal-styling-title"
            >
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
                                                            //checked={Address === {item.addessId}}                                                        
                                                            onChange={handleOnChange} />
                                                    </td>
                                                    <td>
                                                        {/* <div className="product-info"> */}
                                                        <p className='AddressText'>Reciever Name : {item.receiverName}</p>
                                                        <p className='AddressText'> Phone Number : {item.receiverPhoneNumber}</p>
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
                    </div>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                        <button className='btn btn-info' onClick={() => nextPage()}>
                            save
                        </button>
                        <button className='btn btn-warning ml-5' onClick={AddAddressfuncton}>
                            Add address
                        </button>

                    </Modal.Footer>

                </Modal.Body>
            </Modal>
            <Modal
                show={addAddress}
                onHide={() => setAddAddress(false)}
                dialogClassName="modal-lg"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Add New Address
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='addingAdressInModel'>
                        <div>
                            {addNewAddress &&
                                <form className="addr-form">
                                    <div className="add-address-container">
                                        <div>
                                            <label htmlFor="Name" className="texted">Name </label><br />
                                            <input value={Name} onChange={(e) => handleAddress(e)} placeholder="Name" type="text" id="Name" /><br />
                                            <label htmlFor="ContactNumber" className="texted">ContactNumber</label><br />
                                            <input value={ContactNumber} onChange={(e) => handleAddress(e)} placeholder="10-digit number" type="text" id="ContactNumber" required /><br />
                                            <label htmlFor="buildingNo" className="texted">BuildingNo</label><br />
                                            <input value={buildingNo} onChange={(e) => handleAddress(e)} placeholder="buildingNo" type="text" id="buildingNo" required /><br />
                                            <label htmlFor="Area" className="texted">Area</label><br />
                                            <input value={Area} onChange={(e) => handleAddress(e)} placeholder="Area" type="text" id="Area" required /><br />
                                        </div>
                                        <div>
                                            <label htmlFor="City" className="texted">City</label><br />
                                            <input value={City} onChange={(e) => handleAddress(e)} placeholder="City" type="text" id="City" required /><br />
                                            <label htmlFor="State" className="texted" >State</label><br />
                                            <input value={State} onChange={(e) => handleAddress(e)} placeholder="State" type="text" id="State" required /><br />
                                            <label htmlFor="District" className="texted" >District</label><br />
                                            <input value={District} onChange={(e) => handleAddress(e)} placeholder="District" type="text" id="District" required /><br />
                                            <label htmlFor="Pincode" className="texted" >Pincode</label><br />
                                            <input value={Pincode} onChange={(e) => handleAddress(e)} placeholder="Pincode" type="text" id="Pincode" required /><br />
                                        </div>
                                    </div>
                                    <div className="btn-container m-2">
                                        <button className="btn btn-success m-2" onClick={(e) => { handleSubmit(e) }}>save</button>
                                        <button className="btn btn-warning m-2" onClick={(e) => { handleAddressCancel(e) }}>cancel</button>
                                    </div>
                                </form>
                            }
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

