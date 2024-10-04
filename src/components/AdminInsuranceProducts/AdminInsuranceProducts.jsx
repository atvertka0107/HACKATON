import { Link } from "react-router-dom";
import { LOBId, products_request } from "../../data"
import classes from './AdminInsuranceProducts.module.css'
import { useState, useEffect } from 'react';

export default function AdminInsuranceProducts(){
    const [loading, setLoading] = useState(false);
    const [prods, setProds] = useState([]);

    useEffect(() => {
        const getProds = async () => {
            setLoading(true)
            const res = products_request;
            setProds(res);
            setLoading(false)
        }
        
        getProds();
    }, [])

    const [deleteConf, setDeleteConf] = useState(false);

    function handleDelete(id){
        console.log(id);
    } 

    let ret = prods.map(function(item){
        if(loading){
            return <h2>Loading...</h2>
        }
        return (
            <div className={classes.product}>
                <div className={classes.mainBlock}>
                    <h2 className={classes.h2}>{item.Name}</h2>
                    <span className={classes.line}>Линия бизнеса<img src="../src/refs/Arrow forward.svg" className={classes.arrow} /> <span className={classes.id}>{LOBId[item.LOBId]}</span></span>
                    <span className={classes.line1}>ID <img src="../src/refs/Arrow forward.svg" className={classes.arrow} /> <span className={classes.id}>{item.ID}</span> </span>
                </div>
                <Link to='/admin/change_product' className={classes.change}>Изменить</Link>
                <Link onClick={() => handleDelete(item.ID)} className={classes.delete}>Удалить</Link>
            </div>
        );
    });
    return ret;
}