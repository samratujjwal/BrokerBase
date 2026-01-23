import React from 'react';
import "../CustomStyle.css"
function Education() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="../media/images/education.svg" alt="Variety" />
                </div>
                <div className="col-md-6 mt-5">
                    <h3 className='mb-4'>Free and open market education</h3>
                    <p className='mb-4'>Varsity, the largest online stock market
                        education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{ textDecoration: "none" }}>Varsity <i class="fa-solid fa-arrow-right fa-sm"></i></a>
                    <p className='mt-5 mb-4'>TradingQ&A, the most active trading and investment
                        community in India for all your market related queries.</p>
                    <a href="" style={{ textDecoration: "none" }}>TradingQ&A <i class="fa-solid fa-arrow-right fa-sm"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;