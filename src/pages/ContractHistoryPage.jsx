import ContractHistory from "../components/ContractHistory/ContractHistory";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import { agent_header_text } from "../data";


export default function ContractHistoryPage(){
    return(
        <>
            <Header type={agent_header_text} />
            <MainContainer text='История договоров'>
                <ContractHistory />
            </MainContainer>
            <Footer />
        </>
    );
}