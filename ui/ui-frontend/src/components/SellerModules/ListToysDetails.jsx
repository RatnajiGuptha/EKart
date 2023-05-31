import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../StyleSheets/SellerModule.css"
import ToysService from "../../Services/ToysService";
function ListFashionDetails() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ToysService.getToysBySellerName("Baby Moo pvt Ltd").then((res) => {
            console.log(res.data)
            setProducts(res.data);
        })
    }, [])

    return (
        <div>
            <br></br>
            <h2 className="text-center">Toys Products List</h2>
            <div className="add-button">
                <Link to={`/addToys`}>
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
                            <th>Color</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(function (item) {
                            return (
                                <tr key={item.toyId}>
                                    <td> {item.productName}     </td>
                                    <td><img src={item.logoImg} alt="/" className="img-seller"></img></td>
                                    <td>{item.productPrice}</td>
                                    <td>{item.brandName}</td>
                                    <td>{item.type}</td>
                                    <td>{item.suitablefor}</td>
                                    <td>{item.size}</td>
                                    <td>{item.color}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                        <Link to={`/updateToys/${item.toyId}`}>
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
export default ListFashionDetails;