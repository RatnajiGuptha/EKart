import React, { Component } from 'react';
import "../../StyleSheets/SellerModule.css";
function AddBeautyModule() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3 mt-4'>
                        <h2 className='text-center mt-3'>Beauty Products</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-container'>
                                    <label> Product Name: </label>
                                    <input placeholder='Enter Product Name' name='productName' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Main Product Image: </label>
                                    <input placeholder='Enter Main Product Image Url' name='logoImg' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Product Price: </label>
                                    <input placeholder='Enter Product Price' name='productPrice' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Product Description: </label>
                                    <input placeholder='Enter Product Description' name='productDescription' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Brand Name: </label>
                                    <input placeholder='Enter Brand Name' name='brandName' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Type: </label>
                                    <input placeholder='Enter type' name='type' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Suitable for: </label>
                                    <input placeholder='Enter Suitable for' name='suitableFor' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label> Manufacture Date: </label>
                                    <input placeholder='Enter Manufacture Date' name='manufactureDate' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Size: </label>
                                    <input placeholder='Enter Size' name='size' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image One: </label>
                                    <input placeholder='Enter Product Image One Url' name='productImg1' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image Two: </label>
                                    <input placeholder='Enter Product Image Two Url' name='productImg2' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image Three: </label>
                                    <input placeholder='Enter Product Image Three Url' name='productImg3' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Product Image Four: </label>
                                    <input placeholder='Enter Product Image Four Url' name='productImg4' className='form-control'>
                                    </input>
                                </div>



                                <div className='form-container'>
                                    <label>  Quantity: </label>
                                    <input placeholder='Enter Quantity' name='qty' className='form-control'>
                                    </input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddBeautyModule;