import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import ProductsPage from "../components/ProductsPage/ProductsPage";

export default function InsuranceProductsPage(){
    return(
        <>
            <Header />
            <MainContainer text='Продукты страхования'>
                <ProductsPage />
            </MainContainer>
            <Footer />
        </>
    );
}