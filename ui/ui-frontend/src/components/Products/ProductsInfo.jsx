import React, { useEffect, useState } from 'react'
import ProductService from '../../Services/ProductService';
import { useParams } from 'react-router-dom';
import "../../StyleSheets/ProductInfo.css"


const ProductsInfo = () => {

    const { productId } = useParams();

    const [productsInfo, setProductInfo] = useState({ id: null });

    const [image, setImage] = useState('')

    const handleClick = (imgSrc) => {
        setImage(imgSrc);
    }

    useEffect(() => {
        ProductService.getProductById(productId).then((response) => {
            console.log(response);
            setProductInfo(response.data);
            setImage(response.data.productImg1)
        })
    }, [productId]);

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

                <img className='card-images' alt='/'
                    onClick={() => handleClick(productsInfo.productImg5)}
                    src={productsInfo.productImg5} />
            </div>
            <div className='product-main-image-container'>
                <img className='product-main-image' src={image}></img>
            </div>
            <div className='product-deatails-container'>
                <h1 className='brand-name'>{productsInfo.brandName}</h1>
                <p>{productsInfo.type}</p>
                <h2 className='product-name'>{productsInfo.productName}</h2>
                <p className='product-description'>{productsInfo.productDescription}</p>
                <p>Color {productsInfo.color}</p>
                <p>Size {productsInfo.size}</p>
                <p className='product-price'>{productsInfo.productPrice}</p>
                <h2 className='seller-name'>{productsInfo.sellerName}</h2>
                <p className='suitable-for'> {productsInfo.suitablefor}</p>
            </div>
        </div>


    )
}

export default ProductsInfo;