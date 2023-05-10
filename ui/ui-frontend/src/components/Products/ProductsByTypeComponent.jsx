import React, { useEffect, useState } from "react";
import ProductService from "../../Services/ProductService";
import "../../StyleSheets/products.css";
import "../HomeTopPicks";

const ProductsByTypeComponent = ({ type }) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        ProductService.getProdByType().then((response) => {
            console.log(type);
            // console.log(response.data);
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
                    <div key={item.id} className="cards-row">
                        <div className="cards-tables">
                            <img className="images" src={item.image} />
                            <div className="product-info">
                                <p className="cat">{item.category}</p>
                                <p className="title">{item.title}</p>
                                <p className="price">Rs. {item.price} /-</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

    );


}

export default ProductsByTypeComponent;