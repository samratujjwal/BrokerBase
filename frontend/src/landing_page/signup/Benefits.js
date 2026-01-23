import React from 'react';
function Benefits() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-4 text-center py-5  ">
                    <img style={{ width: "80%" }} src="./media/images/benefits.svg" alt="Benefits" />
                    <h5 style={{ fontSize: "1rem" }}>Benefits of opening a BrokerBase demat account</h5>
                </div>
                <div className="col-6 p-5">
                    <h5 style={{ fontSize: "1rem" }}>Unbeatable pricing</h5>
                    <p style={{ fontSize: "0.8rem" }}>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                    <h5 style={{ fontSize: "1rem" }}>Best investing experience</h5>
                    <p style={{ fontSize: "0.8rem" }}>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                    <h5 style={{ fontSize: "1rem" }}>No spam or gimmicks</h5>
                    <p style={{ fontSize: "0.8rem" }}>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                    <h5 style={{ fontSize: "1rem" }}>The BrokerBase universe</h5>
                    <p style={{ fontSize: "0.8rem" }}>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;