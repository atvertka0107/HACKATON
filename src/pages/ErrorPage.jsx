import Error from "../components/ErrorPage/ErrorPage";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import { agent_header_text } from "../data";


export default function ErrorPage(){
    return(
        <>
         <Header type={agent_header_text} />
            <MainContainer>
                <Error />
            </MainContainer>
             <Footer />
        </>
    );
}