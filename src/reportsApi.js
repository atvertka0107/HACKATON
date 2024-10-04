import axios from 'axios'

const apiEndpoint = 'http://localhost:8086/reporting_service/api/v1/reports/';

const api = {
    getConversionById: async (pageNumber) => {
        try{    
            const response = await axios.get(`${apiEndpoint}/conversion/${pageNumber}`);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
        throw(error);
    },
    getSalesById: async (pageNumber) => {
        try{    
            const response = await axios.get(`${apiEndpoint}/sales${pageNumber}`);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
        throw error;
    },
    getAgentsById: async (pageNumber) => {
        try{    
            const response = await axios.get(`${apiEndpoint}/agents/${pageNumber}`);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
        throw(error);
    },
    getProductsById: async (pageNumber) => {
        try{    
            const response = await axios.get(`${apiEndPoint}/products/${pageNumber}`);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
        throw(error);
    }
}

export default api;