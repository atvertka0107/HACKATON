import { products_text } from '../../data';
import classes from './Product.module.css'

export default function Product({info}){
    return(
        <div className={classes.product}>
            <div>
                <img className={classes.dot} src={info.LOBId == 'ACCIDENT' ? './src/refs/Person alert.svg' : (info.LOBId == 'THI' ? './src/refs/Travel luggage and bags.svg' : './src/refs/Car.svg')}/>
            </div>
            <div className={classes.mainBlock}>
                <h2 className={classes.h2}>{info.Name}</h2>
                <span className={classes.line}>{products_text.lob} <img src="./src/refs/Arrow forward.svg" className={classes.arrow} /> <span className={classes.id}>{products_text.ids[info.LOBId]}</span></span>
            </div>
        </div>
    );
}