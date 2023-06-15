import React, { useState } from "react";
import { AddressService } from "../../Services/AddressService";
import { useNavigate } from "react-router-dom";
import "../../StyleSheets/NewAddress.css";
const AddNewAddressComponent = () => {

    const [addNewAddress, setAddNewAddress] = useState(true)
    const [Name, setName] = useState('');
    const [ContactNumber, setContactNumber] = useState('');
    const [buildingNo, setBuildingNo] = useState('')
    const [Area, setArea] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [District, setDistrict] = useState('');
    const [Pincode, setPincode] = useState('');
    const navigate = useNavigate("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setAddNewAddress(false)
        AddressService.addNewAddress({
            userName: localStorage.getItem("username"),
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
        }).catch((err) => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        })
        console.log(Name, ContactNumber, Area, City, State, District, Pincode);
        window.location.reload(false)
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
    return (
        <div className="mb-3">
            {addNewAddress &&
                <form className="addr-form">
                    <div className="add-address-container">
                        <div>
                            <label htmlFor="Name" className="texted">Name </label><br />
                            <input value={Name} onChange={(e) => handleAddress(e)} placeholder="Name" type="text" id="Name"/><br />
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

    );
};

export default AddNewAddressComponent;
