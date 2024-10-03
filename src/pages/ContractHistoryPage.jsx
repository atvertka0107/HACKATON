import ContractHistory from "../components/ContractHistory/ContractHistory";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import api from '../agentApi';
import React, { useState, useEffect } from 'react';


export default function ContractHistoryPage(){
    const [contracts, setContracts] = useState();

    useEffect(() => {
        const fetchContracts = async () => {
            const fetchedContracts = await api.getContracts();
            setContracts(fetchContracts);
        };
        fetchContracts();
    }, []);

    return(
        <>
            <Header />
            <MainContainer text='История договоров'>
                <ContractHistory contracts={contracts}/>
            </MainContainer>
            <Footer />
        </>
    );
}