import React, { useEffect, useState } from "react";
import BeautyService from "../../Services/BeautyService";
import { Link } from "react-router-dom";


const BeautyProducts = () => {
    const [beautyProducts, setBeautyProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        BeautyService.getAllBeautyProducts().then((response) => {
            console.log(response);
            setBeautyProducts(response.data);
        });
    }

    return (
        <div className="cards-container">
            {beautyProducts.map((item) => {
                return (
                    <Link to={`/beauty/${item.beautyId}`} className="link" id={item.beautyId}>
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

export default BeautyProducts;