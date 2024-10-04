import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import ProductsPage from "../components/ProductsPage/ProductsPage";
import { agent_header_text } from "../data";
import React, { useState, useEffect } from 'react'
import api from '../agentApi'

export default function InsuranceProductsPage(){
    return(
        <>
            <Header type={agent_header_text} />
            <MainContainer text='Продукты страхования'>
                <ProductsPage />
            </MainContainer>
            <Footer />
        </>
    );
}