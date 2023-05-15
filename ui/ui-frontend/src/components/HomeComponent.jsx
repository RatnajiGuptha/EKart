import React from 'react';


import HomeCarousels from "./HomePagesComponents/HomeCarousels";
import HomeCategories from "./HomePagesComponents/HomeCategories";
import FashionHomeFilter from './HomePagesComponents/FashionHomeFilter';
import FooterComponent from './FooterComponent';


function HomeComponent() {
    return (
        <div>
            <HomeCategories />
            <HomeCarousels />
            <FashionHomeFilter />
            <FooterComponent />
        </div>
    );
}


export default HomeComponent;