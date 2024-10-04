import classes from './AdminReportData.module.css'
import {Link} from 'react-router-dom'

export default function ReportData(){
    return(
        <div className={classes.container}>
            <Link to='/admin/view_contract_conversion' className={classes.link}>Просмотр конверсии договоров</Link>
            <Link className={classes.link}>Просмотр данных по продажам</Link>
            <Link className={classes.link}>Подитоги по премии и комиссии в разрезе страхового продукта</Link>
            <Link className={classes.link}>Общие итоги по премии</Link>
        </div>
    );
}