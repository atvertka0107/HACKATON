import classes from './AdminReportData.module.css'
import {Link} from 'react-router-dom'

export default function ReportData(){
    return(
        <div className={classes.container}>
            <Link to='/admin/view_contract_conversion' className={classes.link}>Просмотр конверсии договоров</Link>
            <Link to='/admin/view_sales_data' className={classes.link}>Просмотр данных по продажам</Link>
            <Link to='/admin/premium_commission' className={classes.link}>Подитоги по премии и комиссии в разрезе страхового продукта</Link>
            <Link to='/admin/general_premium' className={classes.link}>Общие итоги по премии</Link>
        </div>
    );
}