import AccountOpeningCharges from "./AccountOpeningCharges";
import ChargeExplained from "./ChargeExplained";
import CombinedTableData from "./CombinedTableData";
import DematAMC from "./DematAMC";
import Hero from "./Hero";
import ValueAddedCharges from "./ValueAddedCharges";

function PricingPage() {
    return (
        <>
            <Hero />
            <CombinedTableData />
            <AccountOpeningCharges />
            <DematAMC />
            <ValueAddedCharges />
            <ChargeExplained />
        </>
    );
}

export default PricingPage;