import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MainContainer from '../components/MainContainer/MainContainer';
import { admin_header_text } from '../data';
import AdminCreateProduct  from '../components/AdminCreateProduct/AdminCreateProduct';

export default function AdminCreateProductPage() {
    return (
        <>
            <Header type={admin_header_text} />
            <MainContainer  text='Создать продукт'>
                <AdminCreateProduct />
            </MainContainer>
            <Footer />
        </>
    );
}