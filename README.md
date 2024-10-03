#command for run App:

    npm install axios
    npm install 

#API agent:

GET http://localhost:8084/agent/contracts - получить историю контрактов по агенту
POST                           /createContract - создать контракт
GET                            /contracts/{contractId} - получить контракт по id
POST                           /contracts/accept/{contractId} - подтвердить контракт по id
POST                           /contracts/delete/{contractId} - удалить контракт по id
POST                           /contracts/terminate/{contractId} - расторгнуть контракт по id
