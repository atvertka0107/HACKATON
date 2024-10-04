import { useEffect, useState } from 'react';
import classes from './AdminViewSalesData.module.css'
import { admin_view_sales } from '../../data';
import Pagination from '../Pagination/Pagination';

export default function AdminViewSalesData(){
    const [flagTxtP, setFlagTxtP] = useState('Больше');
    const [flagStateP, setFlagStateP] = useState(false);

    const [flagTxtC, setFlagTxtC] = useState('Больше');
    const [flagStateC, setFlagStateC] = useState(false);

    const [agentId, setAgentId] = useState('');
    const [name, setName] = useState('');
    const [contractId, setContractId] = useState('');
    const [premium, setPremium] = useState('');
    const [comission, setComission] = useState('');

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [prodsPerPage] = useState(10);

    useEffect(() => {
        const getProds = async () => {
            setLoading(true)
            const res = admin_view_sales;
            setProducts(res);
            setLoading(false)
        }
        
        getProds();
    }, [])

    const lastProdIndex = currentPage * prodsPerPage;
    const firstProdIndex = lastProdIndex - prodsPerPage;
    const currentProd = products.slice(firstProdIndex, lastProdIndex);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    let prods = currentProd.map(function(item){
        if(loading){
            return <h2>Loading...</h2>
        }
        return (
            <div className={classes.project}>
                <span className={classes.prop}>{item.AgentId}</span>
                <span className={classes.prop}>{item.ProductId}</span>
                <span className={classes.prop}>{item.ContractId}</span>
                <span className={classes.prop}>{item.Premium}</span>
                <span className={classes.prop}>{item.Comission}</span>
            </div>
        );
    });

    function handleFlagChangeP(event){
        setFlagStateP(!flagStateP);
        setFlagTxtP(flagStateP ? 'Больше' : 'Меньше');
    }
    function handleFlagChangeC(event){
        setFlagStateC(!flagStateC);
        setFlagTxtC(flagStateC ? 'Больше' : 'Меньше');
    }

    return(
        <div className={classes.container}>
            <div className={classes.forms}>
                <input className={classes.input}
                    type='text'
                    value={agentId}
                    placeholder='Id агента'
                    onChange = {(event) => setAgentId(event.target.value)}
                />
                <input className={classes.input}
                    type='text'
                    value={name}
                    placeholder='Id продукта'
                    onChange = {(event) => setName(event.target.value)}
                />
                <input className={classes.input}
                    type='text'
                    value={contractId}
                    placeholder='Id контракта'
                    onChange = {(event) => setContractId(event.target.value)}
                />
                <button className={classes.flag} onClick={handleFlagChangeP}>{flagTxtP}</button>
                <input className={`${classes.input} ${classes.fl}`}
                    type='text'
                    value={premium}
                    placeholder='Страховая премия'
                    onChange = {(event) => setPremium(event.target.value)}
                />
                <button className={classes.flag} onClick={handleFlagChangeC}>{flagTxtC}</button>
                <input className={`${classes.input} ${classes.fl}`}
                    type='text'
                    value={comission}
                    placeholder='Сумма комисии'
                    onChange = {(event) => setComission(event.target.value)}
                />
            </div>
            <div className={classes.list}>
            {prods}
            <Pagination itemsPerPage={prodsPerPage} totalItems={products.length} paginate={paginate} />
            </div>
        </div>
    );
}