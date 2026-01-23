// PricingPage.js
import { useState } from "react";
import Equity from "./Equity";
import Currency from "./Currency";
import Commodity from "./Commodity";

export default function CombinedTableData() {
    const [activeTab, setActiveTab] = useState("Equity");
    const tabs = ["Equity", "Currency", "Commodity"]
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="container my-5">
            {/* Tabs Header */}
            <div className="d-flex gap-4 border-bottom pb-2">
                {tabs.map((tab) => (
                    <button
                        style={{ all: "unset" }}
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        className={`btn p-0  fs-4 fw-semibold 
              ${activeTab === tab ? "text-muted border-bottom border-3 border-primary" : "text-primary"}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === "Equity" && <Equity />}
                {activeTab === "Currency" && <Currency />}
                {activeTab === "Commodity" && <Commodity />}
            </div>
        </div>
    );
}
