import React from 'react';
import "../CustomStyle.css"
function Pricing() {
    let stylec = {
        padding: "0px 50px 120px 50px"
    }
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className=" col-md-6 mb-4 mb-md-0">
                    <h3>Unbeatable pricing</h3>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                        See Pricing <i className="fa-solid fa-arrow-right fa-sm"></i>
                    </a>
                </div>

                <div className=" col-md-6">
                    <div className="row">

                        <div className="col-4">
                            <img style={{ width: "120px" }} src="../media/images/pricing0.svg" alt="" />
                            <p className='overlay-text' >Free Account Openning</p>
                        </div>
                        <div className="col-4">
                            <img style={{ width: "120px" }} src="../media/images/pricingEquity.svg" alt="" />
                            <p className="overlay-text">Free equity delivery
                                and direct mutual funds</p>
                        </div>
                        <div className="col-4">
                            <img style={{ width: "120px" }} src="../media/images/intradayTrades.svg" alt="" />
                            <p className="overlay-text">Intraday and
                                F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;