import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import MainContainer from './components/MainContainer/MainContainer'
import ContractHistory from './components/ContractHistory/ContractHistory'
import ProductsPage from './components/ProductsPage/ProductsPage'
import ContractPage from './components/ContractPage/ContractPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <MainContainer text='Оформление договора'>
          <Form />
        </MainContainer>
        {/* <MainContainer text='История договоров'>
          <ContractHistory />
        </MainContainer>  */}
        {/* <MainContainer text='Продукты страхования'>
          <ProductsPage />
        </MainContainer> */}
        {/* <MainContainer text='Договор'>
          <ContractPage />
        </MainContainer> */}
      </div>
    </>
  )
}

export default App
