import React from 'react';
function Hero() {
    return (
        <div className="container">
            <div className="row text-center p-5 m-4">
                <h1 className='fs-3'>Charges</h1>
                <p className='fs-4'>List of all charges and taxes</p>
            </div>
            <div className="row">
                <div className="col-4 text-center p-3">
                    <img src="./media/images/pricing0.svg" alt="" className='p-5' />
                    <h2 className='fs-4 mb-3 '>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 text-center p-3">
                    <img src="./media/images/intradayTrades.svg" alt="" className='p-5' />
                    <h2 className='fs-4 mb-3'>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 text-center p-3">
                    <img src="./media/images/pricing0.svg" alt="" className='p-5' />
                    <h2 className='fs-4 mb-3'>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;