import { useState, useEffect } from 'react';
import classes from './AdminViewConractConversion.module.css'
import { admin_conv_prod, contract_card_text } from '../../data';
import Pagination from '../Pagination/Pagination';

export default function AdminViewConractConversion(){
    const [flagTxt, setFlagTxt] = useState('После');
    const [flagState, setFlagState] = useState(false);

    const [agentId, setAgentId] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('none');
    const [date, setDate] = useState('');

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [prodsPerPage] = useState(10);

    function handleFlagChange(event){
        setFlagState(!flagState);
        setFlagTxt(flagState ? 'После' : 'До');
    }

    useEffect(() => {
        const getProds = async () => {
            setLoading(true)
            const res = admin_conv_prod;
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
                <span className={classes.prop}>{contract_card_text.Status[item.Status]}</span>
                <span className={classes.prop}>{item.Date}</span>
            </div>
        );
    });
    

    return (
        <div className={classes.container}>
            <div className={classes.forms}>
                <input
                    className={classes.input}
                    type="text" 
                    placeholder="ID агента"
                    value={agentId}
                    onChange = {(event) => setAgentId(event.target.value)}
                    />
                <input
                    className={classes.input}
                    type="text" 
                    placeholder="Id продукта"
                    value={name}
                    onChange = {(event) => setName(event.target.value)}
                    />
                <select type="text" placeholder="Статус" className={classes.input} value={status} onChange = {(event) => setStatus(event.target.value)}>
                    <option value="none">Статус продукта</option>
                    <option value="draft">Проект</option>
                    <option value="signed">Подписан</option>
                    <option value="terminated">Расторгнут</option>
                </select>
                <button className={classes.flag} onClick={handleFlagChange}>{flagTxt}</button>
                <input
                    className={`${classes.input} ${classes.date}`}
                    type="date" 
                    value={date}
                    onChange = {(event) => setDate(event.target.value)}
                    />
            </div>
            <div className={classes.list}>
                {prods}
                <Pagination itemsPerPage={prodsPerPage} totalItems={products.length} paginate={paginate} />
            </div>
        </div>
    );
}