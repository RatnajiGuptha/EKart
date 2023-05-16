import React, { useEffect, useState } from "react";
import FashionProductService from "../../Services/FashionProductService";
import { Link } from "react-router-dom";
import "../../StyleSheets/products.css";


const FashionProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        FashionProductService.getAllProducts().then((response) => {
            console.log(response);
            setProducts(response.data);
        });
    }

    return (
        <div className="cards-container">
            {products.map((item) => {
                return (
                    <Link to={`/fashion/${item.fashionId}`} className="link" id={item.productId}>
                        <div key={item.productId} className="cards-row">
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

export default FashionProducts;


