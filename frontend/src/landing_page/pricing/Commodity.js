// Commodity.js
export default function Commodity() {
    return (
        <div className="overflow-x-auto container">
            <table className="min-w-full border border-gray-300 text-sm">
                <thead>
                    <tr className="border bg-gray-100">
                        <th className="px-4 py-2 text-left"> </th>
                        <th className="px-4 py-2 text-left">Commodity futures</th>
                        <th className="px-4 py-2 text-left">Commodity options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2">Brokerage</td>
                        <td className="px-4 py-2">
                            0.03% or Rs. 20/executed order whichever is lower
                        </td>
                        <td className="px-4 py-2">₹ 20/executed order</td>
                    </tr>
                    <tr style={{ backgroundColor: "#fbfbfb" }}>
                        <td className="px-4 py-2">STT/CTT</td>
                        <td className="px-4 py-2">0.01% on sell side (Non-Agri)</td>
                        <td className="px-4 py-2">0.05% on sell side</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Transaction charges</td>
                        <td className="px-4 py-2">
                            MCX: 0.0021% <br />
                            NSE: 0.0001%
                        </td>
                        <td className="px-4 py-2">
                            MCX: 0.0418% <br />
                            NSE: 0.001%
                        </td>
                    </tr>
                    <tr style={{ backgroundColor: "#fbfbfb" }}>
                        <td className="px-4 py-2">GST</td>
                        <td className="px-4 py-2">
                            18% on (brokerage + SEBI charges + transaction charges)
                        </td>
                        <td className="px-4 py-2">
                            18% on (brokerage + SEBI charges + transaction charges)
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">SEBI charges</td>
                        <td className="px-4 py-2">
                            Agri: <br /> ₹1 / crore <br />
                            Non-agri: <br /> ₹10 / crore
                        </td>
                        <td className="px-4 py-2">₹10 / crore</td>
                    </tr>
                    <tr style={{ backgroundColor: "#fbfbfb" }}>
                        <td className="px-4 py-2">Stamp charges</td>
                        <td className="px-4 py-2">0.002% or ₹200 / crore on buy side</td>
                        <td className="px-4 py-2">0.003% or ₹300 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
