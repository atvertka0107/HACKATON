import ContractPage from "../components/ContractPage/ContractPage";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import { agent_header_text } from "../data";

export default function ViewContractPage(){
    return(
        <>
            <Header type={agent_header_text} />
            <MainContainer text='Договор'>
                <ContractPage ID='12' />
            </MainContainer>
            <Footer />
        </>
    );
}