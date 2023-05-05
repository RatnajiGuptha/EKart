import React, { Component } from 'react';
import '../StyleSheets/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/caurosel-img1.png';
import img2 from '../images/caurosel-img2.png';
import img3 from '../images/caurosel-img3.png';
import img4 from '../images/caurosel-img4.png';
import img5 from '../images/caurosel-img5.png';
import img6 from '../images/kids wear.png';
import img7 from '../images/beauty.png';
import img8 from '../images/fashion1.png'
import img9 from '../images/accesories.png'
import img10 from '../images/groceries.png'
import img11 from '../images/toys.png'
import img12 from '../images/appliances.png';
import img13 from '../images/new_arrivals.gif';

function HomeComponent() {
    return (
        <div className='fluid-container'>
            <div className='d-flex flex-row justify-content-center'>
                <div className='card-info'>
                    <img src={img9} className='w-75' />
                    <p className='card-names'>  Accessories</p>
                </div>
                <div className='card-info'>
                    <img src={img7} className='w-75' />
                    <p className='card-names'>  Beauty </p>
                </div>
                <div className='card-info'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" className='w-75' />
                    <p className='card-names'>   Electronics </p>
                </div>
                <div className='card-info'>
                    <img src={img8} />
                    <p className='card-names'>   Fashion </p>
                </div>
                <div className='card-info'>
                    <img src={img10} className='w-75' />
                    <p className='card-names'>   Grocery </p>
                </div>
                <div className='card-info'>
                    <img src={img12} className='w-75 p-1' />
                    <p className='card-names'>   Appliances</p>
                </div>
                <div className='card-info'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" className='w-75' />
                    <p className='card-names'>    Mobiles </p>
                </div>
                <div className='card-info'>
                    <img src={img11} className='w-75' />
                    <p className='card-names'>   Toys </p>
                </div>

                <div className='card-info'>
                    <img src={img6} className='w-75' />
                    <p className='card-names'> Kids wear</p>
                </div>

            </div>
            <div >
                <Carousel className="carousalClass">
                    <Carousel.Item >
                        <img
                            className="d-block w-100 carousalImgClass "
                            src={img1}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousalImgClass"
                            src={img2}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousalImgClass"
                            src={img3}
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousalImgClass"
                            src={img4}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousalImgClass"
                            src={img5}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='m-2'>
                <img className="newArrivalGif coloooo" src={img13}></img>
            </div>

            <div className='cards2 d-flex flex-row justify-content-center'>
                <div className='card-info2 m-3'>
                    <img src={img9} className='w-1000' />
                </div>

                <div className='card-info2 m-3'>
                    <img src={img9} className='w-1000' />
                </div>

                <div className='card-info2 m-3'>
                    <img src={img9} className='w-1000' />
                </div>

            </div>



            <div className='cards2 d-flex flex-row justify-content-center'>
                <div className='card-info2 m-3'>
                    <img src={img9} className='w-1000' />
                </div>

                <div className='card-info2 m-3'>
                    <img src={img9} className='w-1000' />
                </div>

                <div className='card-info2 m-3'>
                    <img src={img9} className='w-1000' />
                </div>

            </div>
        </div>
    );
}


export default HomeComponent;