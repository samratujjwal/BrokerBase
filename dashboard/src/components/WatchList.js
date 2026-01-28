import React, { useState, useContext, useEffect } from "react";
import api from "../api/axios";
import { Tooltip, Grow } from "@mui/material";
import GeneralContext from "./GeneralContext";
import { KeyboardArrowUp, KeyboardArrowDown, BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import DoughnutChart from "./DoughnutChar";
const WatchList = () => {
    let [allWatchlist, setAllWatchlist] = useState([]);

    useEffect(() => {
        
        api.get("/allWatchlist").then((res) => {
            setAllWatchlist(res.data);
        });
    }, []);

    const labels = allWatchlist.map((subArray) => subArray["name"]);
    const data = {
        labels,
        datasets: [
            {
                label: "Price",
                data: allWatchlist.map((stock) => stock.price),
                backgroundColor: [
                    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF",
                    "#FF9F40", "#C9CBCF", "#8BC34A", "#E91E63", "#00ACC1",
                    "#F44336", "#9C27B0", "#3F51B5", "#03A9F4", "#009688",
                    "#CDDC39", "#FFC107", "#FF5722", "#795548", "#607D8B",
                    "#D32F2F", "#7B1FA2", "#303F9F", "#0288D1", "#00796B",
                    "#AFB42B", "#FFA000", "#E64A19", "#5D4037", "#455A64",
                    "#BA68C8", "#7986CB", "#4DD0E1", "#81C784", "#DCE775",
                    "#FFD54F", "#FF8A65", "#A1887F", "#90A4AE", "#F06292",
                    "#9575CD", "#64B5F6", "#4DB6AC", "#AED581", "#FFF176",
                    "#FFB74D", "#A1887F", "#B0BEC5", "#EC407A", "#7E57C2"
                ]
                ,
                hoverOffset: 4,
            }
        ]
    }
   
    return (
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                    className="search"
                />
                <span className="counts"> {allWatchlist.length}/ 50</span>
            </div>

            <ul className="list">
                {allWatchlist.map((stock, index) => {
                    return <WatchListItems stock={stock} key={index} />
                })}
            </ul>
            <h5 className="text-center text-muted">Watchlist Representation</h5>
            <DoughnutChart data={data} />
        </div>
    );
};

export default WatchList;

const WatchListItems = ({ stock, key }) => {
    const [showWatchListActions, setShowWatchListActions] = useState(false);

    const handleMouseEnter = (e) => {
        setShowWatchListActions(true);
    }
    const handleMouseExit = (e) => {
        setShowWatchListActions(false);
    }

    return (
        <li key={key} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDown className="down" />
                    ) : <KeyboardArrowUp className="down" />
                    }
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatchListActions && <WatchListActions uid={stock.name} />}
        </li>
    )
}

const WatchListActions = ({ uid }) => {
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
        generalContext.openBuyWindow(uid);
    };

    return (
        <span className="actions">
            <span>
                <Tooltip
                    title="Buy (B)"
                    placement="top"
                    arrow
                    TransitionComponent={Grow}
                    onClick={handleBuyClick}
                >
                    <button className="buy">Buy</button>
                </Tooltip>
                <Tooltip
                    title="Sell (S)"
                    placement="top"
                    arrow
                    TransitionComponent={Grow}
                >
                    <button className="sell">Sell</button>
                </Tooltip>
                <Tooltip
                    title="Analytics (A)"
                    placement="top"
                    arrow
                    TransitionComponent={Grow}
                >
                    <button className="action">
                        <BarChartOutlined className="icon" />
                    </button>
                </Tooltip>
                <Tooltip
                    title="More"
                    placement="top"
                    arrow
                    TransitionComponent={Grow}
                >
                    <button className="btn-secondary " style={{ fontSize: "0.8rem" }}>
                        <MoreHoriz />
                    </button>
                </Tooltip>

            </span>
        </span>
    )
}
