import { useEffect, useState } from "react";
import "../../StyleSheets/SellerModule.css"
import FootwearService from "../../Services/FootwearService";
function ListFootWearDetails() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        FootwearService.fetchBySellerName("U.S.POLO ASSN").then((res) => {
            console.log(res.data)
            setProducts(res.data);

        })
    }, [])
    return (

        <div>
            <br></br>
            <h2 className="text-center">FootWear Products List</h2>
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
                                <tr key={item.fashionId}>
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
                                        <button className="btn btn-info">Update </button>
                                        <br />
                                        <button className="btn btn-secondary" style={{ marginTop: '10px', width: '78px' }}>View </button>
                                    </td>

                                </tr>)

                        })}

                    </tbody>

                </table>
            </div>
        </div>











    )
}
export default ListFootWearDetails;