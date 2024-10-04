import { useState, useEffect } from 'react';
import classes from './AdminViewConractConversion.module.css'
import { admin_conv_prod, contract_card_text } from '../../data';
import Pagination from '../Pagination/Pagination';

export default function AdminViewConractConversion(){
    const [flagTxt, setFlagTxt] = useState('После');
    const [flagState, setFlagState] = useState(false);

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
                <span className={classes.prop}>{item.ProductName}</span>
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
                    />
                <input
                    className={classes.input}
                    type="text" 
                    placeholder="Продукт"
                    />
                <select type="text" placeholder="Статус" className={classes.input}>
                    <option>Статус продукта</option>
                    <option>Проект</option>
                    <option>Подписан</option>
                    <option>Расторгнут</option>
                </select>
                <button className={classes.flag} onClick={handleFlagChange}>{flagTxt}</button>
                <input
                    className={`${classes.input} ${classes.date}`}
                    type="date" 
                    />
            </div>
            <div className={classes.list}>
                {prods}
                <Pagination itemsPerPage={prodsPerPage} totalItems={products.length} paginate={paginate} />
            </div>
        </div>
    );
}