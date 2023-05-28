import React, { useEffect, useState } from "react";
import AccessoriesService from "../../Services/AccessoriesService";
import { Link, useParams } from "react-router-dom";

const AccessoriesByType = () => {
    const [accessories, setAccessories] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AccessoriesService.getAccessoriesByType(type);
                console.log(response.data);
                setAccessories(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [type]);

    return (
        <div className="cards-container">
            {accessories.map((item) => (
                <Link key={item.accessoryId} to={`/accessoriesBy/${type}/${item.accessoryId}`} className="link" id={item.accessoriesId}>
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

export default AccessoriesByType;