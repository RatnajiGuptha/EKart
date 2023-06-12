import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { ElectronicsService } from "../../Services/ElectronicsService";
import "../../StyleSheets/SellerModule.css"
function ListElectronicsDetails() {

    const [products, setProducts] = useState([]);
    const userName = localStorage.getItem("name");
    const navigate = useNavigate('');

    useEffect(() => {
        ElectronicsService.getElectronicsBySellerName(userName).then((res) => {
            console.log(res.data)
            setProducts(res.data);
        }).catch(err => {
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
            <h2 className="text-center">Electronic Products List</h2>
            <div className="add-button mb-2">
                <Link to={`/addElectronics`}>
                    <button className="btn btn-primary"> Add Product</button>
                </Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> S.No</th>
                            <th> Product Name</th>
                            <th> Product Image</th>
                            <th> Product Price</th>
                            <th>Brand Name</th>
                            <th>Type</th>
                            <th>Capacity</th>
                            <th>Color</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(function (item,i) {
                            return (
                                <tr key={item.electronicsId}>
                                    <td>{i + 1}</td>
                                    <td style={{textAlign:"left"}}> {item.productName}</td>
                                    <td><img src={item.logoImg} alt="/" className="img-seller"></img></td>
                                    <td>{item.productPrice}</td>
                                    <td>{item.brandName}</td>
                                    <td>{item.type}</td>
                                    <td>{item.capacity}</td>
                                    <td>{item.color}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                        <Link to={`/updateElectronics/${item.electronicsId}`}>
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
export default ListElectronicsDetails;