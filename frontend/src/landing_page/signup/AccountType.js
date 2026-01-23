import React from 'react';
function AccountType() {
    return (
        <div className="container p-4">
            <h5 className='text-center mb-5'>Explore different account types</h5>
            <div className="container row">
                <div className="col-4 card border-secondary mb-3 m-3 hover-border-primary" style={{ maxWidth: "15rem", maxHeight: "12rem" }}>
                    <div className="card-body text-secondary">
                        <h5 className="card-title fw-semibold" style={{ fontSize: "0.8rem" }}>Individual Account</h5>
                        <p className="card-text" style={{ fontSize: "0.7rem" }}>Invest in equity, mutual funds and derivatives</p>
                    </div>
                </div>
                <div className="col-4 card border-secondary mb-3 m-3 hover-border-primary" style={{ maxWidth: "15rem", maxHeight: "12rem" }}>
                    <div className="card-body text-secondary">
                        <h5 className="card-title fw-semibold" style={{ fontSize: "0.8rem" }}>HUF account opening</h5>
                        <p className="card-text" style={{ fontSize: "0.7rem" }}>Make tax-efficient investments for your family</p>
                    </div>
                </div>
                <div className="col-4 card border-secondary mb-3 m-3 hover-border-primary" style={{ maxWidth: "15rem", maxHeight: "12rem" }}>
                    <div className="card-body text-secondary">
                        <h5 className="card-title fw-semibold" style={{ fontSize: "0.8rem" }}> NRI Account</h5>
                        <p className="card-text" style={{ fontSize: "0.7rem" }}>Invest in equity, mutual funds, debentures, and more</p>
                    </div>
                </div>
            </div>
            <div className="container row">
                <div className="card border-secondary mb-3 m-3 hover-border-primary" style={{ maxWidth: "15rem", maxHeight: "12rem" }}>
                    <div className="card-body text-secondary">
                        <h5 className="card-title fw-semibold" style={{ fontSize: "0.8rem" }}>Minor Account</h5>
                        <p className="card-text" style={{ fontSize: "0.7rem" }}>Teach your little ones about money & invest for their future with them</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3 m-3 hover-border-primary" style={{ maxWidth: "15rem", maxHeight: "12rem" }}>
                    <div className="card-body text-secondary">
                        <h5 className="card-title fw-semibold" style={{ fontSize: "0.8rem" }}>Corporate / LLP/ Partnership</h5>
                        <p className="card-text" style={{ fontSize: "0.7rem" }}>Manage your business surplus and investments easily</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AccountType;