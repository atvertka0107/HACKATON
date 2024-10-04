import AdminViewConractConversion from "../components/AdminViewConractConversion/AdminViewConractConversion";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import { admin_header_text } from "../data";


export default function AdminViewConractConversionPage(){
    return(
        <>
            <Header type={admin_header_text}/>
            <MainContainer text='Просмотр конверсии продуктов'>
                <AdminViewConractConversion />
            </MainContainer>
            <Footer />
        </>
    );
}