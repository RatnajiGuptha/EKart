import React, { Component } from 'react';
import '../StyleSheets/Home.css'

import HomeCarousels from './HomeCarousels';
import HomeCategories from './HomeCategories';
import HomeTopPicks from './HomeTopPicks';


function HomeComponent() {
    return (
        <div>
            <HomeCategories />
            <HomeCarousels />
            <HomeTopPicks />
        </div>
    );
}


export default HomeComponent;