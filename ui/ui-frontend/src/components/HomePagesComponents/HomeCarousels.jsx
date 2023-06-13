import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function HomeCarousels() {
  return (
    <div>
      <div>
        <Carousel className="carousalClass">
          <Carousel.Item>
            <Link to = "/fashionBy/Female">
            <img
              className="d-block w-100 carousalImgClass "
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522373/caurosel-img1_qzq725.png"
              alt="First slide"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          <Link to = "accessoriesBy/Jewellery">
            <img
              className="d-block w-100 carousalImgClass"
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1686044162/carousel-accessories_culdg0.png"
              alt="Second slide"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item>

            <Link to= "/footwear">
            <img
              className="d-block w-100 carousalImgClass"
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1686645856/carousel-footwear_ovswoq.png"
              alt="Third slide"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/fashion">
            <img
              className="d-block w-100 carousalImgClass"
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683545937/caurosel-last-img_nv3kk6.png"
              alt="Second slide"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to = "fashionBy/suitablefor/Male/Tshirt">
            <img
              className="d-block w-100 carousalImgClass"
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522375/caurosel-img5_ndkq7v.png"
              alt="Second slide"
            />
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
      
      <div className="categories-container">
        <img
          className="me-auto newArrivalGif"
          src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522925/new_arrivals_ceoifa.gif" alt="1"
        ></img>
      </div>
    </div>
  );
}

export default HomeCarousels;
