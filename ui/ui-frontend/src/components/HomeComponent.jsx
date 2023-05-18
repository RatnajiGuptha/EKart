import React from 'react';

import HomeCarousels from "./HomePagesComponents/HomeCarousels";
import HomeCategories from "./HomePagesComponents/HomeCategories";
import FashionHomeFilter from './HomePagesComponents/FashionHomeFilter';
import FashionHomeFilterSample from './HomePagesComponents/FashionHomeFilterSample';

import FooterComponent from './FooterComponent';


function HomeComponent() {
    return (
        <div>
            <HomeCategories />
            <HomeCarousels />
            <FashionHomeFilter />
            <FashionHomeFilterSample />

            <FooterComponent />
        </div>
    );
}


export default HomeComponent;