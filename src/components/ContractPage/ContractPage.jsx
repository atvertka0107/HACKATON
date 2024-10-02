import classes from './ContractPage.module.css'
import { forms_text } from "../../data";
import { contracts } from '../../data';

export default function ContractPage(ID){
    let contract = contracts[ID];
    
    return(
        <div>
            <div>
                <span>{forms_text.id}</span>

                <span>{forms_text.premium}</span>

                <span>{forms_text.insuredPersonId}</span>

                <span>{forms_text.ownerId}</span>
            </div>
            <div>
                <span>{forms_text.dateBegin}</span>

                <span>{forms_text.dateEnd}</span>

                <span>{forms_text.dateCreate}</span>

                <span>{forms_text.dateSign}</span>

                <span>{forms_text.status}</span>
            </div>
        </div>
    );
}