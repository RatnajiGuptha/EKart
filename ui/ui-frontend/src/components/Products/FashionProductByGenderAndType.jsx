import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FashionProductService from "../../Services/FashionProductService";
import "../../StyleSheets/products.css";


const FashionProductByGender = () => {
    const [products, setProducts] = useState([]);

    const { suitablefor, type } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FashionProductService.getProductByGenderAndType(suitablefor, type);
                console.log(response.data);
                setProducts(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [suitablefor,type])


    return (
        <div className="cards-container">
            {products.map((item) => (
                <Link to={`/fashionBy/suitablefor/${suitablefor}/${type}/id/${item.fashionId}`} key={item.fashionId} className="link" id={item.productId}>
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

export default FashionProductByGender;