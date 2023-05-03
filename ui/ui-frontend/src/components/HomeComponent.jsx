import React, { Component } from 'react';
import '../StyleSheets/Home.css'

class HomeComponent extends Component {
    render() {
        return (
            <div className='fluid-container'>  
               <div className='d-flex '>
                <div className='card-info m-2'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" className='w-75'/>
                    <p className='card-names'>   Applications</p>
                </div>
                <div className='cd-3 card-info m-2'>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" className='w-75'/>
                    <p className='card-names'>   Beauty </p>
                </div>
                <div className='cd-3 card-info m-2'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" className='w-75'/>
                    <p className='card-names'>  Electronics </p>
                </div>
                <div className='cd-3 card-info m-2'>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" className='w-75'/>
                    <p className='card-names'>   Fashion </p>
                </div>
                <div className='cd-3 card-info m-2'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" className='w-75'/>
                    <p className='card-names'>   Grocery </p>
                </div>
                <div className='cd-3 card-info m-2'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" className='w-75 p-1'/>
                    <p className='card-names'>   Home </p>
                </div>
                <div className='cd-3 card-info m-2'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" className='w-75'/>
                    <p className='card-names'>   Mobiles </p>
                </div>
                <div className='cd-3 card-info m-2'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" className='w-75'/>
                    <p className='card-names'>   Toys </p>
                </div>
                
                
               

               </div>
            </div>
        );
    }
}

export default HomeComponent;