import classes from './Header.module.css'
import { Routes, Route, Link} from 'react-router-dom'

export default function Header(){
    return(
    <>
     <header className={classes.header}>
            <div className={classes.inner}>
                <div className={classes.top}>
                    <div className={classes.options}>
                        <Link to="/sign_contract" className={classes.a}><img src="./src\refs\Assignment add.svg" alt='Оформление договора' className={classes.icon} /><span className={classes.a_text}>Оформление договора</span></Link>
                        <Link to="/history" className={classes.a}><img src="./src\refs\History.svg" alt='История договоров' className={classes.icon} /><span className={classes.a_text}>История договоров</span></Link>
                        <Link to="/insuarance_products" className={classes.a}><img src="./src\refs\Vector.svg" alt='Продукты страхования' className={classes.icon} /><span className={classes.a_text}>Продукты страхования</span></Link>
                    </div>
                    <div className={classes.home_outer}><Link to="/" className={classes.home}><img src="./src\refs\Account circle.svg" className={classes.home_icon} />Личный кабинет</Link></div>
                </div>
                <div className={classes.bottom}>
                <Link to="/"><img src="https://api.soglasie.ru/storage/media/conversions/68319/d67a11b0-a408-4853-857f-a2cb6e2395e3-opti.png" alt="Страховая компания Согласие" className={classes.logo} /></Link>
                </div>
            </div>
        </header>
    </>
    );
}