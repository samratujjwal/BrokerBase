import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from "../OpenAccount.js"

function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Pricing />
            <Education />
            <OpenAccount heading="Open a BrokerBase account"
                description="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."
                buttonText="Sign up for free"
            />
        </>
    );
}

export default HomePage;