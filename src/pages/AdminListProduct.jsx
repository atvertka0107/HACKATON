import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MainContainer from '../components/MainContainer/MainContainer';
import { admin_header_text } from '../data';
import ProductsPage from '../components/ProductsPage/ProductsPage';

export default function AdminListProduct() {
    return <>
    <Header type={admin_header_text}/>
        <MainContainer text='Продукты страховавния'>
            <ProductsPage />
        </MainContainer>
    <Footer />
    </>
}