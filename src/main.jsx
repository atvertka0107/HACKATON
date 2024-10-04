import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import HelloPage from './pages/HelloPage'
import ContractHistoryPage from './pages/ContractHistoryPage'
import ContractSignPage from './pages/ContractSignPage'
import InsuaranceProductsPage from './pages/InsuranceProductsPage'
import ViewContractPage from './pages/ViewContractPage'
import ErrorPage from './pages/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminStartPage from './pages/AdminStartPage'
import AdminReportDataPage from './pages/AdminReportDataPage'
import AdminInsuranceProductsPage from './pages/AdminInsuranceProductsPage'
import AdminViewConractConversionPage from './pages/AdminViewConractConversionPage'
import AdminChangeProductPage from './pages/AdminChangeProductPage'
import AdminGeneralPremiumPage from './pages/AdminGeneralPremiumPage'
import AdminPremiumComissionPage from './pages/AdminPremiumComissionPage'
import AdminViewSalesDataPage from './pages/AdminViewSalesDataPage'

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
    element: <AdminReportDataPage />
  },
  {
    path: '/admin/insurance_products',
    element: <AdminInsuranceProductsPage />
  },
  {
    path: '/admin/view_contract_conversion',
    element: <AdminViewConractConversionPage />
  },
  {
    path: '/admin/change_product',
    element: <AdminChangeProductPage/>
  },
  {
    path: '/admin/general_premium',
    element: <AdminGeneralPremiumPage/>
  },
  {
    path: '/admin/premium_commission',
    element: <AdminPremiumComissionPage/>
  },
  {
    path: '/admin/view_sales_data',
    element: <AdminViewSalesDataPage/>
  },
]);

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
);