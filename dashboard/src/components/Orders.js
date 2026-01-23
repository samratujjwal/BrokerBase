import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Orders = () => {
    let [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        // axios.get("https://brokerbase.onrender.com/allOrders").then((res) => {
        //     setAllOrders(res.data);
        // });
        axios.get("http://localhost:3002/allOrders").then((res) => {
            setAllOrders(res.data);
        });
    });
    return (
        <>
            <h3 className="title">Orders ({allOrders.length})</h3>

            <div className="order-table">
                <table>
                    <tr>
                        <th>Product</th>
                        {/* <th>Instrument</th> */}
                        <th>Qty.</th>
                        <th>Price</th>
                        <th>Mode</th>
                        {/* <th>P&L</th>
                        <th>Chg.</th> */}

                    </tr>
                    {allOrders.map((stock, index) => {
                        return (
                            <tr key={index} >
                                <td>{stock.name}</td>
                                {/* <td>{stock.name}</td> */}
                                <td>{stock.qty}</td>
                                <td>{stock.price}</td>
                                <td>{stock.mode}</td>
                                {/* <td className={profClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                                <td className={dayClass}>{stock.day}</td> */}
                            </tr>
                        )
                    })}

                </table>
            </div>
            <Link to={"/"} className="btn">
                Buy More stocks
            </Link>
        </>

    );
};

export default Orders;