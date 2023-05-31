import React, { useEffect, useState } from "react";
import ElectronicsService from '../../Services/ElectronicsService';
import { Link } from "react-router-dom";
import "../../StyleSheets/products.css";

const ElectronicsProducts = () => {
    const [electronicsProducts, setElectronicsProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ElectronicsService.getAllElctronicProducts();
                console.log(response.data);
                setElectronicsProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="cards-container">
            {electronicsProducts.map((item) => (
                <Link to={`/electronics/${item.electronicsId}`} key={item.electronicsId} className="link" id={item.electronicsId}>
                    <div className="cards-row">
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
            ))}
        </div>

    );
}

export default ElectronicsProducts;