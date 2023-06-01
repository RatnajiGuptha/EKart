import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../StyleSheets/SellerModule.css";
import BeautyService from '../../Services/BeautyService';
function AddBeautyModule() {
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
    const [qty, setQty] = useState('')
    const { beautyId } = useParams();

    const saveOrUpdateBeauty = (e) => {
        e.preventDefault();

        const beauty = {
            productName, logoImg, productPrice, productDescription, brandName, type, suitablefor, manufactureDate, size,
            productImg1, productImg2, productImg3, productImg4, qty
        }

        if (beautyId) {
            BeautyService.updateBeautyProducts(beautyId, beauty).then((response) => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })

        } else {
            BeautyService.saveBeautyProducts(beauty).then((response) => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        BeautyService.getBeautyProductsById(beautyId).then((response) => {
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
            setQty(response.data.qty)
        }).catch(error => {
            console.log(error)
        })
    }, [beautyId])

    const title = () => {

        if (beautyId) {
            return <h2 className="text-center">Update Beauty Products</h2>
        } else {
            return <h2 className="text-center">Add Beauty Products</h2>
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
                                    <input placeholder='Enter Product Name' name='productName' className='form-control' value = {productName}
                                        onChange = {(e) => setProductName(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Main Product Image: </label>
                                    <input placeholder='Enter Main Product Image Url' name='logoImg' className='form-control' value = {logoImg}
                                        onChange = {(e) => setLogoImg(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Product Price: </label>
                                    <input placeholder='Enter Product Price' name='productPrice' className='form-control' value = {productPrice}
                                        onChange = {(e) => setProductPrice(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Product Description: </label>
                                    <input placeholder='Enter Product Description' name='productDescription' className='form-control' value = {productDescription}
                                        onChange = {(e) => setProductDescription(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Brand Name: </label>
                                    <input placeholder='Enter Brand Name' name='brandName' className='form-control' value = {brandName}
                                        onChange = {(e) => setBrandName(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Type: </label>
                                    <input placeholder='Enter type' name='type' className='form-control' value = {type} onChange = {(e) => setType(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Suitable for: </label>
                                    <input placeholder='Enter Suitable for' name='suitableFor' className='form-control' value = {suitablefor} onChange = {(e) => setSuitableFor(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Manufacture Date: </label>
                                    <input placeholder='Enter Manufacture Date' name='manufactureDate' className='form-control' value = {manufactureDate}
                                        onChange = {(e) => setManufactureDate(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Size: </label>
                                    <input placeholder='Enter Size' name='size' className='form-control' value = {size} onChange = {(e) => setSize(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image One: </label>
                                    <input placeholder='Enter Product Image One Url' name='productImg1' className='form-control' value = {productImg1}
                                        onChange = {(e) => setProductImg1(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image Two: </label>
                                    <input placeholder='Enter Product Image Two Url' name='productImg2' className='form-control' value = {productImg2}
                                        onChange = {(e) => setProductImg2(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image Three: </label>
                                    <input placeholder='Enter Product Image Three Url' name='productImg3' className='form-control' value = {productImg3}
                                        onChange = {(e) => setProductImg3(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image Four: </label>
                                    <input placeholder='Enter Product Image Four Url' name='productImg4' className='form-control' value = {productImg4}
                                        onChange = {(e) => setProductImg4(e.target.value)}>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Quantity: </label>
                                    <input placeholder='Enter Quantity' name='qty' className='form-control' value = {qty}
                                        onChange = {(e) => setQty(e.target.value)}>
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateBeauty(e)} >Submit </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddBeautyModule;