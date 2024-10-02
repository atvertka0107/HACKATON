import { contracts } from "../../data";
import ContractCard from "../ContractCard/ContractCard";

export default function ContractHistory(){
    let history = contracts.map(function(item){
        return <ContractCard information={item}></ContractCard>
    });
    return history;
}
