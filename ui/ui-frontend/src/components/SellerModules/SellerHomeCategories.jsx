import React from "react";
import "../../StyleSheets/SellerModule.css";
import { Link } from "react-router-dom";

function SellerHomeCategories() {
    return (
        <div>
            <div className="seller-card-container">
                <div className="cards-tables">
                    <Link to={`/listFashionProducts`} className="link">
                        <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1685341275/t-shirts2_pidu9m.png"
                            alt="/" className="seller-card-image" />
                        <h3 className="product-info">Fashion</h3>
                    </Link>
                </div>

                <div className="cards-tables">
                    <Link to={`/listAccessoriesProducts`} className="link">
                        <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1685341275/seller_accessories_hxwyuy.jpg"
                            alt="/" className="seller-card-image" />
                        <h3 className="product-info">Accessories</h3>
                    </Link>
                </div>

                <div className="cards-tables">
                    <Link to={`/listBeautyProducts`} className="link">
                        <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1685343020/beauty_icon_etuyyq.webp"
                            alt="/" className="seller-card-image" />
                        <h3 className="product-info">Beauty</h3>
                    </Link>
                </div>
            </div>
            <div className="seller-card-container">
                <div className="cards-tables">
                    <Link to={`/listElectronicProducts`} className="link">
                        <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1685343021/electronics_icon_xak6yx.png"
                            alt="/" className="seller-card-image" />
                        <h3 className="product-info">Electronics</h3>
                    </Link>
                </div>

                <div className="cards-tables">
                    <Link to={`/listFootWearProducts`} className="link">
                        <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1685343501/footwear1_qhqqhh.jpg"
                            alt="/" className="seller-card-image" />
                        <h3 className="product-info">Footwear</h3>
                    </Link>
                </div>

                <div className="cards-tables">
                    <Link to={`/listToysProducts`} className="link">
                        <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1685343022/toys_icon_iyugol.jpg"
                            alt="/" className="seller-card-image" />
                        <h3 className="product-info">Toys</h3>
                    </Link>
                </div>
            </div>
        </div>


    )
}
export default SellerHomeCategories;