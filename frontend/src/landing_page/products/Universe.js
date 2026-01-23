function Universe() {
    return (
        <div className="container mt-4">
            <h3 className="text-center fs-5 lh-lg">The BrokerBase Universe</h3>
            <p className="text-center lh-lg mb-4">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row">
                <div className="col-4">
                    <div className="row p-3 mx-3">
                        <img className="px-5" src="./media/images/zerodhaFundhouse.png" alt="" />
                        <p className="text-center mt-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="row p-4 mx-3">
                        <img className="px-5" src="./media/images/streakLogo.png" alt="" />
                        <p className="text-center mt-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row p-4 mx-3">
                        <img className="px-5" src="./media/images/sensibullLogo.svg" alt="" />
                        <p className="text-center mt-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className="row p-4 mx-3">
                        <img className="px-5" src="./media/images/smallcaseLogo.png" alt="" />
                        <p className="text-center mt-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row p-4 mx-3">
                        <img className="px-5" src="./media/images/tijori.svg" alt="" />
                        <p className="text-center mt-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.</p>
                    </div>
                    <div className="row p-4 mx-3">
                        <img className="px-5" src="./media/images/dittoLogo.png" alt="" />
                        <p className="text-center mt-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.</p>
                    </div>
                </div>
            </div>
            <div className="text-center mb-5">
                <button className="btn btn-primary ">Signup for Free!</button>
            </div>
        </div>
    );
}

export default Universe;