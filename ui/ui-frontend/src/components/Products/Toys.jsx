import React, { useEffect, useState } from "react";
import { ToysService } from '../../Services/ToysService';
import { Link } from "react-router-dom";
import "../../StyleSheets/products.css";


const Toys = () => {
    const [toy, setToy] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ToysService.getAllToys();
                console.log(response);
                setToy(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="cards-container">
            {toy.map((item) =>
            (
                <Link to={`/toys/${item.toyId}`} key={item.toyId} className="link" id={item.toyId}>
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

export default Toys;