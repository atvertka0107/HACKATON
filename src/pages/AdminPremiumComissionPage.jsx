import AdminPremiumCommission from "../components/AdminPremiumComission/AdminPremiumComission";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import { admin_header_text } from "../data";

export default function AdminPremiumComissionPage(){
    return (
        <>
            <Header type={admin_header_text} />
            <MainContainer text='Подитоги по премии и комиссии в разрезе страхового продукта'>
                <AdminPremiumCommission />
            </MainContainer>
            <Footer />
        </>
    );
}