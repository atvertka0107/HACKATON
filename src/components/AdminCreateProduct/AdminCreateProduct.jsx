import { useState } from "react";
import { products_text } from "../../data";
import Button from "../Button/Button";
import classes from './AdminCreateProduct.module.css';
import { adminCreateForm } from '../../data';

export default function AdminCreateProduct (){
    const [ID, setID] = useState();
    const [ProductName, setProductName] = useState();
    const [isEmptyProductName, setIsEmptyProductName] = useState(false);

     const handleProductNameChange = (event) => {
        setProductName(event.target.value);
        setIsEmptyProductName(event.target.value.trim() === ''); // Обновляем state при изменении поля
    };


    let optionsId = adminCreateForm.LOB_text.map(function(item){
        return <option value={item.id}>{item.value}</option>;
    });

    return (
       <form action="">
            <div className={classes.form_container}>
                <div className={classes.form}>
                    <div className={classes.formLeft}>
                        <label htmlFor="ID">{products_text.lob}</label>
                        <select required id="ID" className='control' value={ID} onChange={(event) => setID(event.target.value)}>
                            {optionsId}
                        </select>
                    </div>

                    <div className={classes.formRight}>
                        <label htmlFor="ProductName">{adminCreateForm.form_name_product}</label>
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
            <Button disabled={isEmptyProductName}>{adminCreateForm.button_create}</Button>
        </form>
    );
}