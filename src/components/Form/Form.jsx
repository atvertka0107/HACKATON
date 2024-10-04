import classes from "./Form.module.css"
import Button from "../Button/Button";
import { useState, useEffect } from 'react';
import { id_options, StatusRequest } from "../../data";

export default function Form(){
    const [ID, setID] = useState();
    const [dateBegin, setDateBegin] = useState();
    const [dateEnd, setDateEnd] = useState();
    const [premium, setPremium] = useState();
    const [insuranceSum, setInsuranceSum] = useState();
    const [insuredPersonId, setinsuredPersonId] = useState();
    const [ownerId, setOwnerId] = useState();
    const [status, setStatus] = useState();
    const [hasErrorOwner, setHasErrorOwner] = useState(false);
    const [hasErrorInsuredPerson, setHasErrorInsuredPerson] = useState(false);
    const [insSum, setInsSum] = useState();

    const [statusList, setStatusList] = useState([]);

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProds = async () => {
            setLoading(true)
            const res = id_options;
            setProducts(res);
            setLoading(false)
        }
        
        getProds();
    }, [])

    useEffect(() => {
        const getProds = async () => {
            setLoading(true)
            const res = StatusRequest;
            setStatusList(res);
            setLoading(false)
        }
        
        getProds();
    }, [])
    
    function isValidInn(i) {
        if ( i.match(/\D/) ) return false;
    
        let inn = i.match(/(\d)/g);
    
        if ( inn.length == 10 ) {
            return inn[9] == String(((
                2*inn[0] + 4*inn[1] + 10*inn[2] + 
                3*inn[3] + 5*inn[4] +  9*inn[5] + 
                4*inn[6] + 6*inn[7] +  8*inn[8]
            ) % 11) % 10);
        }
        else if ( inn.length == 12 ) {
            return inn[10] == String(((
                7*inn[0] + 2*inn[1] + 4*inn[2] +
                10*inn[3] + 3*inn[4] + 5*inn[5] +
                9*inn[6] + 4*inn[7] + 6*inn[8] +
                8*inn[9]
            ) % 11) % 10) && inn[11] == String(((
                3*inn[0] +  7*inn[1] + 2*inn[2] +
                4*inn[3] + 10*inn[4] + 3*inn[5] +
                5*inn[6] +  9*inn[7] + 4*inn[8] +
                6*inn[9] +  8*inn[10]
            ) % 11) % 10);
        }
        return false;
    }

    function handleinsuredPersonIdChange(event){
        setinsuredPersonId(event.target.value) 
        setHasErrorInsuredPerson(!isValidInn(event.target.value.trim()))
    }

    function handleOwnerIdChange(event){
        setOwnerId(event.target.value) 
        setHasErrorOwner(!isValidInn(event.target.value.trim()))
    }

    function handlePremium(event){
        setPremium(event.target.value)
        setInsSum(event.target.value.trim() ? <div className={classes.subtxt}>Страховая сумма: <span className={classes.sum}>{0.9*event.target.value}</span></div> : '')
    }

    let optionsId = products.map(function(item){
        if(loading){
            return <h2>Loading...</h2>
        }
        return <option value={item.id}>{item.name}</option>;
    });

    let optionsStatus = statusList.map(function(item){
        if(loading){
            return <h2>Loading...</h2>
        }
        return <option value={item.id}>{item.name}</option>;
    });

    return (
            <form action="">
                <div className={classes.form_container}>
                <div className={classes.form}>
                    <div className={classes.formLeft}>
                    <label htmlFor="ID">Наименование продукта</label>
                    <select required id="ID" class='control' value={ID} onChange={(event) => setID(event.target.value)}>
                        {optionsId}
                    </select>

                    <label htmlFor="Premium">Страховая премия</label>
                    <input required
                        type="number" min = "0"
                        className="control" 
                        id="Premium" value={premium} 
                        onChange={handlePremium} 
                    />
                    {insSum}

                    <label htmlFor="insuredPersonId">ИНН застрахованного лица</label>
                    <input required
                        type="text" 
                        className="control" 
                        id="insuredPersonId" value={insuredPersonId}
                        style={{
                            borderBottom: hasErrorInsuredPerson ? '4px solid red' : null,
                        }}
                        onChange={handleinsuredPersonIdChange} 
                    />

                    <label htmlFor="OwnerId">ИНН собственника</label>
                    <input required
                        type="text" 
                        className="control" 
                        id="OwnerId" value={ownerId}
                        style={{
                            borderBottom: hasErrorOwner ? '4px solid red' : null,
                        }}
                        onChange={handleOwnerIdChange} 
                    />
                    </div>

                    <div className={classes.formRight}>
                    <label htmlFor="dateBegin">Дата начала страховой ответсвенности</label>
                    <input required
                        type="date" 
                        className="control" 
                        id="dateBegin" value={dateBegin} 
                        onChange={(event) => setDateBegin(event.target.value)} 
                    />

                    <label htmlFor="dateEnd">Дата окончания страховой ответсвенности</label>
                    <input required
                        type="date" 
                        className="control" 
                        id="dateEnd" value={dateEnd} 
                        onChange={(event) => setDateEnd(event.target.value)} 
                    />

                    <label htmlFor="status">Статус договора</label>
                    <select required id="status" class='control' value={status} onChange={(event) => setStatus(event.target.value)}>
                        {optionsStatus}
                    </select>
                    </div>
                </div>
                </div>
                <Button disabled={hasErrorInsuredPerson || hasErrorOwner}>Создать</Button> 
            </form>   
    );
}