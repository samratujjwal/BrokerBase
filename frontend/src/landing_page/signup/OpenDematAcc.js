import React from 'react';
function OpenDematAcc() {
    return (
        <div className='p-2' style={{ backgroundColor: "#fafafa" }}>
            <div className='container'>
                <h5 className="text-center mt-5 mb-5">Steps to open a demat account with BrokerBase</h5>
                <div className="row justify-content-center align-items-center">

                    <div className="col-4 mx-5">
                        <img src="./media/images/steps.svg" alt="Steps" />
                    </div>
                    <div className="col-4 mx-5">
                        <p className='border-bottom mb-4 py-2 fw-bold' style={{ fontSize: "12px" }}><span className='border border-rounded mx-2'>01</span>Enter the requested details</p>
                        <p className='border-bottom mb-4 py-2 fw-bold' style={{ fontSize: "12px" }}><span className='border border-rounded mx-2'>02</span>Complete e-sign & verification</p>
                        <p className='border-bottom mb-4 py-2 fw-bold' style={{ fontSize: "12px" }}><span className='border border-rounded mx-2'>03</span>Start investing!</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default OpenDematAcc;