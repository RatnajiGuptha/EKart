import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import "../../StyleSheets/Home.css";
import BeautyService from '../../Services/BeautyService';


const BeautyProductsInfo = () => {

    const { beautyId } = useParams();

    const [productsInfo, setProductInfo] = useState({ id: null });

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
                <h2 className='product-name'>{productsInfo.productName}</h2>
                <p className='product-description'>{productsInfo.productDescription}</p>
                <div className="d-flex">
                    <div className={`size-selector`}>
                        <span className='size-text'> Color:{productsInfo.color} </span>
                    </div>
                    <div className={`size-selector`}>
                        <span className='size-text'> Size:{productsInfo.size} </span>
                    </div>
                </div>
                <p className='product-price'> Price : ₹ {productsInfo.productPrice}/-</p>
                <h5 className='seller-name'>Seller : {productsInfo.sellerName}</h5>
                <div><button className='btn btn-warning'>Add to cart</button> </div>
            </div>

        </div>


    )
}

export default BeautyProductsInfo;