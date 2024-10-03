import classes from './ContractPage.module.css'
import { forms_text } from "../../data";
import { contracts_full } from '../../data';
import { useState } from 'react';
import Button from '../Button/Button';

export default function ContractPage({ID}){
    const contract = contracts_full[ID];
    const [status, setStatus] = useState(contract.Status);
    let optionsStatus = forms_text.status_edit_options.map(function(item){
        return <option value={item.id}>{item.name}</option>;
    });

    return(
        <div className={classes.pageContainer}>
            <div className={classes.section}>
                <span className={classes.lbl}>{forms_text.id}</span>
                <span className={classes.field}>{contract.Name}</span>

                <span className={classes.lbl}>{forms_text.premium}</span>
                <span className={classes.field}>{contract.Premium}</span>

                <span className={classes.lbl}>{forms_text.insuredPersonId}</span>
                <span className={classes.field}>{contract.insuredPersonId}</span>

                <span className={classes.lbl}>{forms_text.ownerId}</span>
                <span className={classes.field}>{contract.OwnerId}</span>
            </div>
            <div className={classes.section}>
                <span className={classes.lbl}>{forms_text.dateBegin}</span>
                <span className={classes.field}>{contract.DateBegin}</span>

                <span className={classes.lbl}>{forms_text.dateEnd}</span>
                <span className={classes.field}>{contract.DateEnd}</span>

                <span className={classes.lbl}>{forms_text.dateCreate}</span>
                <span className={classes.field}>{contract.DateCreate}</span>

                <span className={classes.lbl}>{forms_text.dateSign}</span>
                <span className={classes.field}>{contract.DateSign}</span>

                <span className={classes.lbl}>{forms_text.status}</span>
                <form>
                <select required id="status" class='control' value={status} onChange={(event) => setStatus(event.target.value)}>
                        {optionsStatus}
                    </select>
                <Button>{forms_text.button_edit}</Button>
                </form>    
            </div>
        </div>
    );
}