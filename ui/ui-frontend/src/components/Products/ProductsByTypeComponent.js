import React, { useEffect, useState } from "react";
import ProductService from "../../Services/ProductService";
import "../../StyleSheets/products.css";

const ProductsByTypeComponent = (props) => {
    const [products, setProducts] = useState([]);
    const [type, setType] = useState('')
    
    console.log(props.info);
    useEffect(() => {
       
        getProducts(type);
       // console.log(props.type);
    }, []);

    const getProducts = (type) => {
        ProductService.getProdByType("KurthaSets").then((response) => {
            console.log(response.data);
            setProducts(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

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
                            <img className="images" src={item.logoImg} alt="/" />
                            <div className="product-info">
                                <p className="cat">{item.type}</p>
                                <p className="title">{item.productName}</p>
                                <p className="price">Rs. {item.productPrice} /-</p>
                                {/* <input type="text"value={props.info}></input> */}
                            </div>
                        </div>
                    )}

                </div>
            ))}
        </div>

    )

}

export default ProductsByTypeComponent;