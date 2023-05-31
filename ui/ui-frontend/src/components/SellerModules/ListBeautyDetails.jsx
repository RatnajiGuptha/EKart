import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeautyService from "../../Services/BeautyService";
import "../../StyleSheets/SellerModule.css"
function ListBeautyDetails() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        BeautyService.getBeautyBySellerName("Nivea pvt Ltd").then((res) => {
            console.log(res.data)
            setProducts(res.data);

        })
    }, [])
    return (
        <div>
            <br></br>
            <h2 className="text-center">Beauty Products List</h2>
            <div className="add-button">
                <Link to={`/addBeauty`}>
                    <button className="btn btn-primary"> Add Product</button>
                </Link>
            </div>
            <div className="row p-4">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Product Name</th>
                            <th> Product Image</th>
                            <th> Product Price</th>
                            <th>Brand Name</th>
                            <th>Type</th>
                            <th>Suitable For</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(function (item) {
                            return (
                                <tr key={item.beautyId}>
                                    <td> {item.productName}</td>
                                    <td><img src={item.logoImg} alt="/" className="img-seller"></img></td>
                                    <td>{item.productPrice}</td>
                                    <td>{item.brandName}</td>
                                    <td>{item.type}</td>
                                    <td>{item.suitablefor}</td>
                                    <td>{item.size}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                        <Link to={`/updateBeauty/${item.beautyId}`}>
                                            <button className="btn btn-info mt-0">Update </button>
                                        </Link>
                                    </td>

                                </tr>)

                        })}

                    </tbody>

                </table>
            </div>
        </div>











    )
}
export default ListBeautyDetails;