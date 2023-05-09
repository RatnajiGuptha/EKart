import React, { useEffect, useState } from "react";
import ProductService from "../../Services/ProductService";
import "../../StyleSheets/products.css";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getAllProducts().then((response) => {
            console.log(response);
            setProducts(response.data);
        });
    }, []);

    const rows = []
    let currentRow = [];

    for (let i = 0; i < products.length; i++) {
        currentRow.push(products[i])
        if (currentRow.length === 5 || i === products.length - 1) {
            rows.push(currentRow);
            currentRow = [];
        }
    }

    return (
        <div className="cards-container">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="cards-row">
                    {row.map((item, itemIndex) =>
                        <div key={itemIndex} className="cards-tables">
                            <img className="images" src={item.image} alt="/" />
                            <div className="product-info">
                                <p className="cat">{item.category}</p>
                                <p className="title">{item.title}</p>
                                <p className="price">Rs. {item.price} /-</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>

    )

}

export default Products;



