import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";

export default function ContractSignPage(){
    return(
        <>
            <Header />
            <MainContainer text='Оформление договора'>
                <Form />
            </MainContainer>
            <Footer />
        </>
    );
}