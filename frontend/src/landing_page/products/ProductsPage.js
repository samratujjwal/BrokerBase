import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSection head="Kite" img="./media/images/kite.png" para="Our ultra-fast flagship trading platform with streaming market data,
             advanced charts, an elegant UI, and more. 
             Enjoy the Kite experience seamlessly on your Android and iOS devices."/>
            <RightSection head="Console" img="./media/images/console.png" para="The central dashboard for your BrokerBase account. Gain insights into your trades and investments with in-depth reports and visualisations." />
            <LeftSection head="Coin" img="./media/images/coin.png" para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." />
            <RightSection head="Kite Connect API" img="./media/images/kiteconnect.png" para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." />
            <LeftSection head="Varsity mobile" img="./media/images/varsity.png" para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." />
            <div className="container">
                <p className='text-center fs-5 mt-2 mb-4'>Want to know more about our technology stack? Check out the <a href="" style={{ textDecoration: "none" }}>BrokerBase.tech</a> blog.</p>
            </div>
            <Universe />
        </>
    );
}

export default ProductsPage;