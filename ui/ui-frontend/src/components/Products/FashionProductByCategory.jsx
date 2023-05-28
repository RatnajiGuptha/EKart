import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FashionProductService from "../../Services/FashionProductService";
import "../../StyleSheets/products.css";

const FashionProductByCategory = () => {
    const [products, setProducts] = useState([]);

    const { type } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FashionProductService.getProdByType(type);
                console.log(response.data);
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [type])

    return (
        <div className="cards-container">
            {products.map((item) => (
                <Link to={`/fashion/${type}/${item.fashionId}`} key={item.fashionId} className="link" id={item.productId}>
                    <div className="cards-row">
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
            ))}
        </div>

    );


}

export default FashionProductByCategory;