import React, { useEffect, useState } from "react";
import ProductService from "../Services/ProductService";
import ProductsByTypeComponent from "./Products/ProductsByTypeComponent";
import "../StyleSheets/Home.css";
<<<<<<< HEAD
import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
=======
import "../StyleSheets/products.css"
>>>>>>> a9528e09e0685cff907cc7b3f05920d779a8065a

function HomeTopPics() {

  const [type, setType] = useState('KurthaSets');
  const data1="kurtha set";

  const getByType = (types) =>{
    console.log(types);
      window.location.assign("/fashionByType");
      <ProductsByTypeComponent info = {data1}/>
  }
  return (
    <div className="fluid-container">
<<<<<<< HEAD
      {/* <ProductsByTypeComponent info = {data1}/> */}
      <div className="m-2">
=======
      <div className="categories-container">
>>>>>>> a9528e09e0685cff907cc7b3f05920d779a8065a
        <img
          className="me-auto newArrivalGif"
          src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522925/new_arrivals_ceoifa.gif" alt="1"
        ></img>
      </div>

<<<<<<< HEAD
      <div className="d-flex flex-row justify-content-center">
        <div className="top-picks" onClick={()=>getByType("KurthaSets")}>
=======
      <div className="categories-container">
        <div className="top-picks">
>>>>>>> a9528e09e0685cff907cc7b3f05920d779a8065a
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683561941/kurtaset1_suhzrp.png" alt="/"
            className="image" />
          <h5 className="names"> Kurta Sets</h5>
          
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683562594/saree1_cropped1_z88s9u.png" alt="/"
            className="image"
          />
          <h5 className="names"> Sarees </h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683538795/jewellery_axx0pv.png" alt="/"
            className="image"
          />
          <h5 className="names"> Jewellery </h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683540590/handbag2_ijylrl.png" alt="/"
            className="image"
          />
          <h5 className="names"> Handbags </h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683540420/beauty_llrlc3.png" alt="/"
            className="image"
          />
          <h5 className="names"> Beauty </h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683540982/jeans_n3w09a.png" alt="/"
            className="image"
          />
          <h5 className="names"> Jeans </h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683539977/heels_b4akkl.png" alt="/"
            className="image"
          />
          <h5 className="names"> Heels </h5>
        </div>


        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683539206/shoes1_ggm0s3.png" alt="/"
            className="image"
          />
          <h5 className="names"> Shoes </h5>
        </div>



        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683539492/t-shirts2_pyetoj.png" alt="/"
            className="image"
          />
          <h5 className="names"> T-Shirts</h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683541431/watch_zjwjfc.png" alt="/"
            className="image"
          />
          <h5 className="names"> Watches </h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683562798/infant_wggbqi.png" alt="/"
            className="image"
          />
          <h5 className="names"> Infant Essentials </h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683562953/kids_wear_categories_hpxjpq.png" alt="/"
            className="image"
          />
          <h5 className="names"> Kids Wear </h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683612516/MicrosoftTeams-image_2_epqjna.png" alt="/"
            className="image"
          />
          <h5 className="names"> Shirts </h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683610406/trousers3_dkjb1g.png" alt="/"
            className="image"
          />
          <h5 className="names"> Trousers </h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683611014/MicrosoftTeams-image_uimpfn.png" alt="1"
            className="image"
          />
          <h5 className="names"> Lounge Wear </h5>
        </div>

        <div className="top-picks">
          <img
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683611238/active_wear1_k8xpye.png" alt="1"
            className="image"
          />
          <h5 className="names"> Active Wear </h5>
        </div>
      </div>
    </div>

  );
}

export default HomeTopPics;