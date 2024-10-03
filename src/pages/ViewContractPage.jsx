import ContractPage from "../components/ContractPage/ContractPage";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";

export default function ViewContractPage(){
    return(
        <>
            <Header />
            <MainContainer text='Договор'>
                <ContractPage ID='12' />
            </MainContainer>
            <Footer />
        </>
    );
}