function RightSection({ head, para, img }) {
    return (
        <div className="container">
            <div className="row mt-3 ">
                <div className="col-4 p-5 mt-4">
                    <h2 className="mt-5 fs-3 mb-3">{head}</h2>
                    <p className="lh-lg">{para}</p>
                    <div className="row">
                        <div className="col-6"><a href="" style={{ textDecoration: "none", fontWeight: "400" }}>Learn more <i class="fa-solid fa-arrow-right"></i> </a>
                        </div>

                    </div>
                </div>
                <div className="col-8 ">
                    <img src={img} alt="Kite" style={{ width: "80%", marginLeft: "4rem" }} />
                </div>
            </div>
        </div>
    );
}
export default RightSection;