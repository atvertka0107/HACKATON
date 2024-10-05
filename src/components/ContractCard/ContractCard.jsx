import { Status } from '../../data';
import { Link }  from 'react-router-dom'
import classes from './ContractCard.module.css'

export default function ContractCard({information}){

    return(
        <a href="" className={classes.a}>
        <div className={classes.contractCard}>
            <div className={classes.mainBlock}>
            <h2>Договор<img src="./src\refs\Contract.svg" className={classes.icon}/></h2> 
                <div className={classes.sectionBlock}>
                <div className={classes.section}>
                    <span className={classes.infoLabel}>ИНН застрахованного лица</span>
                    <span className={classes.info}>{information.insuredPersonId}</span>
                    <span className={classes.infoLabel}>{contract_card_text.insuredPersonId}</span>
                   <span className={classes.info}><Link to={`/contract/${insuredPersonId}`}>{information.insuredPersonId}</ Link></span>
                </div>
                <div className={classes.section}>
                    <span className={classes.infoLabel}>Название продукта</span>
                    <span className={classes.info}>{information.Name}</span>
                </div>
                <div className={classes.section}>
                    <span className={classes.infoLabel}>Дата создания</span>
                    <span className={classes.info}>{information.DateCreate}</span>
                </div>
                </div>
            </div>
            <div className={information.Status == 'draft' ? `${classes.draft} ${classes.cardStatus}` : (information.Status == 'signed' ? `${classes.signed} ${classes.cardStatus}` : `${classes.terminated} ${classes.cardStatus}`)}>
                <span className={classes.statusText}>{Status[information.Status]}</span>
            </div>
        </div>
        </a>
    );
}
