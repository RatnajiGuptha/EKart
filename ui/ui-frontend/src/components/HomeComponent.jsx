import React from 'react';
import "../StyleSheets/Home.css"

import HomeCarousels from "./HomePagesComponents/HomeCarousels";
import HomeCategories from "./HomePagesComponents/HomeCategories";
import FashionHomeFilter from './HomePagesComponents/FashionHomeFilter';


function HomeComponent() {
    return (
        <div>
            <HomeCategories />
            <HomeCarousels />
            <FashionHomeFilter />
        </div>
    );
}


export default HomeComponent;