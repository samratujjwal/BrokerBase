import React from "react";

export default function AccountOpeningCharges() {
    return (
        <div className="container mb-5">
            <h3 className="mb-3">Charges for account opening</h3>
            <table className="table table-bordered align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Type of account</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Online account</td>
                        <td><span className="badge bg-success">FREE</span></td>
                    </tr>
                    <tr>
                        <td>Offline account</td>
                        <td><span className="badge bg-success">FREE</span></td>
                    </tr>
                    <tr>
                        <td>NRI account (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                    <tr>
                        <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
