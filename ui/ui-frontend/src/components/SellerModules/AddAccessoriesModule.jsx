import React, { useState, useEffect } from 'react'
import "../../StyleSheets/SellerModule.css";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AccessoriesService } from '../../Services/AccessoriesService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddAccessoriesModule() {
    const [productName, setProductName] = useState('')
    const [logoImg, setLogoImg] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [brandName, setBrandName] = useState('')
    const [type, setType] = useState('')
    const [suitablefor, setSuitableFor] = useState('')
    const [manufactureDate, setManufactureDate] = useState('')
    const [size, setSize] = useState('')
    const [productImg1, setProductImg1] = useState('')
    const [productImg2, setProductImg2] = useState('')
    const [productImg3, setProductImg3] = useState('')
    const [productImg4, setProductImg4] = useState('')
    const [productImg5, setProductImg5] = useState('')
    const [color, setColor] = useState('')
    const [qty, setQty] = useState('')
    const [sellerName, setSellerName] = useState('');
    const { accessoryId } = useParams();
    const navigate = useNavigate("");

    const saveOrUpdateAccessories = (e) => {
        e.preventDefault();

        const accessoriesProducts = {
            productName, logoImg, productPrice, productDescription, brandName, type, suitablefor, manufactureDate, size,
            productImg1, productImg2, productImg3, productImg4, productImg5, color, qty, sellerName
        }

        if (accessoryId) {
            AccessoriesService.updateAccessoriesProducts(accessoryId, accessoriesProducts).then((response) => {
                console.log(response.data)
                toast.success("Product updated successfully", { theme: "dark" });
            }).catch(err => {
                if (err.response.status === 401) {
                    console.log(err.response.data)
                    navigate("/login")
                    localStorage.clear();
                }
            })
        } else {
            AccessoriesService.addProduct(accessoriesProducts).then((response) => {
                console.log(response.data)
                toast.success("Product added successfully", { theme: "dark" });
            }).catch(err => {
                if (err.response.status === 401) {
                    console.log(err.response.data)
                    navigate("/login")
                    localStorage.clear();
                }
            })
        }

    }

    useEffect(() => {
        const name = localStorage.getItem("name");
        setSellerName(name);

        AccessoriesService.getAccessoriesProductById(accessoryId).then((response) => {
            setProductName(response.data.productName)
            setLogoImg(response.data.logoImg)
            setProductPrice(response.data.productPrice)
            setProductDescription(response.data.productDescription)
            setBrandName(response.data.brandName)
            setType(response.data.type)
            setSuitableFor(response.data.suitablefor)
            setManufactureDate(response.data.manufactureDate)
            setSize(response.data.size)
            setProductImg1(response.data.productImg1)
            setProductImg2(response.data.productImg2)
            setProductImg3(response.data.productImg3)
            setProductImg4(response.data.productImg4)
            setProductImg5(response.data.productImg5)
            setColor(response.data.color)
            setQty(response.data.qty)
            setSellerName(response.data.sellerName)
        }).catch(error => {
            console.log(error)
        })
    }, [accessoryId])

    const titleAccessories = () => {

        if (accessoryId) {
            return <h2 className="text-center p-2">Update Accessories Products</h2>
        } else {
            return <h2 className="text-center p-2">Add Accessories Products</h2>
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3 mt-4'>
                        {titleAccessories()}
                        <div className='card-body'>
                            <form>
                                <div className='form-container'>
                                    <label> Product Name: </label>
                                    <input placeholder='Enter Product Name' name='productName' className='form-control' value={productName}
                                        onChange={(e) => setProductName(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Main Product Image: </label>
                                    <input placeholder='Enter Main Product Image Url' name='logoImg' className='form-control' value={logoImg}
                                        onChange={(e) => setLogoImg(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Product Price: </label>
                                    <input placeholder='Enter Product Price' name='productPrice' className='form-control' value={productPrice}
                                        onChange={(e) => setProductPrice(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Product Description: </label>
                                    <input placeholder='Enter Product Description' name='productDescription' className='form-control' value={productDescription}
                                        onChange={(e) => setProductDescription(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Brand Name: </label>
                                    <input placeholder='Enter Brand Name' name='brandName' className='form-control' value={brandName}
                                        onChange={(e) => setBrandName(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label htmlFor="AccessoriesTypes">Choose Type:</label>
                                    <select name="AccessoriesTypes" accessoryId="AccessoriesTypes" style={{ width: '100%', height: '40px' }} value={type} onChange={(e) => setType(e.target.value)}>
                                        <option value="" disabled selected haccessoryIdden>Choose Type..</option>
                                        <option value="Jewellery">Jewellery</option>
                                        <option value="Handbags">Handbags</option>
                                        <option value="Watches">Watches</option>
                                        <option value="Sunglasses">Sunglasses</option>

                                    </select>
                                </div>
                                <div className='form-container'>
                                    <label htmlFor="suitablefor">Choose Suitable For:</label>
                                    <select name="suitablefor" style={{ width: '100%', height: '40px' }} value={suitablefor} onChange={(e) => setSuitableFor(e.target.value)}>
                                        <option value="" disabled selected haccessoryIdden>Choose Suitable for..</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>

                                        <option value="Unisex">Unisex</option>
                                    </select>
                                </div>
                                <div className='form-container'>
                                    <label> Manufacture Date: </label>
                                    <input placeholder='Enter Manufacture Date' name='manufactureDate' className='form-control' value={manufactureDate}
                                        onChange={(e) => setManufactureDate(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label htmlFor="size">Choose Size:</label>
                                    <select name="size" accessoryId="size" style={{ width: '100%', height: '40px' }} value={size} onChange={(e) => setSize(e.target.value)}>
                                        <option value="" disabled selected haccessoryIdden>Choose Size..</option>
                                        <option value="FreeSize">FreeSize</option>
                                        <option value="Onesize">Onesize</option>
                                    </select>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image One: </label>
                                    <input placeholder='Enter Product Image One Url' name='productImg1' className='form-control' value={productImg1}
                                        onChange={(e) => setProductImg1(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image Two: </label>
                                    <input placeholder='Enter Product Image Two Url' name='productImg2' className='form-control' value={productImg2}
                                        onChange={(e) => setProductImg2(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image Three: </label>
                                    <input placeholder='Enter Product Image Three Url' name='productImg3' className='form-control' value={productImg3}
                                        onChange={(e) => setProductImg3(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image Four: </label>
                                    <input placeholder='Enter Product Image Four Url' name='productImg4' className='form-control' value={productImg4}
                                        onChange={(e) => setProductImg4(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image Five: </label>
                                    <input placeholder='Enter Product Image Five Url' name='productImg5' className='form-control' value={productImg5}
                                        onChange={(e) => setProductImg5(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Color: </label>
                                    <input placeholder='Enter Color' name='color' className='form-control' value={color}
                                        onChange={(e) => setColor(e.target.value)}>
                                    </input>
                                </div>

                                <div className='form-container'>
                                    <label>  Quantity: </label>
                                    <input placeholder='Enter Quantity' name='qty' className='form-control' value={qty}
                                        onChange={(e) => setQty(e.target.value)}>
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateAccessories(e)} >Submit </button>

                                <Link to="/listAccessoriesProducts">
                                    <button className='btn btn-warning m-3'>Back</button>
                                </Link>

                                <ToastContainer />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddAccessoriesModule;