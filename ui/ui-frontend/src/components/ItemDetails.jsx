import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/image1.jpg";
const ItemDetails = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="fluid-container">
        <div className="d-flex flex-row">
          <div className="cd-3">
            <img
              src="https://rukminim1.flixcart.com/image/128/128/ku5ufm80/cycle/k/1/d/chaze-by-milind-soman-czbc2703-27-5-lifelong-single-speed-original-imag7cth7e6hujgj.jpeg?q=70"
              className="item-1"
            ></img>

            <img
              src="https://rukminim1.flixcart.com/image/128/128/ku5ufm80/cycle/x/f/r/chaze-by-milind-soman-czbc2703-27-5-lifelong-single-speed-original-imag7c3shfz3saqj.jpeg?q=70"
              className="item-1"
            ></img>

            <img src="https://rukminim1.flixcart.com/image/128/128/ku5ufm80/cycle/t/a/q/chaze-by-milind-soman-czbc2703-27-5-lifelong-single-speed-original-imag7c3sggbdkffs.jpeg?q=70"></img>

            <img src="https://rukminim1.flixcart.com/image/128/128/ku5ufm80/cycle/s/8/f/chaze-by-milind-soman-czbc2702-27-5-lifelong-single-speed-original-imag7c3hbb65f8ah.jpeg?q=70"></img>

            <img src="https://rukminim1.flixcart.com/image/128/128/ku5ufm80/cycle/i/z/s/chaze-by-milind-soman-czbc2703-27-5-lifelong-single-speed-original-imag7c3skdpqqhrc.jpeg?q=70"></img>
          </div>

          <div className="cd-3">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/ku5ufm80/cycle/x/f/r/chaze-by-milind-soman-czbc2703-27-5-lifelong-single-speed-original-imag7c3shfz3saqj.jpeg?q=70"
                  className="item-2"
                ></img>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/ku5ufm80/cycle/k/1/d/chaze-by-milind-soman-czbc2703-27-5-lifelong-single-speed-original-imag7cth7e6hujgj.jpeg?q=70"
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
