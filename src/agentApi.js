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
        try {
            const response = await axios.get(`${apiEndpoint}/contracts/${contractId}`);
            return response.data;
        }  
        catch (error) {
            console.log('Ошибка приполучении ContractID');
        }                                                                                                          
        throw error;
    },
    createContract: async (contractData) => {
        try{
            const response = await axios.post(`${apiEndpoint}/createContract`, contractData);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
        throw(error);
    },
    acceptContract: async (contractId) => {
        try {
            const response = await axios.post(`${apiEndpoint}/contracts/accept/${contractId}`);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
       throw(error);
    },
    deleteContract: async (contractId) => {
        try {
            const response = await axios.post(`${apiEndpoint}/contracts/delete/${contractId}`);
            return response.data;
        }
        catch (error){
            console.log(error);
        }
        throw(error);
    },
    terminateContract: async (contractId) => {
        try {
            const response = await axios.post(`${apiEndpoint}/contracts/terminate/${contractId}`);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
        throw(error);
    },
    getProductList: async () => {
        try{    
            const response = await axios.get(`${apiEndpoint}/product/list`);
            return response.data;
        }
        catch(error){
            console.log(error)
        }
        throw(error);
    }
};

export default api;