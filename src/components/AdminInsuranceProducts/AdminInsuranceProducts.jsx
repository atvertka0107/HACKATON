import { Link } from "react-router-dom";
import { products, products_text } from "../../data"
import classes from './AdminInsuranceProducts.module.css'

export default function AdminInsuranceProducts(){
    return products.map(function(item){
        return (
            <div className={classes.product}>
                <div className={classes.mainBlock}>
                    <h2 className={classes.h2}>{item.Name}</h2>
                    <span className={classes.line}>{products_text.lob} <img src="../src/refs/Arrow forward.svg" className={classes.arrow} /> <span className={classes.id}>{products_text.ids[item.LOBId]}</span></span>
                    <span className={classes.line1}>ID <img src="../src/refs/Arrow forward.svg" className={classes.arrow} /> <span className={classes.id}>{item.ID}</span> </span>
                </div>
                <Link>Изменить</Link>
                
            </div>
        );
    });
}