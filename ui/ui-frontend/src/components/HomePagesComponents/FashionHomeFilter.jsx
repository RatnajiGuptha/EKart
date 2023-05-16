import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../StyleSheets/Home.css";


const FashionHomeFilter = () => {

  const [type, setType] = useState('');
  
  const navigate = useNavigate();

  const handleCategoryClicks = (categoryType) => {
    setType(categoryType);
    navigate(`/fashionByType/${categoryType}`);

  }

  return (
    <div className="fluid-container">
      <div className="d-flex flex-row justify-content-center">
        <div className="categories-container" >
          <div className="top-picks" onClick={() => handleCategoryClicks('Sarees')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683562594/saree1_cropped1_z88s9u.png" alt="/"
              className="image"
            />
            <h5 className="names"> Sarees </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Jeans')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683540982/jeans_n3w09a.png" alt="/"
              className="image"
            />
            <h5 className="names"> Jeans </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Shirts')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683612516/MicrosoftTeams-image_2_epqjna.png" alt="/"
              className="image"
            />
            <h5 className="names"> Shirts </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Tshirt')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683539492/t-shirts2_pyetoj.png" alt="/"
              className="image"
            />
            <h5 className="names"> T-Shirts</h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('KurthaSets')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683561941/kurtaset1_suhzrp.png" alt="/"
              className="image" />
            <h5 className="names"> Kurta Sets</h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Trousers')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683610406/trousers3_dkjb1g.png" alt="/"
              className="image"
            />
            <h5 className="names"> Trousers </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('ActiveWear')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683611238/active_wear1_k8xpye.png" alt="1"
              className="image"
            />
            <h5 className="names"> Active Wear </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('KidsWear')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683562953/kids_wear_categories_hpxjpq.png" alt="/"
              className="image"
            />
            <h5 className="names"> Kids Wear </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FashionHomeFilter;