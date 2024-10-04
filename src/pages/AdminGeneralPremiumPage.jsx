import AdminGeneralPremium from "../components/AdminGeneralPremium/AdminGeneralPremium";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import { admin_header_text } from "../data";

export default function AdminGeneralPremiumPage(){
    return (
        <>
            <Header type={admin_header_text} />
            <MainContainer text='Общие итоги по премии'>
                <AdminGeneralPremium />
            </MainContainer>
            <Footer />
        </>
    );
}