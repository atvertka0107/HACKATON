import ContractHistory from "../components/ContractHistory/ContractHistory";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";


export default function ContractHistoryPage(){
    return(
        <>
            <Header />
            <MainContainer text='История договоров'>
                <ContractHistory />
            </MainContainer>
            <Footer />
        </>
    );
}