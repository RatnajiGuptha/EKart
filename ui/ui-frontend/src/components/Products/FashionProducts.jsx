import React, { useEffect, useState } from "react";
import FashionProductService from "../../Services/FashionProductService";
import { Link } from "react-router-dom";
import "../../StyleSheets/products.css";


const FashionProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FashionProductService.getAllProducts();
                console.log(response);
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);


    return (
        <div className="cards-container">
            {products.map((item) => (
                <Link to={`/fashion/${item.fashionId}`} key={item.fashionId} className="link" id={item.productId}>
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

export default FashionProducts;



