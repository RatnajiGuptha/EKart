import React, { useEffect, useState } from "react";
import ToysService from '../../Services/ToysService';
import { Link } from "react-router-dom";


const Toys = () => {
    const [toy, setToy] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        ToysService.getAllToys().then((response) => {
            console.log(response);
            setToy(response.data);
        });
    }

    return (
        <div className="cards-container">
            {toy.map((item) => {
                return (
                    <Link to={`/toys/${item.toyId}`} className="link" id={item.toyId}>
                        <div key={item.toyId} className="cards-row">
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
                );
            })}
        </div>

    );
}

export default Toys;