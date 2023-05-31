import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../StyleSheets/products.css";
import ElectronicsService from "../../Services/ElectronicsService";
import "../../StyleSheets/products.css";

const ElectronicProductsByCategory = () => {
    const [electronicsproducts, setElectronicsProducts] = useState([]);

    const { type } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ElectronicsService.getElectronicsByType(type);
                console.log(response.data);
                setElectronicsProducts(response.data)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [type]);

    return (
        <div className="cards-container">
            {electronicsproducts.map((item) => (
                <Link to={`/electronicsBy/${type}/${item.electronicsId}`} className="link" key={item.electronicsId} id={item.electronicsId}>
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

export default ElectronicProductsByCategory;