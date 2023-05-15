import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ProductsByTypeComponent from "../Products/FashionProductByCategory";
import "../../StyleSheets/Home.css";
import "../../StyleSheets/products.css"

const ProductsFilter = () => {

  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleCategoryClicks = (categoryType) => {
    console.log(categoryType);
    setType(categoryType);
    navigate(`/${categoryType}`);

  }
  return (
    <div className="fluid-container">
      <div className="d-flex flex-row justify-content-center">
        <div className="categories-container" >

          <div className="top-picks" onClick={() => handleCategoryClicks('Handbags')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683540590/handbag2_ijylrl.png" alt="/"
              className="image"
            />
            <h5 className="names"> Handbags </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Beauty')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683540420/beauty_llrlc3.png" alt="/"
              className="image"
            />
            <h5 className="names"> Beauty </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Heels')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683539977/heels_b4akkl.png" alt="/"
              className="image"
            />
            <h5 className="names"> Heels </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Shoes')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683539206/shoes1_ggm0s3.png" alt="/"
              className="image"
            />
            <h5 className="names"> Shoes </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('accessories/Watches')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683541431/watch_zjwjfc.png" alt="/"
              className="image"
            />
            <h5 className="names"> Watches </h5>
          </div>

          <div>
            <div className="top-picks" onClick={() => handleCategoryClicks('Jewellery')}>
              <img
                src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683538795/jewellery_axx0pv.png" alt="/"
                className="image"
              />
              <h5 className="names"> Jewellery </h5>
            </div>
          </div>
        </div>


      </div>

      <ProductsByTypeComponent type={type} />
    </div>
  );
}

export default ProductsFilter;