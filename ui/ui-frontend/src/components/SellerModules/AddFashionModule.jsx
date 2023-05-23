import React from 'react';
import "../../StyleSheets/SellerModule.css";
function AddFashionModule() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3 mt-4'>
                        <h2 className='text-center mt-3'>Fashion Products</h2>
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
                                    <label for="fashionTypes">Choose Fashion Type:</label>
                                    <select name="fashionTypes" id="fashionTypes" style={{width:'100%',height:'40px' }}>
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
                                    <label for="suitablefor">Choose Suitable For:</label>
                                    <select name="suitablefor" style={{width:'100%',height:'40px' }}>
                                        <option value="" disabled selected hidden>Choose Suitable for..</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Kids">Kids</option>
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
export default AddFashionModule;