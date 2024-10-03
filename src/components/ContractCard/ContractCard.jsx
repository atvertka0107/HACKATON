import { contract_card_text } from '../../data';
import classes from './ContractCard.module.css'

export default function ContractCard({information}){

    return(
        <a href="" className={classes.a}>
        <div className={classes.contractCard}>
            <div className={classes.mainBlock}>
            <h2>{contract_card_text.contract} <img src="./src\refs\Contract.svg" className={classes.icon}/></h2> 
                <div className={classes.sectionBlock}>
                <div className={classes.section}>
                    <span className={classes.infoLabel}>{contract_card_text.insuredPersonId}</span>
                    <span className={classes.info}>{information.insuredPersonId}</span>
                </div>
                <div className={classes.section}>
                    <span className={classes.infoLabel}>{contract_card_text.Name}</span>
                    <span className={classes.info}>{information.Name}</span>
                </div>
                <div className={classes.section}>
                    <span className={classes.infoLabel}>{contract_card_text.DateCreate}</span>
                    <span className={classes.info}>{information.DateCreate}</span>
                </div>
                </div>
            </div>
            <div className={information.Status == 'draft' ? `${classes.draft} ${classes.cardStatus}` : (information.Status == 'signed' ? `${classes.signed} ${classes.cardStatus}` : `${classes.terminated} ${classes.cardStatus}`)}>
                <span className={classes.statusText}>{contract_card_text.Status[information.Status]}</span>
            </div>
        </div>
        </a>
    );
}
