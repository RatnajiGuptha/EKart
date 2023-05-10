import React, { useEffect, useState } from "react";
import ProductService from "../../Services/ProductService";
import { Link } from "react-router-dom";
import "../../StyleSheets/products.css";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getAllProducts().then((response) => {
            console.log(response);
            setProducts(response.data);
        });
    }, []);

    return (
        <div className="cards-container">
            {products.map((item) => {
                return (
                    <div className="cards-row">
                        <div className="cards-tables">
                            <Link to={`/fashion/${item.id}`} id={item.id}>
                                <img className="images" src={item.image} />
                            </Link>
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

export default Products;



