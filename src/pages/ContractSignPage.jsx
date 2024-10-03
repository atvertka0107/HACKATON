import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import { agent_header_text } from "../data";

export default function ContractSignPage(){
    return(
        <>
            <Header type={agent_header_text} />
            <MainContainer text='Оформление договора'>
                <Form />
            </MainContainer>
            <Footer />
        </>
    );
}