import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../StyleSheets/SellerModule.css";
import { FashionProductService } from '../../Services/FashionProductService';
function AddFashionModule() {
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
    const { fashionId } = useParams();
    const { sellerName, setSellerName } = useState();

    const saveOrUpdateProduct = (e) => {
        e.preventDefault();

        setSellerName(localStorage.getItem("name"));

        const fashionProducts = {
            productName, logoImg, productPrice, productDescription, brandName, type, suitablefor, manufactureDate, size,
            productImg1, productImg2, productImg3, productImg4, productImg5, color, qty, sellerName
        }

        if (fashionId) {
            FashionProductService.updateFashionProducts(fashionId, fashionProducts).then((response) => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })

        } else {
            FashionProductService.addFashionProduct(fashionProducts).then((response) => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        FashionProductService.getProductById(fashionId).then((response) => {
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
    }, [fashionId,setSellerName])

    const title = () => {

        if (fashionId) {
            return <h2 className="text-center">Update Fashion Products</h2>
        } else {
            return <h2 className="text-center">Add Fashion Products</h2>
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3 mt-4'>
                        {
                            title()
                        }
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
                                    <label htmlFor="type">Choose Fashion Type:</label>
                                    <select name="type" id="type" style={{ width: '100%', height: '40px' }} value={type} onChange={(e) => setType(e.target.value)}>
                                        <option value="" disabled selected hidden>Choose Fashion Type..</option>
                                        <option value="SportsWear">SportsWear</option>
                                        <option value="KurthaSets">KurthaSets</option>
                                        <option value="Sarees">Sarees</option>
                                        <option value="Shirts">Shirts</option>
                                        <option value="Trousers">Trousers</option>
                                        <option value="Jeans">Jeans</option>
                                        <option value="Tshirt">Tshirt</option>
                                        <option value="ActiveWear">ActiveWear</option>
                                        <option value="KidsWear">KidsWear</option>
                                        <option value="JumpSuits">JumpSuits</option>
                                        <option value="EthnicWear">EthnicWear</option>
                                        <option value="Suits">Suits</option>
                                    </select>
                                </div>
                                <div className='form-container'>
                                    <label htmlFor="suitablefor">Choose Suitable For:</label>
                                    <select name="suitablefor" style={{ width: '100%', height: '40px' }} value={suitablefor} onChange={(e) => setSuitableFor(e.target.value)}>
                                        <option value="" disabled selected hidden>Choose Suitable for..</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Kids">Kids</option>
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
                                    <select name="size" id="size" style={{ width: '100%', height: '40px' }} value={size} onChange={(e) => setSize(e.target.value)}>
                                        <option value="" disabled selected hidden>Choose Size..</option>
                                        <option value="FreeSize">FreeSize</option>
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="XXXL">XXXL</option>
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

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateProduct(e)} >Submit </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddFashionModule;