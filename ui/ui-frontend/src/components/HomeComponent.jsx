import React, { Component } from 'react';
import '../StyleSheets/Home.css'
import Carousel from 'react-bootstrap/Carousel';


function HomeComponent() {
    return (
        <div className='fluid-container'>
            <div className='d-flex flex-row justify-content-center'>
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280111/accesories_yqpt8o.png" className='w-75' />
                    <p className='card-names'>  Accessories</p>
                </div>
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280205/beauty_rbw6fv.png" className='w-75' />
                    <p className='card-names'>  Beauty </p>
                </div>
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522149/electronics_yjk1bl.webp" className='w-75' />
                    <p className='card-names'>   Electronics </p>
                </div>
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683279944/fashion1_drwetu.png" />
                    <p className='card-names'>   Fashion </p>
                </div>
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280292/groceries_xwmz5e.png" className='w-75' />
                    <p className='card-names'>   Grocery </p>
                </div>
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280343/appliances_zxbxbl.png" className='w-75 p-1' />
                    <p className='card-names'>   Appliances</p>
                </div>
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683523235/mobiles_s5p07b.webp" className='w-75' />
                    <p className='card-names'>    Mobiles </p>
                </div>
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280398/toys_zyfzq2.png" className='w-75' />
                    <p className='card-names'>   Toys </p>
                </div>

                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280396/kids_wear_xgdhkr.png" className='w-75' />
                    <p className='card-names'> Kids wear</p>
                </div>

            </div>
            <div >
                <Carousel className="carousalClass">
                    <Carousel.Item >
                        <img
                            className="d-block w-100 carousalImgClass "
                            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522373/caurosel-img1_qzq725.png"
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
                            src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522374/caurosel-img4_kcomga.png"
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

            <div className='m-2'>
                <img className="newArrivalGif coloooo" src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522925/new_arrivals_ceoifa.gif"></img>
            </div>

            <div className='cards2 d-flex flex-row justify-content-center'>
                <div className='card-info2 m-3'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280111/accesories_yqpt8o.png" className='w-1000' />
                </div>

                <div className='card-info2 m-3'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280111/accesories_yqpt8o.png" className='w-1000' />
                </div>

                <div className='card-info2 m-3'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280111/accesories_yqpt8o.png" className='w-1000' />
                </div>

            </div>



            <div className='cards2 d-flex flex-row justify-content-center'>
                <div className='card-info2 m-3'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280111/accesories_yqpt8o.png" className='w-1000' />
                </div>

                <div className='card-info2 m-3'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280111/accesories_yqpt8o.png" className='w-1000' />
                </div>

                <div className='card-info2 m-3'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683279566/toys_okyi0r.png" className='w-1000' />
                </div>

            </div>
        </div>
    );
}


export default HomeComponent;