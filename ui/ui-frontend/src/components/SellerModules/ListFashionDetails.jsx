import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FashionProductService from "../../Services/FashionProductService";
import "../../StyleSheets/SellerModule.css"
function ListFashionDetails() {
    const { fashionId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        FashionProductService.getFashionProductsBySellerName("Libas pvt Ltd").then((res) => {
            console.log(res.data)
            setProducts(res.data);
        })
    }, [])

    return (
        <div>
            <br></br>
            <h2 className="text-center">Fashion Products List</h2>
            <div className="add-button">
                <Link to={`/addFashion`}>
                    <button className="btn btn-primary"> Add Product</button>
                </Link>
            </div>
            <div className="row p-4">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
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
                        {products.map(function (item, i) {
                            return (
                                <tr key={item.fashionId}>
                                    <td>{i + 1}</td>
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
                                        <Link to={`/updateEmployee/${item.fashionId}`}>
                                            <button className="btn btn-info">Update </button>
                                        </Link>
                                        <br />
                                        <Link to={`/viewFashionDetails/${item.fashionId}`}>
                                            <button className="btn btn-secondary" style={{ marginTop: '10px', width: '78px' }}>View </button>
                                        </Link>
                                    </td >
                                </tr >)
                        })}
                    </tbody >

                </table >
            </div >
        </div >

    )
}
export default ListFashionDetails;