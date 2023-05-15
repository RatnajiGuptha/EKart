import React from 'react'
import FashionHomeFilter from '../HomePagesComponents/FashionHomeFilter';

const ProductPageComponents = () => {
    return (
        <div>
            <FashionHomeFilter />
            <div className='card-container'>
                <div className='image-container'>
                    <img className="card-image" alt="/" src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683612516/MicrosoftTeams-image_2_epqjna.png" />
                </div>
                <div className='image-container'>
                    <img className="card-image" alt="/" src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683562594/saree1_cropped1_z88s9u.png" />
                </div>
                <div className='image-container'>
                    <img className="card-image" alt="/" src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683562953/kids_wear_categories_hpxjpq.png" />
                </div>
            </div>
        </div>
    )
}

export default ProductPageComponents;
