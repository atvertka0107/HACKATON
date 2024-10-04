import AdminChangeProduct from "../components/AdminChangeProduct/AdminChangeProduct";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import { admin_header_text } from "../data";

export default function AdminChangeProductPage(){
    return (
        <>
            <Header type={admin_header_text} />
            <MainContainer text='Изменить продукт'>
                <AdminChangeProduct />
            </MainContainer>
            <Footer />
        </>
    );
}