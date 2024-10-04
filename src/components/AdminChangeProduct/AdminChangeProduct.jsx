import classes from './AdminChangeProduct.module.css'
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { LOBrequest } from '../../data';

export default function AdminChangeProduct({id}){

    const [ID, setID] = useState();
    const [ProductName, setProductName] = useState();
    const [isEmptyProductName, setIsEmptyProductName] = useState(false);

    const [loading, setLoading] = useState(false);
    const [LOBIds, setLOBIds] = useState([])

    useEffect(() => {
        const getProds = async () => {
            setLoading(true)
            const res = LOBrequest;
            setLOBIds(res);
            setLoading(false)
        }
        
        getProds();
    }, [])

     const handleProductNameChange = (event) => {
        setProductName(event.target.value);
        setIsEmptyProductName(event.target.value.trim() === ''); // Обновляем state при изменении поля
    };

    let optionsId = LOBIds.map(function(item){
        if(loading){
            return <h2>Loading...</h2>
        }
        return <option value={item.Id}>{item.Name}</option>;
    });
    return(
        <form action="">
            <div className={classes.form_container}>
                <div className={classes.form}>
                    <div className={classes.formLeft}>
                        <label htmlFor="ID">Линия бизнеса</label>
                        <select required id="ID" className='control' value={ID} onChange={(event) => setID(event.target.value)}>
                            {optionsId}
                        </select>
                    </div>

                    <div className={classes.formRight}>
                        <label htmlFor="ProductName">Введите название продукта</label>
                        <input 
                            required
                            type="text" 
                            className="control" 
                            id="ProductName" 
                            value={ProductName}
                            style={{
                                borderBottom: isEmptyProductName ? '4px solid red' : null,
                            }}
                            onChange={handleProductNameChange} 
                        />
                    </div>
                </div>
            </div>
            <Button disabled={isEmptyProductName}>Изменить</Button>
        </form>
    );
}