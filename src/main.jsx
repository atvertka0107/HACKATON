import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import './main.css'
import HelloPage from './pages/HelloPage'
import ContractHistoryPage from './pages/ContractHistoryPage'
import ContractSignPage from './pages/ContractSignPage'
import InsuaranceProductsPage from './pages/InsuranceProductsPage'
import ViewContractPage from './pages/ViewContractPage'
import ErrorPage from './pages/ErrorPage'

import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import AdminStartPage from './pages/AdminStartPage'
import ReportDataPage from './pages/ReportDataPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HelloPage />, 
    errorElement: <ErrorPage />,
  },
  { 
    path: '/history',
    element: <ContractHistoryPage />, 
  },
  {
    path: '/sign_contract',
    element: <ContractSignPage />,
  },
  {
    path: '/insuarance_products',
    element: <InsuaranceProductsPage />,
  },
  {
    path: '/view_contract',
    element: <ViewContractPage />
  },
  {
    path: '/admin',
    element: <AdminStartPage />
  },
  {
    path: '/admin/report_data',
    element: <ReportDataPage />
  },
]);

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
);