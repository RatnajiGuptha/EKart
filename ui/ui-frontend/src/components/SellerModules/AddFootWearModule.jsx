import React, { Component } from 'react';
import "../../StyleSheets/SellerModule.css";
function AddFootWearModule() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3 mt-4'>
                        <h2 className='text-center mt-3'>FootWear Products</h2>
                        <div>
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
                                    <label for="FootWearTypes">Choose FootWear Type:</label>
                                    <select name="FootWearTypes" id="FootWearTypes" style={{width:'100%',height:'40px' }}>
                                        <option value="" disabled selected hidden>Choose FootWear Type..</option>
                                        <option value="Shoes">Shoes</option>
                                        <option value="FormalShoes">FormalShoes</option>
                                        <option value="Heels">Heels</option>
                                        <option value="Flats">Flats</option>
                                        
                                    </select>
                                </div>
                                <div className='form-container'>
                                    <label for="suitablefor">Choose Suitable For:</label>
                                    <select name="suitablefor" style={{width:'100%',height:'40px' }}>
                                        <option value="" disabled selected hidden>Choose Suitable for..</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        
                                        <option value="Unisex">Unisex</option>
                                    </select>
                                </div>
                                <div className='form-container'>
                                    <label> Manufacture Date: </label>
                                    <input placeholder='Enter Manufacture Date' name='manufactureDate' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label for="size">Choose Size:</label>
                                    <select name="size" id="size" style={{width:'100%',height:'40px' }}>
                                        <option value="" disabled selected hidden>Choose Size..</option>
                                        <option value="UK_6">UK_6</option>
                                        <option value="UK_7">UK_7</option>
                                        <option value="UK_8">UK_8</option>
                                        <option value="UK_9">UK_9</option>
                                        <option value="UK_10">UK_10</option>
                                        <option value="UK_11">UK_11</option>
                                        <option value="UK_12">UK_12</option>
                                        
                                    </select>
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
                                    <label>  Product Image Five: </label>
                                    <input placeholder='Enter Product Image Five Url' name='productImg5' className='form-control'>
                                    </input>
                                </div>
                                <div className='form-container'>
                                    <label>  Color: </label>
                                    <input placeholder='Enter Color' name='color' className='form-control'>
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
export default AddFootWearModule;