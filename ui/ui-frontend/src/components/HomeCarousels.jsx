import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousels() {
  return (
    <div>
      <Carousel className="carousalClass">
        <Carousel.Item>
          <img
            className="d-block w-100 carousalImgClass "
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522373/caurosel-img1_qzq725.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousalImgClass"
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522373/caurosel-img2_dzgqem.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousalImgClass"
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522373/caurosel-img3_pvatjv.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousalImgClass"
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683545937/caurosel-last-img_nv3kk6.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousalImgClass"
            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522375/caurosel-img5_ndkq7v.png"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousels;
