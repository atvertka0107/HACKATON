import { Link } from "react-router-dom";
import { products, products_text } from "../../data"
import classes from './AdminInsuranceProducts.module.css'
import { useState } from 'react';

export default function AdminInsuranceProducts(){
    return products.map(function(item){
        const [deleteTxt, setDeleteTxt] = useState('Удалить');
    const [deleteConf, setDeleteConf] = useState(false);

    function handleCursorOut(event){
        setDeleteConf(false);
        setDeleteTxt('Удалить');
    }

    function handleDelete(event){
        setDeleteConf(true);
        setDeleteTxt('Подтвердить?');
    } 
        return (
            <div className={classes.product}>
                <div className={classes.mainBlock}>
                    <h2 className={classes.h2}>{item.Name}</h2>
                    <span className={classes.line}>{products_text.lob} <img src="../src/refs/Arrow forward.svg" className={classes.arrow} /> <span className={classes.id}>{products_text.ids[item.LOBId]}</span></span>
                    <span className={classes.line1}>ID <img src="../src/refs/Arrow forward.svg" className={classes.arrow} /> <span className={classes.id}>{item.ID}</span> </span>
                </div>
                <Link to='/admin/change_product' className={classes.change}>Изменить</Link>
                <Link onMouseLeave={handleCursorOut} className={deleteConf ? classes.delete : `${classes.delete} ${classes.none}`}>Подтвердить?</Link>
                <a onClick={handleDelete} className={deleteConf ? `${classes.delete} ${classes.none}` : classes.delete}>Удалить</a>
            </div>
        );
    });
}