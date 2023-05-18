import React from 'react';

import HomeCarousels from "./HomePagesComponents/HomeCarousels";
import HomeCategories from "./HomePagesComponents/HomeCategories";

import ProductsFilterComponent from "../components/HomePagesComponents/ProductsFilterComponent";

import FooterComponent from './FooterComponent';


function HomeComponent() {
    return (
        <div>
            <HomeCategories />
            <HomeCarousels />
            <ProductsFilterComponent />
            <FooterComponent />
        </div>
    );
}


export default HomeComponent;