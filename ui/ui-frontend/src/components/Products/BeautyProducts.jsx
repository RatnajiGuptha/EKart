import React, { useEffect, useState } from "react";
import {BeautyService} from "../../Services/BeautyService";
import { Link } from "react-router-dom";
import "../../StyleSheets/products.css";

const BeautyProducts = () => {
    const [beautyProducts, setBeautyProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await BeautyService.getAllBeautyProducts();
                console.log(response.data);
                setBeautyProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);


    return (
        <div className="cards-container">
            {beautyProducts.map((item) => (
                <Link to={`/beauty/${item.beautyId}`} key={item.beautyId} className="link" id={item.beautyId}>
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

export default BeautyProducts;