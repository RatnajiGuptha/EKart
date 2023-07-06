import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AddressService } from "../../Services/AddressService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../StyleSheets/NewAddress.css";

function AddNewAddressComponent() {
    const [addNewAddress, setAddNewAddress] = useState(true);

    const [citys, setCitys] = useState([])
    const [selectCity, setSelectedCity] = useState("");
    const citiess = []

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const [addressData, setAddressData] = useState({
        Name: "",
        ContactNumber: "",
        buildingNo: "",
        Area: "",
        City: selectCity,
        State: "",
        District: "",
        Pincode: "",
    });

    const validateAddress = async () => {
        let valid = true;
        const newError = {}
        console.log(addressData)
        if (addressData.Name.trim().length <= 4) {
            newError.name = "Name should have at least 5 characters";
            valid = false;
        } else if (!/^[a-zA-Z ]+$/.test(addressData.Name)) {
            newError.name = "Invalid name";
            valid = false;
        }

        if (addressData.ContactNumber.trim().length !== 10) {
            newError.ContactNumber = "Mobile number should have 10 digits";
            valid = false;
        } else if (!/^[0-9]+$/.test(addressData.ContactNumber)) {
            newError.ContactNumber = "Mobile number should have 10 digits";
            valid = false;
        }

        if (!addressData.buildingNo.trim().length >= 1) {
            newError.buildingNo = "Enter a valid street name";
            valid = false;
        } else if (!/^[a-zA-Z 0-9/\\.:]+$/.test(addressData.buildingNo)) {
            newError.buildingNo = "Invalid Building No";
            valid = false;
        }

        if (!addressData.Area.trim().length > 1) {
            newError.Area = "Enter a valid land Mark";
            valid = false;
        } else if (!/^[a-zA-Z ]+$/.test(addressData.Area)) {
            newError.landMark = "Invalid land mark";
            valid = false;
        }

        if (!addressData.Pincode.trim().length === 6) {
            newError.Pincode = "Enter a valid pincode";
            valid = false;
        } else if (!/^[1-9][0-9]{5}$/.test(addressData.Pincode)) {
            newError.Pincode = "Enter a valid pincode";
            valid = false;
        }

        setErrors(newError);
        toast.error("Check the required fields");
        return valid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (await validateAddress()) {
            await AddressService.addNewAddress({
                email: localStorage.getItem("email"),
                receiverName: addressData.Name,
                receiverPhoneNumber: addressData.ContactNumber,
                buildingNo: addressData.buildingNo,
                street1: addressData.Area,
                city: selectCity,
                district: addressData.District,
                state: addressData.State,
                pincode: addressData.Pincode,
            }).then((response) => {
                console.log(response.data);
                window.location.reload(false);
            }).catch((err) => {
                if (err.response.status === 401) {
                    console.log(err.response.data);
                    navigate("/login");
                    localStorage.clear();
                }
            });
            setAddNewAddress(false);
        }

        console.log(addressData.Name, addressData.ContactNumber, addressData.Area, selectCity, addressData.State, addressData.District, addressData.Pincode);

    };

    const handleAddress = async (e) => {
        const { id, value } = e.target;
        setAddressData((prevData) => ({
            ...prevData,
            [id]: value,
        }));

        if (id === "Pincode") {
            const pincodeData = await fetchPincodeData(value);
            if (pincodeData) {
                setAddressData((prevData) => ({
                    ...prevData,
                    State: pincodeData.State,
                    District: pincodeData.District,
                }));
            }
        }
    };

    console.log(addressData)

    const handleAddressCancel = () => {
        setAddNewAddress(false);
        window.location.reload(false)
    };

    const handleSelectCity = (e) => {
        setSelectedCity(e.target.value);
    }
    console.log(selectCity)

    const fetchPincodeData = async (pincode) => {

        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
        const data = response.data[0];
        console.log(data)
        if (data.Status === "Error") {
            const newError = {}
            newError.Pincode = "Enter a valid pincode"
            setErrors(newError);
        }
        else if (data.Status === "Success") {
            setErrors({})
            const cities = response.data[0].PostOffice;
            for (let i = 0; i < cities.length; i++) {
                const city = cities[i].Name;
                citiess.push(city);
            }
            setCitys(citiess);
            console.log(citiess)
            const locationData = {
                State: data.PostOffice[0].State,
                District: data.PostOffice[0].District,
            };
            return locationData;
        } else if (data.Status === "404") {
            await validateAddress()
        }



    };

    console.log(selectCity)



    return (
        <div className="mb-3">
            {addNewAddress && (
                <div className="addr-form">
                    <div className="add-address-container">

                        <div>
                            <label htmlFor="Name"> Name <br />
                                <input value={addressData.Name} onChange={handleAddress} placeholder="Name" type="text" id="Name" />
                                <br />
                                {errors.name && <span>{errors.name}</span>}
                            </label>
                            <br />

                            <label htmlFor="ContactNumber"> Contact Number <br />
                                <input value={addressData.ContactNumber} onChange={handleAddress} placeholder="Contact Number" type="number" id="ContactNumber" />
                                <br />
                                {errors.ContactNumber && <span>{errors.ContactNumber}</span>}
                            </label>
                            <br />

                            <label htmlFor="buildingNo"> Street Name  <br />
                                <input value={addressData.buildingNo} onChange={handleAddress} placeholder="Street Name" type="text" id="buildingNo" />
                                <br />
                                {errors.buildingNo && <span>{errors.buildingNo}</span>}
                            </label>
                            <br />

                            <label htmlFor="Area"> LandMark <br />
                                <input value={addressData.Area} onChange={handleAddress} placeholder="LandMark" type="text" id="Area" />
                                <br />
                                {errors.landMark && <span>{errors.landMark}</span>}
                            </label>
                            <br />
                        </div>
                        <div>

                            <label htmlFor="Pincode"> Pincode <br />
                                <input value={addressData.Pincode} onChange={handleAddress} placeholder="Pincode" type="text" id="Pincode" />
                                <br />
                                {errors.Pincode && <span>{errors.Pincode}</span>}
                            </label>
                            <br />

                            <label htmlFor="City"> City <br />

                                <select onChange={handleSelectCity}>
                                    <option>Select City</option>
                                    {citys.map((city) =>
                                        <option> {city}</option>)}
                                </select>

                            </label>
                            <br />

                            <label htmlFor="District"> District <br />
                                <input value={addressData.District} placeholder="District" type="text" id="District" />
                            </label>
                            <br />

                            <label htmlFor="State"> State <br />
                                <input value={addressData.State} placeholder="State" type="text" id="State" />
                            </label>
                            <br />

                        </div>
                    </div>
                    <div className="btn-container m-2">
                        <button type="submit" className="btn btn-success m-2" onClick={handleSubmit}> Save</button>
                        <button type="button" className="btn btn-warning m-2" onClick={handleAddressCancel}>  Cancel</button>
                    </div>
                    <ToastContainer />
                </div>
            )}
        </div>
    );
}

export default AddNewAddressComponent;
