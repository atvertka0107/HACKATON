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

#API peporting_service
GET http://localhost:8086/reporting_service/api/v1/reports/conversion/{pageNumber} - получить страницу {pageNumber} отчёта по конверсиям
GET                                                       /sales/{pageNumber} - получить страницу {pageNumber} отчёта по продажам
GET                                                       /agents/{pageNumber} - получить страницу {pageNumber} отчёта "Общие итоги по премии и комиссии"
GET                                                       /products/{pageNumber} - получить страницу {pageNumber} отчёта "Подитоги по премии и комиссии в разрезе страхового продукта"