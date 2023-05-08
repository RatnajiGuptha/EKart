import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import Carousel from "react-bootstrap/Carousel";

const ItemDetails = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="fluid-container">
        <div className="d-flex flex-row">
          <div className="cd-3">
            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522150/image1_uufbby.webp"
              className="item-1"
            ></img>

            <img
              src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522150/image2_m2djbn.webp"
              className="item-1"
            ></img>

            <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522150/image3_cvcw3p.webp"></img>

            <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522151/image4_ddml8t.webp"></img>

            <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522151/image5_aaxm6b.webp"></img>
          </div>

          <div className="cd-3">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522151/image6_kaapyn.webp"
                  className="item-2"
                ></img>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522152/image7_sbd9m7.webp"
                  className="item-2"
                ></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/ku5ufm80/cycle/t/a/q/chaze-by-milind-soman-czbc2703-27-5-lifelong-single-speed-original-imag7c3sggbdkffs.jpeg?q=70"
                  className="item-2"
                ></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/ku5ufm80/cycle/i/z/s/chaze-by-milind-soman-czbc2703-27-5-lifelong-single-speed-original-imag7c3skdpqqhrc.jpeg?q=70"
                  className="item-2"
                ></img>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="cd-6">
            <h1 className="item-3">
              Lifelong Chaze by Milind Soman CZBC2703 27.5 T Road Cycle  (Single
              Speed, Blue)
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
