import AdminViewSalesData from "../components/AdminViewSalesData/AdminViewSalesData";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import { admin_header_text } from "../data";

export default function AdminViewSalesDataPage(){
    return (
        <>
            <Header type={admin_header_text} />
            <MainContainer text='Просмотр данных по продажам'>
                <AdminViewSalesData />
            </MainContainer>
            <Footer />
        </>
    );
}