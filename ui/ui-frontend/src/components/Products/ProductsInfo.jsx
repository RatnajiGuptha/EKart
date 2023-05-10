import React, { useEffect, useState } from 'react'
import ProductService from '../../Services/ProductService';
import { useParams } from 'react-router-dom';
import "../../StyleSheets/ProductInfo.css"


const ProductsInfo = () => {

    const { productId } = useParams();
    const [productsInfo, setProductInfo] = useState({ id: null });
    const [image, setImage] = useState(
        productsInfo.image
    );

    const handleClick = () => {
        setImage(productsInfo.image);
    }

    useEffect(() => {
        ProductService.getProductById(productId).then((response) => {
            console.log(response);
            setProductInfo(response.data);
        })
    }, [productId]);


    return (
        <div className='d-flex flex-row justify-content-center'>
            <div className='d-flex flex-column justify-content-start'>
                <img className='card-images' alt='/'
                    onClick={handleClick}// 
                    src={productsInfo.image} />

                <img className='card-images' alt='/'
                    // onClick={handleClick}//  
                    src={productsInfo.image} />

                <img className='card-images' alt='/'
                    // onClick={handleClick}// 
                    src={productsInfo.image} />

                <img className='card-images' alt='/'
                    // onClick={handleClick}// 
                    src={productsInfo.image} />

                <img className='card-images' alt='/'
                    // onClick={handleClick}// 
                    src={productsInfo.image} />
            </div>
            <div><img className='card-images' src={image}></img></div>
            <div>
                <p>{productsInfo.title}</p>
                <p>{productsInfo.description}</p>
            </div>
        </div>


    )
}

export default ProductsInfo;