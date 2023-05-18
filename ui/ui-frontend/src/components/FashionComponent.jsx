import React, { useState } from "react";
import "../StyleSheets/Fashion.css";
import { Link } from "react-router-dom";

const FashionComponent = () => {
    return (

        <div className="fluid-container">
           
            <div className="d-flex flex-row justify-content-center">
                <div className="fashion-card-container">
                    <Link to="/fashionBy/Male" className="link">
                        <div>
                            <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684305667/fashion_men_shirt_muzop0.png"
                                alt="/" className="fashion-card-image" />
                            <h3>Mens Wear</h3>
                        </div>
                    </Link>
                    <Link to="/fashionBy/Female" className="link">
                        <div>
                            <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684321476/fashion_women2_r132ol.png"
                                alt="/" className="fashion-card-image" />
                            <h3>Womens Wear</h3>
                        </div>
                    </Link>
                    <Link to="/fashionByType/KidsWear" className="link">
                        <div>
                            <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684305644/fashion_kids1.1_lu6pfz.png"
                                alt="/" className="fashion-card-image" />
                            <h3>Kids Wear</h3>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default FashionComponent;