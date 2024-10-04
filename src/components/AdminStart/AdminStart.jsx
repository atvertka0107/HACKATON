import classes from './AdminStart.module.css'
import {Link} from 'react-router-dom'

export default function AdminStart(){
    return (
        <div className={classes.container}>
            <h1>Добро пожаловать, Admin!</h1>
            <Link to='/admin/insurance_products' className={classes.link}>Страховые продукты</Link>
            <Link to='/admin/report_data' className={classes.link}>Отчетные данные</Link>
            <Link className={classes.link}>Новый продукт</Link>
        </div>
    );
}