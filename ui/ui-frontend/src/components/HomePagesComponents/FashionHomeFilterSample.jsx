import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../StyleSheets/Home.css";


const FashionHomeFilter = () => {

  const [type, setType] = useState('');
  console.log(type);

  const navigate = useNavigate();

  const handleCategoryClicks = (categoryType) => {
    setType(categoryType);
    navigate(`/fashionByType/${categoryType}`);

  }

  return (
    <div className="fluid-container">
      <div className="d-flex flex-row justify-content-center">
        <div className="categories-container" >

          <div className="top-picks" onClick={() => handleCategoryClicks('KurthaSets')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683561941/kurtaset1_suhzrp.png" alt="/"
              className="image" />
            <h5 className="names"> Kurta Sets</h5>
          </div>
          <div className="top-picks" onClick={() => handleCategoryClicks('Sarees')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683562594/saree1_cropped1_z88s9u.png" alt="/"
              className="image"
            />
            <h5 className="names"> Sarees </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Women T-shirts')}>
            <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684393836/women_tshirt1_rv9aoo.jpg" alt="1"
              className="image"
            />
            <h5 className="names"> Women T-shirts </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Jeans')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684389069/shirts_women_cryqjg.png" alt="/"
              className="image"
            />
            <h5 className="names"> Women Shirts  </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Jeans')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683540982/jeans_n3w09a.png" alt="/"
              className="image"
            />
            <h5 className="names"> Women Jeans  </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Trousers')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684305712/fashion_women_trouser_lqzqzp.png" alt="/"
              className="image"
            />
            <h5 className="names"> Women Trousers </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('ActiveWear')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683611238/active_wear1_k8xpye.png" alt="1"
              className="image"
            />
            <h5 className="names"> Active Wear </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('ActiveWear')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684388317/jumpsuit_zemzjg.png" alt="1"
              className="image"
            />
            <h5 className="names"> Jump Suits </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('KurthaSets')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684305671/fashion_mens1.2_vjs9nm.png
              " alt="/"
              className="image" />
            <h5 className="names"> Men Shirts</h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Women T-shirts')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684305669/fashion_men_tshirt_ovidsu.jpg

              " alt="1"
              className="image"
            />
            <h5 className="names"> Men T-shirts </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Sarees')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684391400/men_jeans_fnp3z7.jpg
              " alt="/"
              className="image"
            />
            <h5 className="names"> Men Jeans </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Jeans')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684391874/men_trouser_ujbato.jpg
              " alt="/"
              className="image"
            />
            <h5 className="names"> Men Trousers </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Trousers')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684392170/men_ethnic_jltpwt.jpg" alt="/"
              className="image"
            />
            <h5 className="names"> Ethnic Wear</h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Jeans')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684393280/men_suit2_yv26al_uam2tb.jpg" alt="/"
              className="image"
            />
            <h5 className="names"> Sports Wear  </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('ActiveWear')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684392452/men_suit1_uwfy7l_novs9f.jpg" alt="1"
              className="image"
            />
            <h5 className="names"> Suits </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('KidsWear')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683562953/kids_wear_categories_hpxjpq.png" alt="/"
              className="image"
            />
            <h5 className="names"> Kids Wear </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('KidsWear')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684387344/sunglasses2_vwtkrv.png" alt="/"
              className="image"
            />
            <h5 className="names"> Sunglasses </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Handbags')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683540590/handbag2_ijylrl.png" alt="/"
              className="image"
            />
            <h5 className="names"> Handbags</h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Jewellery')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683538795/jewellery_axx0pv.png" alt="/"
              className="image"
            />
            <h5 className="names"> Jewellery </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Watches')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683541431/watch_zjwjfc.png" alt="/"
              className="image" />
            <h5 className="names">  Watches</h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Beauty')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683540420/beauty_llrlc3.png" alt="/"
              className="image"
            />
            <h5 className="names"> Beauty </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Heels&Flats')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683539977/heels_b4akkl.png" alt="/"
              className="image"
            />
            <h5 className="names"> Heels&Flats </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Shoes')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683539206/shoes1_ggm0s3.png" alt="/"
              className="image"
            />
            <h5 className="names"> Shoes </h5>
          </div>

          <div className="top-picks" onClick={() => handleCategoryClicks('Heels&Flats')}>
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684387918/kitchen_appliances_uhawwu.png" alt="/"
              className="image"
            />
            <h5 className="names">Kitchen Utilities </h5>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FashionHomeFilter;