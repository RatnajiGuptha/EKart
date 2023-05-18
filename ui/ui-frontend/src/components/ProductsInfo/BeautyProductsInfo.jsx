import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import "../../StyleSheets/ProductInfo.css"
import BeautyService from '../../Services/BeautyService';
import CartService from "../../Services/CartService";


const BeautyProductsInfo = () => {

    const { beautyId } = useParams();

    const [productsInfo, setProductInfo] = useState({ id: null });
    const [quantity, setQuantity] = useState(1);

    const [image, setImage] = useState('')

    const handleClick = (imgSrc) => {
        setImage(imgSrc);
    }

    useEffect(() => {
        BeautyService.getBeautyProductsById(beautyId).then((response) => {
            console.log(response);
            setProductInfo(response.data);
            setImage(response.data.productImg1)
        })
    }, [beautyId]);


    const quantityDec = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    };

    const quantityInc = () => {
        setQuantity(quantity + 1);
    };

    const handleCardItems = async () => {
        const cart = {
            productId: productsInfo.beautyId,
            brandName: productsInfo.brandName,
            productName: productsInfo.productName,
            logoImg: productsInfo.logoImg,
            productPrice: productsInfo.productPrice,
            size: productsInfo.size,
            color: 'NA',
            qty: quantity,
            productCategories: "Beauty",
            type: productsInfo.type,
            sellerName: productsInfo.sellerName,
            suitablefor: productsInfo.suitablefor,
            productDescription: productsInfo.productDescription,

        };

        await CartService.addItemsToCart(cart).then((response) => {
            console.log(response);
            alert("Item added successfully");

        });

    };

    return (
        <div className='product-info-container'>
            <div className='product-image-container'>
                <img className='card-images' alt='/'
                    onClick={() => handleClick(productsInfo.productImg1)}
                    src={productsInfo.productImg1} />

                <img className='card-images' alt='/'
                    onClick={() => handleClick(productsInfo.productImg2)}
                    src={productsInfo.productImg2} />

                <img className='card-images' alt='/'
                    onClick={() => handleClick(productsInfo.productImg3)}
                    src={productsInfo.productImg3} />

                <img className='card-images' alt='/'
                    onClick={() => handleClick(productsInfo.productImg4)}
                    src={productsInfo.productImg4} />

            </div>
            <div className='product-main-image-container'>
                <img className='product-main-image' src={image} alt='/'></img>
            </div>
            <div className='product-deatails-container'>
                <h1>{productsInfo.brandName}</h1>
                <p className='suitable-for'> {productsInfo.suitablefor} / {productsInfo.type}</p>
                <h2 className='product-name' style={{ textAlign: 'left' }}>{productsInfo.productName}</h2>
                <p className='product-description' style={{ textAlign: 'left' }}>{productsInfo.productDescription}</p>
                <div className="d-flex">
                    <div className={`size-selector`}>
                        <span className='size-text'> Size:{productsInfo.size} </span>
                    </div>
                </div>
                <p className='product-price'> Price : ₹ {productsInfo.productPrice}/-</p>
                <h5 className='seller-name'>Seller : {productsInfo.sellerName}</h5>
                <div className="quantity">
                    <div>
                        <button className="quantity-button" disabled={quantity === 1} onClick={quantityDec}> - </button>
                        {quantity}
                        <button className="quantity-button" onClick={quantityInc}> + </button>
                    </div>
                </div>
                <div><button className='btn btn-warning' onClick={handleCardItems}>Add to cart</button> </div>
            </div>

        </div>


    )
}

export default BeautyProductsInfo;