import ContractCard from "../ContractCard/ContractCard";

export default function ContractHistory({ contracts, children }){

    let history = contracts ? contracts.map(function(item){
        return <ContractCard information={item}></ContractCard>
    }) : <></>;
    return (
        <>
        {history}
        {children}
        </>
    ); 
}
