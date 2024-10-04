import axios from 'axios'

const apiEndpoint = 'http://localhost:8084/agent' 

const api = {
    getContracts: async () => {
        try{
            const response = await axios.get(`${apiEndpoint}/contracts`);
            return response.data;
        }
                                                                  
        catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
        throw error;
    },
    getContractById: async (contractId) => {                                                                                                                 
        const response = await axios.get(`${apiEndpoint}/contracts/${contractId}`);
        return response.data;
    },
    createContract: async (contractData) => {
        const response = await axios.post(`${apiEndpoint}/createContract`, contractData);
        return response.data;
    },
    acceptContract: async (contractId) => {
        const response = await axios.post(`${apiEndpoint}/contracts/accept/${contractId}`);
        return response.data;
    },
    deleteContract: async (contractId) => {
        const response = await axios.post(`${apiEndpoint}/contracts/delete/${contractId}`);
        return response.data;
    },
    terminateContract: async (contractId) => {
        const response = await axios.post(`${apiEndpoint}/contracts/terminate/${contractId}`);
        return response.data;
    },
    getProductList: async () => {
        const response = await axios.get(`${apiEndpoint}/product/list`);
        return response.data;
    }
};

export default api;