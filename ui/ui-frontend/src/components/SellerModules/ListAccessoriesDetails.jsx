import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "../../StyleSheets/SellerModule.css"
import { AccessoriesService } from "../../Services/AccessoriesService";
function ListAccessoriesDetails() {

    const [products, setProducts] = useState([]);
    const userName = localStorage.getItem("name");
    const navigate=useNavigate('');

    useEffect(() => {
        AccessoriesService.getAccessoriesProductsBySellerName(userName).then((res) => {
            console.log(res.data)
            setProducts(res.data);
        })
        .catch(err => {
            if (err.response.status === 401) {
                console.log(err.response.data)
                navigate("/login")
                localStorage.clear();
            }
        })
    }, [userName,navigate])

    return (
        <div className="container">
            <br></br>
            <h2 className="text-center">Accessories Products List</h2>
            <div className="add-button mb-2">
                <Link to={`/addAccessories`}>
                    <button className="btn btn-primary"> Add Product</button>
                </Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>S.No</th>
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
                        {products.map((item, i) => {
                            return (
                                <tr key={item.accessoryId}>
                                    <td>{i + 1}</td>
                                    <td style={{textAlign:"left"}}> {item.productName}</td>
                                    <td><img src={item.logoImg} alt="/" className="img-seller"></img></td>
                                    <td>{item.productPrice}</td>
                                    <td>{item.brandName}</td>
                                    <td>{item.type}</td>
                                    <td>{item.suitablefor}</td>
                                    <td>{item.size}</td>
                                    <td>{item.color}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                        <Link to={`/updateAccessories/${item.accessoryId}`}>
                                            <button className="btn btn-info mt-0">Update </button>
                                        </Link>
                                    </td >

                                </tr>)

                        })}

                    </tbody>

                </table>
            </div>
        </div>











    )
}
export default ListAccessoriesDetails;