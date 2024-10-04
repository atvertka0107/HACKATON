import { useEffect, useState } from 'react';
import classes from './AdminPremiumComission.module.css'
import { admin_prem_com } from '../../data';
import Pagination from '../Pagination/Pagination';

export default function AdminPremiumCommission(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [prodsPerPage] = useState(10);

    useEffect(() => {
        const getProds = async () => {
            setLoading(true)
            const res = admin_prem_com;
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
                <span className={classes.prop}>{item.ProductId}</span>
                <span className={classes.prop}>{item.SumPremium}</span>
                <span className={classes.prop}>{item.SumComission}</span>
            </div>
        );
    });

    return(
        <div>
            <div className={classes.heading}>
                <span className={classes.label}>ID продукта</span>
                <span className={classes.label}>Суммарная премия компании</span>
                <span className={classes.label}>Суммарная комиссия агента</span>
            </div>
            {prods}
            <Pagination itemsPerPage={prodsPerPage} totalItems={products.length} paginate={paginate} />
        </div>
    );
}