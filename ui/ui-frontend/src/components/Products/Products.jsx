import React, { useEffect, useState } from "react";
import ProductService from "../Services/ProductService";


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ProductService.getAllProducts().then((response) => {
            console.log(response);
            setProducts(response.data);
        }, []);

    });


    return (
        <div>
            {products.map((item) => {
                return (
                    <div>
                        <div>
                            <img className="image_link" src={item.image} alt="/"></img>
                            <div className="sub1-card">
                                <div>
                                    <p>{item.title}</p>
                                </div>
                                <div>
                                    <p>{item.price}</p>
                                </div>
                                {/* <p>{item.description}</p> */}
                                <div>
                                    <p>{item.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            })}

        </div>

    );

};



export default Products;