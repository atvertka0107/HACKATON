import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainPage from "../components/MainPage/MainPage";
import { agent_header_text } from "../data";

export default function HelloPage(){
    return(
        <>
            <Header type={agent_header_text} />
            <MainPage />
            <Footer />
        </>
    );
}