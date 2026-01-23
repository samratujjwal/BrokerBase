import React, { useRef } from 'react';
import Hero from './Hero.js';
import OpenDematAcc from './OpenDematAcc.js';
import Benefits from './Benefits.js';
import AccountType from './AccountType.js';
import FAQs from './FAQs.js';
import OpenAccount from '../OpenAccount.js'
function Signup() {
    const signupRef = useRef(null);

    const scrollToSignup = () => {
        if (signupRef.current) {
            signupRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <Hero ref={signupRef} />
            <OpenDematAcc />
            <Benefits />
            <AccountType />
            <FAQs />
            <OpenAccount heading="Open a BrokerBase account"
                description="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."
                buttonText="Sign up for free"
                onButtonClick={scrollToSignup}
            />
        </>
    );
}

export default Signup;