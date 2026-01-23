import React from "react";

// Equity.js
export default function Equity() {
    return (
        <div className="container">
            <table className="table  align-middle">
                <thead>
                    <tr className="border bg-light">
                        <th className=" "> </th>
                        <th className=" ">Equity delivery</th>
                        <th className=" ">Equity intraday</th>
                        <th className=" ">F&amp;O - Futures</th>
                        <th className=" ">F&amp;O - Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="">Brokerage</td>
                        <td className="">Zero Brokerage</td>
                        <td className="">0.03% or Rs. 20/executed order whichever is lower</td>
                        <td className="">0.03% or Rs. 20/executed order whichever is lower</td>
                        <td className="">Flat Rs. 20 per executed order</td>
                    </tr>
                    <tr style={{ backgroundColor: "#fbfbfb" }}>
                        <td className="">STT/CTT</td>
                        <td className="">0.1% on buy &amp; sell</td>
                        <td className="">0.025% on the sell side</td>
                        <td className="">0.02% on the sell side</td>
                        <td className="">
                            <ul className="">
                                <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                                <li>0.1% on sell side (on premium)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="">Transaction charges</td>
                        <td className="">
                            NSE: 0.00297% <br />
                            BSE: 0.00375%
                        </td>
                        <td className="">
                            NSE: 0.00297% <br />
                            BSE: 0.00375%
                        </td>
                        <td className="">
                            NSE: 0.00173% <br />
                            BSE: 0
                        </td>
                        <td className="">
                            NSE: 0.03503% (on premium) <br />
                            BSE: 0.0325% (on premium)
                        </td>
                    </tr>
                    <tr style={{ backgroundColor: "#fbfbfb" }}>
                        <td className="">GST</td>
                        <td className="">18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td className="">18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td className="">18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td className="">18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <td className="">SEBI charges</td>
                        <td className="">₹10 / crore</td>
                        <td className="">₹10 / crore</td>
                        <td className="">₹10 / crore</td>
                        <td className="">₹10 / crore</td>
                    </tr>
                    <tr style={{ backgroundColor: "#fbfbfb" }}>
                        <td className="">Stamp charges</td>
                        <td className="">0.015% or ₹1500 / crore on buy side</td>
                        <td className="">0.003% or ₹300 / crore on buy side</td>
                        <td className="">0.002% or ₹200 / crore on buy side</td>
                        <td className="">0.003% or ₹300 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
