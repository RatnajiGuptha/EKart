import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FashionProductService from "../../Services/FashionProductService";
import "../../StyleSheets/products.css";
import "../HomePagesComponents/FashionHomeFilter";

const FashionProductByCategory = () => {
    const [products, setProducts] = useState([]);

    const { type } = useParams();

    useEffect(() => {
        FashionProductService.getProdByType(type).then((response) => {
            console.log(type);
            console.log(response.data);
            setProducts(response.data);
        })
            .catch((error) => {
                console.log(error);
            });
    }, [type])


    return (
        <div className="cards-container">
            {products.map((item) => {
                return (
                    <Link to={`/fashion/${type}/${item.fashionId}`} className="link" id={item.productId}>
                        <div key={item.productId} className="cards-row">
                            <div className="cards-tables">
                                <img className="images" src={item.logoImg} alt="/" />
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

export default FashionProductByCategory;