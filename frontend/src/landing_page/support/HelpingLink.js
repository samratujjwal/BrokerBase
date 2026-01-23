import React from 'react';
function HelpingLink() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-8">
                    <div className="accordion" id="customAccordion">
                        {/* Item 1 */}
                        <div className="accordion-item my-4">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    style={{ padding: "1rem 1rem 1rem 0rem" }}
                                    className="accordion-button d-flex align-items-center collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                >
                                    <div
                                        className="border-end border-bottom text-start d-flex align-items-center"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            bottom: 0,
                                            backgroundColor: "#f7fbfe",
                                            alignSelf: "stretch",
                                            padding: "0 0.75rem",
                                        }}
                                    >
                                        <span><i class="fa-solid fa-circle-plus text-primary"></i></span>
                                    </div>
                                    <span className="fw-semibold ms-5">Account Opening</span>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-primary text-decoration-none">Resident individual</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Minor</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Non Resident Indian (NRI)</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Company, Partnership, HUF and LLP</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Glossary</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="accordion-item my-4 border">
                            <h2 className="accordion-header" id="headingFive">
                                <button
                                    style={{ padding: "1rem 1rem 1rem 0rem" }}
                                    className="accordion-button d-flex align-items-center collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                >
                                    <div
                                        className="border-end border-bottom text-start d-flex align-items-center"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            bottom: 0,
                                            backgroundColor: "#f7fbfe",
                                            alignSelf: "stretch",
                                            padding: "0 0.75rem",
                                        }}
                                    >
                                        <span><i className="fa-regular fa-circle-user text-primary"></i></span>
                                    </div>
                                    <span className="fw-semibold ms-5">Your BrokerBase Account</span>
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-primary text-decoration-none">Your Profile</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Account modification</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Client Master Report (CMR) and Depository Participant (DP)</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Nomination</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Transfer and conversion of securities</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Item 3 */}
                        <div className="accordion-item my-4 border">
                            <h2 className="accordion-header">
                                <button
                                    style={{ padding: "1rem 1rem 1rem 0rem" }}
                                    className="accordion-button d-flex align-items-center collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    <div
                                        className="border-end border-bottom text-start d-flex align-items-center"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            bottom: 0,
                                            backgroundColor: "#f7fbfe",
                                            alignSelf: "stretch",
                                            padding: "0 0.75rem",
                                        }}
                                    >
                                        <span><i class="fa-brands fa-uikit text-primary"></i></span>
                                    </div>
                                    <span className="fw-semibold ms-5">Kite</span>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-primary text-decoration-none">IPO</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Trading FAQs</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Margin Trading Facility (MTF) and Margins</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Charts and orders</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Alerts and Nudges</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">General</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="accordion-item my-4 border">
                            <h2 className="accordion-header">
                                <button
                                    style={{ padding: "1rem 1rem 1rem 0rem" }}
                                    className="accordion-button d-flex align-items-center collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    <div
                                        className="border-end border-bottom text-start d-flex align-items-center"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            bottom: 0,
                                            backgroundColor: "#f7fbfe",
                                            alignSelf: "stretch",
                                            padding: "0 0.75rem",
                                        }}
                                    >
                                        <span><i class="fa-solid fa-circle-notch text-primary"></i></span>
                                    </div>
                                    <span className="fw-semibold ms-5">Console</span>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-primary text-decoration-none">Portfolio</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Corporate actions</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Funds statement</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Reports</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Profile</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Segments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item my-4 border">
                            <h2 className="accordion-header" id="headingSix">
                                <button
                                    style={{ padding: "1rem 1rem 1rem 0rem" }}
                                    className="accordion-button d-flex align-items-center collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix"
                                    aria-expanded="false"
                                    aria-controls="collapseSix"
                                >
                                    <div
                                        className="border-end border-bottom text-start d-flex align-items-center"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            bottom: 0,
                                            backgroundColor: "#f7fbfe",
                                            alignSelf: "stretch",
                                            padding: "0 0.75rem",
                                        }}
                                    >
                                        <span><i class="fa-solid fa-coins text-primary"></i></span>
                                    </div>
                                    <span className="fw-semibold ms-5">Coin</span>
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-primary text-decoration-none">Mutual funds</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">National Pension Scheme (NPS)</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Fixed Deposit (FD)</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Features on Coin</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">Payments and Orders</a></li>
                                        <li><a href="#" className="text-primary text-decoration-none">General</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div style={{ backgroundColor: "#fff4e6", borderLeft: " 1rem solid #ff9000" }} className="row mt-4  p-3 ms-3">
                        <ul>

                            <li><a href="">Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                            <li><a href="">Revision in expiry day of Index and Stock derivatives contracts</a></li>
                        </ul>
                    </div>

                    <div className='mt-3 p-3 border ms-3'>
                        <h6 className='mb-3 ' style={{ width: "100%" }}>Quick Links</h6>
                        <ol>
                            <li ><a className='text-decoration-none fs-5' href="">Track account opening</a></li>
                            <li ><a className='text-decoration-none fs-5 ' href="">Track segment activation</a></li>
                            <li ><a className='text-decoration-none fs-5' href="">Intraday margins</a></li>
                            <li ><a className='text-decoration-none fs-5' href="">Kite user manual</a></li>
                        </ol>
                    </div>
                </div>
            </div>

        </div >

    );
}

export default HelpingLink;