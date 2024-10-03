import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import ReportData from "../components/ReportData/ReportData";
import { admin_header_text } from "../data";

export default function ReportDataPage(){
    return(
        <>
            <Header type={admin_header_text} />
            <MainContainer text='Отчетные данные'>
                <ReportData />
            </MainContainer>
            <Footer />
        </>
    );
}