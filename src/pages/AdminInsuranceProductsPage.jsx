import AdminInsuranceProducts from "../components/AdminInsuranceProducts/AdminInsuranceProducts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import { admin_header_text } from "../data";

export default function AdminInsuranceProductsPage(){
    return (
        <>
            <Header type={admin_header_text} />
            <MainContainer text='Страховые продукты'>
                <AdminInsuranceProducts />
            </MainContainer>
            <Footer />
        </>
    );
}