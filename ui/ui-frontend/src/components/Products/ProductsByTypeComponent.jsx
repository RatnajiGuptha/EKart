import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductService from "../../Services/ProductService";
import "../../StyleSheets/products.css";
import "../HomeTopPicks";

const ProductsByTypeComponent = () => {
    const [products, setProducts] = useState([]);

    const { type } = useParams();
    console.log(type)

    useEffect(() => {
        ProductService.getProdByType(type).then((response) => {
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
                    <div key={item.productId} className="cards-row">
                        <div className="cards-tables">
                            <Link to={`/fashion/${item.fashionId}`} id={item.productId}>
                                <img className="images" src={item.logoImg} />
                            </Link>
                            <div className="product-info">
                                <p className="cat">{item.type}</p>
                                <p className="title">{item.productName}</p>
                                <p className="price">Rs. {item.productPrice} /-</p>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>

    );


}

export default ProductsByTypeComponent;