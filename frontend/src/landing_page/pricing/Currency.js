// Currency.js
export default function Currency() {
    return (
        <div className="overflow-x-auto container">
            <table className="min-w-full border border-gray-300 text-sm">
                <thead>
                    <tr className="border bg-gray-100">
                        <th className=" px-4 py-2 text-left"> </th>
                        <th className=" px-4 py-2 text-left">Currency futures</th>
                        <th className=" px-4 py-2 text-left">Currency options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=" px-4 py-2">Brokerage</td>
                        <td className=" px-4 py-2">
                            0.03% or ₹ 20/executed order whichever is lower
                        </td>
                        <td className=" px-4 py-2">₹ 20/executed order</td>
                    </tr>
                    <tr style={{ backgroundColor: "#fbfbfb" }}>
                        <td className=" px-4 py-2">STT/CTT</td>
                        <td className=" px-4 py-2">No STT</td>
                        <td className=" px-4 py-2">No STT</td>
                    </tr>
                    <tr>
                        <td className=" px-4 py-2">Transaction charges</td>
                        <td className=" px-4 py-2">
                            NSE: 0.00035% <br />
                            BSE: 0.00045%
                        </td>
                        <td className=" px-4 py-2">
                            NSE: 0.0311% <br />
                            BSE: 0.001%
                        </td>
                    </tr>
                    <tr style={{ backgroundColor: "#fbfbfb" }}>
                        <td className=" px-4 py-2">GST</td>
                        <td className=" px-4 py-2">
                            18% on (brokerage + SEBI charges + transaction charges)
                        </td>
                        <td className=" px-4 py-2">
                            18% on (brokerage + SEBI charges + transaction charges)
                        </td>
                    </tr>
                    <tr>
                        <td className=" px-4 py-2">SEBI charges</td>
                        <td className=" px-4 py-2">₹10 / crore</td>
                        <td className=" px-4 py-2">₹10 / crore</td>
                    </tr>
                    <tr style={{ backgroundColor: "#fbfbfb" }}>
                        <td className=" px-4 py-2">Stamp charges</td>
                        <td className=" px-4 py-2">0.0001% or ₹10 / crore on buy side</td>
                        <td className=" px-4 py-2">0.0001% or ₹10 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
