import React, { useEffect, useState } from "react";
import AccessoriesService from "../../Services/AccessoriesService";
import { Link } from "react-router-dom";


const Accessories = () => {
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        AccessoriesService.getAllAccessories().then((response) => {
            console.log(response);
            setAccessories(response.data);
        });
    }

    return (
        <div className="cards-container">
            {accessories.map((item) => {
                return (
                    <Link to={`/accessories/${item.accessoryId}`} className="link" id={item.accessoriesId}>
                        <div key={item.Id} className="cards-row">
                            <div className="cards-tables">
                                <img className="images" src={item.logoImg} alt='/' />
                                <div className="product-info">
                                    <p className="cat">{item.type}</p>
                                    <p className="title">{item.productName}</p>
                                    <p className="price">₹ {item.productPrice} /-</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>

    );
}

export default Accessories;