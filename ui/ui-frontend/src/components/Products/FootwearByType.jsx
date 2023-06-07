import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {FootwearService} from "../../Services/FootwearService";
import "../../StyleSheets/products.css";


const FootwearByType = () => {
    const [footware, setFootwear] = useState([]);

    const { type } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FootwearService.getFootwearByType(type);
                console.log(response);
                setFootwear(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

    }, [type]);

    return (
        <div className="cards-container">
            {footware.map((item) => (
                <Link to={`/footwearBy/${type}/${item.footWearId}`} key={item.footWearId} className="link" id={item.footWearId}>
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

export default FootwearByType;