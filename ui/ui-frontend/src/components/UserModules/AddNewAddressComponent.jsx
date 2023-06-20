import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../StyleSheets/NewAddress.css";
import { AddressService } from "../../Services/AddressService";

function AddNewAddressComponent() {
    const [addNewAddress, setAddNewAddress] = useState(true);
    const [citys, setCitys] = useState([])
    const [selectCity, setSelectedCity] = useState("");
    const navigate = useNavigate();
    const citiess = []

    const [addressData, setAddressData] = useState({
        Name: "",
        ContactNumber: "",
        buildingNo: "",
        Area: "",
        City: "",
        State: "",
        District: "",
        Pincode: "",
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        setAddNewAddress(false);

        const pincodeData = await fetchPincodeData(addressData.Pincode);
        if (pincodeData) {
            setAddressData((prevData) => ({
                ...prevData,
                State: pincodeData.State,
                District: pincodeData.District,
            }));

            AddressService.addNewAddress({
                userName: localStorage.getItem("username"),
                receiverName: addressData.Name,
                receiverPhoneNumber: addressData.ContactNumber,
                buildingNo: addressData.buildingNo,
                street1: addressData.Area,
                city: selectCity,
                district: pincodeData.District,
                state: pincodeData.State,
                pincode: addressData.Pincode,
            }).then((response) => {
                console.log(response.data);
            }).catch((err) => {
                if (err.response.status === 401) {
                    console.log(err.response.data);
                    navigate("/login");
                    localStorage.clear();
                }
            });

            console.log(addressData.Name, addressData.ContactNumber, addressData.Area, pincodeData.City, pincodeData.State, pincodeData.District, addressData.Pincode);
            window.location.reload(false);
        }
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
                    City: pincodeData.City,
                    State: pincodeData.State,
                    District: pincodeData.District,
                }));
            }
        }
    };

    const handleAddressCancel = () => {
        setAddNewAddress(false);
    };

    const handleSelectCity = (e) => {
        setSelectedCity(e.target.value);
    }

    const fetchPincodeData = async (pincode) => {
        try {
            const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = response.data[0];
            console.log(data)
            if (data.Status === "Success") {
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
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log("cityes ---> ", citys);
    console.log(selectCity)
    return (
        <div className="mb-3">
            {addNewAddress && (
                <div className="addr-form">
                    <div className="add-address-container">
                        <div>
                            <label htmlFor="Name"> Name <br />
                                <input value={addressData.Name} onChange={handleAddress} placeholder="Name" type="text" id="Name" /></label>
                            <br />

                            <label htmlFor="ContactNumber"> Contact Number <br />
                                <input value={addressData.ContactNumber} onChange={handleAddress} placeholder="Contact Number" type="number" id="ContactNumber" />
                            </label>
                            <br />

                            <label htmlFor="buildingNo"> Street Name  <br />
                                <input value={addressData.buildingNo} onChange={handleAddress} placeholder="Street Name" type="text" id="buildingNo" />
                            </label>
                            <br />

                            <label htmlFor="Area"> LandMark <br />
                                <input value={addressData.Area} onChange={handleAddress} placeholder="LandMark" type="text" id="Area" />
                            </label>
                            <br />
                        </div>

                        <div>
                            <label htmlFor="Pincode"> Pincode <br />
                                <input value={addressData.Pincode} onChange={handleAddress} placeholder="Pincode" type="text" id="Pincode" />
                            </label>
                            <br />

                            <label htmlFor="City"> City <br />

                                <select onChange={handleSelectCity}>
                                    <option>Select City</option>
                                    {citys.map((city) =>
                                        <option> {city}</option>
                                    )}
                                </select>


                                {/* <input value={addressData.City} placeholder="City" type="text" id="City" /> */}
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
                </div>
            )}
        </div>
    );
}

export default AddNewAddressComponent;
