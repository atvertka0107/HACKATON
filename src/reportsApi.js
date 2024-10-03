import axios from 'axios'

const apiEndpoint = 'http://localhost:8086/reporting_service/api/v1/reports/';

const api = {
    getConversionById: async (pageNumber) => {
        const response = await axios.get(`${apiEndpoint}/conversion/${pageNumber}`);
        return response.data;
    },
    getSalesById: async (pageNumber) => {
        const response = await axios.get(`${apiEndpoint}/sales${pageNumber}`);
        return response.data;
    },
    getAgentsById: async (pageNumber) => {
        const response = await axios.get(`${apiEndpoint}/agents/${pageNumber}`);
        return response.data;
    },
    getProductsById: async (pageNumber) => {
        const response = await axios.get(`${apiEndPoint}/products/${pageNumber}`);
        return response.data;
    }
}

export default api;