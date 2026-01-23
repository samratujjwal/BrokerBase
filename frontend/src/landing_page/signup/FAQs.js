import React from 'react';

function FAQs() {
    return (
        <div className="container my-5">
            <h4 className="mb-4">FAQs</h4>
            <div className="accordion accordion-flush" id="accordionExample">


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            What is a BrokerBase account?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            A BrokerBase account is a combined demat and trading account that
                            allows investors to buy, sell, and hold securities digitally.
                        </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            What documents are required to open a demat account?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <p>The following documents are required to open a BrokerBase account online:</p>
                            <ul>
                                <li>PAN number</li>
                                <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
                                <li>Cancelled cheque or bank account statement (To link your bank account)</li>
                                <li>Income proof (Required only if you wish to trade in Futures & options)</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Is BrokerBase account opening free?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            Yes, It is completely free.
                        </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button collapsed fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            Are there any maintenance charges for a demat account?
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            The account maintenance charges are applicable based on the account type.
                            <br />
                            <strong>For Basic Services Demat Account:</strong> Zero charges if the holding value is less than ₹4,00,000.
                            <br />
                            <strong>For non-Basic Services Demat Account:</strong> ₹300 per year + GST.
                            <br />
                            To learn more about BSDA,{" "}
                            <a href="#" style={{ textDecoration: "none" }}>
                                Click here
                            </a>.
                        </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button
                            className="accordion-button collapsed fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                        >
                            Can I open a demat account without a bank account?
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            To open a demat account, you must have a bank account in your name.
                            If UPI verification is completed successfully, no proof of bank is needed.
                            However, if bank verification fails, you'll need to provide either a cancelled
                            cheque or a bank statement to link your bank account to BrokerBase.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FAQs;
