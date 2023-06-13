import React from 'react'
import "../StyleSheets/AboutUs.css";
export const AboutUs = () => {
    return (

        //                     <div className="d-flex align-content-start flex" style={{ height: "300px" }}>
        //                         <div className="d-flex align-items-start flex-column" >
        //                             <h4 className='content'>Beauty</h4>
        //                             
        //                         </div>
        //                        


        <div className='bg-container'>
            <h3>About us</h3>
            <div className='page-container'>
                <div className="card-container">
                    <div>
                        <img src="https://res.cloudinary.com/dlhx8bf7w/image/upload/v1686638738/fashion_icon_fct794.jpg" alt="/" className='images' />
                    </div>
                    <div className="cards-info" >
                        <h4 >Fashion</h4>
                        <p >Fashion category contains fashionable clothes for men, women and kids. Men's wear includes Formal Suit, Ethnic wear, Shirts, t-shirts, active wear and jeans. Women's wear includes kurthas, jeans, sportwear, formal shirts, trousers and jumpsuits and all kinds of kids wear.  </p>
                    </div>

                    <div className="cards-info" >
                        <h4>Accessories</h4>
                        <p >Accesories category includes handbags for ladies,sunglasses,jewellery and watches for both men and women. </p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dlhx8bf7w/image/upload/v1686640181/accessories-2_puxmfd.jpg" alt="/" className='images' />
                    </div>
                </div>

                <div className="card-container">
                    <div>
                        <img src="https://res.cloudinary.com/dlhx8bf7w/image/upload/v1686642382/footwear-icon_h8shbu.jpg" alt="/" className='images' />

                    </div>
                    <div className="cards-info" >
                        <h4 >Footwear</h4>
                        <p>Footwear category consists of flats, heels and shoes for women and formal and sports shoes for men</p>
                    </div>

                    <div className="cards-info" >
                        <h4 >Electronics</h4>
                        <p >Electronics category has all electronic devices like laptops ,headphones and many more</p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dlhx8bf7w/image/upload/v1686646640/electronics-icon_h8qaa6.jpg" alt="/" className='images' />
                    </div>
                </div>

                <div className="card-container">
                    <div>
                        <img src="https://res.cloudinary.com/dlhx8bf7w/image/upload/v1686646850/appliances-icon_axx6mi.jpg" alt="/" className='images' />
                    </div>
                    <div className="cards-info" >
                        <h4 >Applicanes</h4>
                        <p >Applicanes category has all the home and kitchen appliances like Air conditioner,television,juicer,washing machine,Refrigerator and other kitchen utensils </p>
                    </div>

                    <div className="cards-info" >
                        <h4 >Toys</h4>
                        <p>There will be different types of toys for allage group of children in this Toys category. It includes remote control cars,barbie,kitchen sets and also soft toys </p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dlhx8bf7w/image/upload/v1686647339/toys_icon_lvevxh.webp" alt="/" className='images' />
                    </div>
                </div>

                <div className="card-container-last">
                    <div>
                        <img src="https://res.cloudinary.com/dlhx8bf7w/image/upload/v1686641651/beauty-icon_fdhprb.jpg" alt="/" className='images' />
                    </div>
                    <div className="cards-info" >
                        <h4 >Beauty</h4>
                        <p >Beauty category includes all types of beauty products like face serum , face moisturiser, sunscreen, kajal, mascara and also the product for hair like shampoo, conditioner and hair serum.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutUs;