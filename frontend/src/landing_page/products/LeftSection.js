function LeftSection({ head, para, img }) {
    return (
        <div className="container">
            <div className="row mt-3 ">
                <div className="col-8 p-5">
                    <img src={img} alt="Kite" style={{ width: "70%" }} />
                </div>
                <div className="col-4 p-4 ">
                    <h2 className="mt-5 fs-3 mb-3">{head}</h2>
                    <p className="lh-lg">{para}</p>
                    <div className="row">
                        <div className="col-6"><a href="" style={{ textDecoration: "none", fontWeight: "400" }}>Try demo <i class="fa-solid fa-arrow-right"></i> </a>
                            <br />
                            <a href=""><img src="./media/images/googlePlayBadge.svg" alt="PlayStore" className="mt-4 p-2" /></a>
                        </div>
                        <div className="col-6"><a href="" style={{ textDecoration: "none", fontWeight: "400" }}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                            <br />
                            <a href=""><img src="./media/images/appstoreBadge.svg" alt="" className="mt-4 py-2" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;