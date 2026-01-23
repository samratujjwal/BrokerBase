import React from 'react';
import "../CustomStyle.css"
function Awards() {

    return (
        <div className="container p-5" >
            <div className='row '>
                <div className="col-6 p-5">
                    <h1 className='fs-3 mb-5 fw-medium' >Trust with confidence</h1>
                    <div className='mb-4'>
                        <h2 className='fs-4 opacity=50' >Customer-first always</h2>
                        <p >That's why 1.6+ crore customers trust BrokerBase with ~ ₹6 lakh crores of equity
                            investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='fs-4 opacity=50' >No spam or gimmicks</h2>
                        <p >No gimmicks, spam, "gamification", or annoying push notifications.
                            High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='fs-4 opacity=50' >The BrokerBase universe</h2>
                        <p >Not just an app, but a whole ecosystem.
                            Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='fs-4 opacity=50' >Do better with money</h2>
                        <p >With initiatives like Nudge and Kill Switch, we don't just facilitate transactions,
                            but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-6 mt-5 mb-5">
                    <img src="..\media\images\ecosystem.png" alt="" style={{ maxWidth: "100%", width: "auto" }} />
                    <div className="container d-flex justify-content-between">
                        <a href="" style={{ textDecoration: "none" }}>Explore our products &nbsp;<i class="fa-solid fa-arrow-right fa-sm"></i></a>
                        <a href="" style={{ textDecoration: "none" }}>Try Kite demo &nbsp;<i class="fa-solid fa-arrow-right fa-sm"></i></a>
                    </div>
                </div>
            </div>
            <div className="row mb-3 ">
                <div className='text-center'>
                    <a href=""><img src="../media/images/pressLogos.png" alt="" /></a>
                </div>
            </div>
        </div>
    );
}

export default Awards;