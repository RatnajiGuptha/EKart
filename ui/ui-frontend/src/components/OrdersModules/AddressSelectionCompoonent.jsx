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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [isChecked, setIsChecked] = useState(false);
    const [addressList, setAddressList] = useState([]);
    const [id, setId] = useState();

    const navigate = useNavigate();
    const name = props.userName;
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
    },);



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
        navigate(`/paymentPage/${name}/${id}`);
        setShow(false);
    }


    return (
        <>
            <div className='changeBtn'>
                {/* <FontAwesomeIcon icon={faMoneyCheckPen} /> */}
                <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={() => setShow(true)} />
                {/* <button className='btn btn-warning ml-5 mt-4'>change</button> */}
            </div>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
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

                    </Modal.Footer>

                </Modal.Body>
            </Modal>
        </>
    );
}


export default AddressSelectionCompoonent