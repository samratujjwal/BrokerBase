import React from 'react';
import OpenAccount from '../OpenAccount';
function Hero() {
    let stylep = { color: "#666" }
    return (
        <div className='container p-5 '>
            <div className='row text-center'>
                <img src="../media/images/homeHero.png" alt="" className='mb-4' />

                <OpenAccount heading="Invest in everything"
                    description="Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more."
                    buttonText="Sign up for free" />
            </div>
        </div>
    );
}

export default Hero;