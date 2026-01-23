import React, { useState, forwardRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Signup from "./Singnup";
import Login from "./Login";

const Hero = forwardRef((props, ref) => {
    const [activeForm, setActiveForm] = useState('signup');
    //const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const verifyCookie = async () => {
            // console.log("All cookies:", cookies);
            // console.log("Token cookie:", cookies.token);
            // console.log("Document cookies:", document.cookie);
            if (!cookies.token) {
                setIsLogin(false);
                setIsLoading(false);
                return;
            }

            try {
                const { data } = await axios.post(
                    //"https://brokerbase.onrender.com/verify",
                    "http://localhost:3002/verify",
                    {},
                    { withCredentials: true }
                );
                console.log("Verify data:", data)
                const { status, user } = data;
                console.log("Data:", data)
                setIsLogin(status);
                setUsername(user);
                if (status) {
                    toast(`Hello ${user} BrokerBase Welcome u`, {
                        position: "top-right",
                    });
                } else {
                    removeCookie("token");
                    //navigate("/signup");
                }
            } catch (err) {
                console.error(err);
                removeCookie("token");
                //navigate("/signup");
                setIsLogin(false);
                setUsername("");
            } finally {
                setIsLoading(false);
            }
        };
        //verifyCookie();
        setTimeout(async () => {
            console.log("Rechecking authentication after login...");
            await verifyCookie();
        }, 100);
    }, [cookies.token]);

    const handleLoginSuccess = async () => {
        console.log("handleLoginSuccess function triggered !");

        try {
            const { data } = await axios.post(
                //"https://brokerbase.onrender.com/verify",
                "http://localhost:3002/verify",
                {},
                { withCredentials: true }
            );
            console.log("Backend data:", data);
            const { status, user } = data;
            console.log("inside try block Status:", status)
            setIsLogin(status);
            setUsername(user);
            if (status) {
                toast(`Hello ${user} BrokerBase Welcome u`, {
                    position: "top-right",
                });
            }
        } catch (err) {
            console.error(err);
            setIsLogin(false);
            removeCookie("token");
        }
    };

    const Logout = () => {
        removeCookie("token");
        setIsLogin(false);
        setUsername("")
        //navigate("/signup");
    };
    const options = [
        {
            title: "Stocks",
            description: "Invest in all exchange-listed securities",
            img: "./media/images/stocks.svg",
        },
        {
            title: "Mutual funds",
            description: "Invest in commission-free direct mutual funds",
            img: "./media/images/mutualFund.svg",
        },
        {
            title: "IPO",
            description: "Apply to the latest IPOs instantly via UPI",
            img: "./media/images/ipo.svg",
        },
        {
            title: "Futures & options",
            description:
                "Hedge and mitigate market risk through simplified F&O trading",
            img: "./media/images/features.svg",
        },
    ];
    const handleClick = () => {
        if (isLoggedIn) {
            window.open('http://localhost:3001/', '_blank');
        } else {
            alert('You must be logged in to access this page.');
        }
    };
    console.log("Loading:", isLoading, "LoggedIn:", isLoggedIn, "User:", username);

    if (isLoading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container">
            <section ref={ref}>
                <div className='text-center mt-5  p-5'>
                    <h3 className='mb-3'>Open a free demat and trading account online</h3>
                    <p className='fs-6'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                </div>
                <div className="row mb-5">
                    <div className="col-7 p-5" >
                        <img style={{ width: "80%", marginLeft: "6rem" }} src="./media/images/signup.png" alt="Signup" />
                    </div>
                    <div className="col-5 p-5">
                        {!isLoggedIn ? (
                            <>
                                <div className="d-flex justify-content-around mb-4">
                                    <h4
                                        className={`cursor-pointer ${activeForm === 'signup' ? 'text-primary border-bottom border-2 border-primary' : 'text-muted'}`}
                                        style={{ cursor: 'pointer', marginLeft: "-6.5rem" }}
                                        onClick={() => setActiveForm('signup')}
                                    >
                                        Signup
                                    </h4>
                                    <h4
                                        className={`cursor-pointer ${activeForm === 'login' ? 'text-primary border-bottom border-2 border-primary' : 'text-muted'}`}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setActiveForm('login')}
                                    >
                                        Login
                                    </h4>
                                </div>

                                {activeForm === 'signup' ? (
                                    <Signup onLoginSuccess={() => handleLoginSuccess()} />
                                ) : (
                                    <Login onLoginSuccess={() => handleLoginSuccess()} />
                                )}

                                <p style={{ fontSize: "10px" }}>
                                    By proceeding, you agree to the BrokerBase terms & privacy policy
                                </p>
                            </>
                        ) : (
                            <div className="text-center">
                                <h4 className="text-success mb-3">You are logged in</h4>
                                <button className="btn btn-primary mb-3" onClick={handleClick}>
                                    Go to Dashboard
                                </button>
                                <br />
                                <button className="btn btn-danger" onClick={Logout}>LOGOUT</button>
                                <ToastContainer />
                            </div>

                        )
                        }
                    </div>
                </div>

                <div className="container text-center my-5 mt-5">
                    <h4 className="mb-5">
                        Investment options with <span className="fw-bold">BrokerBase demat account</span>
                    </h4>

                    <div className="row g-5  mb-5">
                        {options.map((item, index) => (
                            <div key={index} className="col-md-6 d-flex align-items-start">
                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    width="60"
                                    height="60"
                                    className="me-3"
                                />
                                {/* Text */}
                                <div className="text-start">
                                    <h5 className="fw-semibold">{item.title}</h5>
                                    <p className="text-muted mb-0">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="btn btn-primary px-4 py-2">
                        Explore Investments
                    </button>

                </div>
            </section>
        </div>
    );
});

export default Hero;