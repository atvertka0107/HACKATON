import classes from './ContractPage.module.css'
import { Status } from "../../data";
import { contracts_full } from '../../data';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';

export default function ContractPage({ID}){
    const [contract, setContract] = useEffect();
    const [status, setStatus] = useState(contract.Status);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProds = async () => {
            setLoading(true)
            const res = contracts_full[ID];
            setContract(res);
            setLoading(false)
        }
        
        getProds();
    }, [])

    useEffect(() => {
        const getProds = async () => {
            setLoading(true)
            const res = Status;
            setStatus(res);
            setLoading(false)
        }
        
        getProds();
    }, [])

    let optionsStatus = Status.map(function(item){
        return <option value={item.Id}>{item.Name}</option>;
    });
    if(loading){
        return <h2>Loading...</h2>
    }
    return(
        <div className={classes.pageContainer}>
            <div className={classes.section}>
                <span className={classes.lbl}>Наименование продукта</span>
                <span className={classes.field}>{contract.Name}</span>

                <span className={classes.lbl}>Страховая премия</span>
                <span className={classes.field}>{contract.Premium}</span>

                <span className={classes.lbl}>ИНН застрахованного лица</span>
                <span className={classes.field}>{contract.insuredPersonId}</span>

                <span className={classes.lbl}>ИНН собственника</span>
                <span className={classes.field}>{contract.OwnerId}</span>
            </div>
            <div className={classes.section}>
                <span className={classes.lbl}>Дата начала страховой ответсвенности</span>
                <span className={classes.field}>{contract.DateBegin}</span>

                <span className={classes.lbl}>Дата окончания страховой ответсвенности</span>
                <span className={classes.field}>{contract.DateEnd}</span>

                <span className={classes.lbl}>Дата создания договора</span>
                <span className={classes.field}>{contract.DateCreate}</span>

                <span className={classes.lbl}>Дата подписания договора</span>
                <span className={classes.field}>{contract.DateSign}</span>

                <span className={classes.lbl}>Статус договора</span>
                <form>
                <select required id="status" class='control' value={status} onChange={(event) => setStatus(event.target.value)}>
                        {optionsStatus}
                    </select>
                <Button>Изменить</Button>
                </form>    
            </div>
        </div>
    );
}