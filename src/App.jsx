import { useState } from 'react'
import './App.css'
import ContractHistoryPage from './pages/ContractHistoryPage'
import ContractSignPage from './pages/ContractSignPage'
import InsuranceProductsPage from './pages/InsuranceProductsPage'
import ViewContractPage from './pages/ViewContractPage'
import HelloPage from './pages/HelloPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <HelloPage /> */}
        <ContractHistoryPage />
        {/* <ContractSignPage /> */}
        {/* <InsuranceProductsPage /> */}
        {/* <ViewContractPage /> */}
      </div>
    </>
  )
}

export default App
