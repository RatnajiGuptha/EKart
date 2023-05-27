import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FashionProductService from "../../Services/FashionProductService";

function ViewFashionDetails() {
    const [products, setProducts] = useState([]);
    const { fashionId } = useParams();

    useEffect(() => {
        FashionProductService.getProductById(fashionId).then((res) => {
            console.log(res.data);
            setProducts(res.data);
        })
    }, [])
    return (
        <div>
            <br></br>
            <div className="card col-md-4 offset-md-4">
                <h3 className="text-center heading"> View Fashion Details</h3>
                <hr className="horizantal"></hr>
                <div className="card-body">
                    <div className="row para">
                        <p> <b>Product Name:</b> {products.productName}</p>
                        <p> <b>Product Price:</b> {products.productPrice}</p>
                        <p> <b>Product Image:</b> <img src={products.logoImg} alt="/" className="view-image" /></p>
                        <p> <b>Brand Name:</b> {products.brandName}</p>
                        <p> <b>Type:</b> {products.type}</p>
                        <p> <b>Suitable For:</b> {products.suitableFor}</p>
                        <p> <b>Size:</b> {products.size}</p>
                        <p> <b>Color:</b> {products.color}</p>
                        <p> <b>Quantity:</b> {products.qty}</p>
                    </div>



                </div>

            </div>

        </div>

    )
}
export default ViewFashionDetails;