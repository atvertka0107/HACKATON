import { useState } from 'react';
import classes from './Header.module.css'
import { Routes, Route, Link} from 'react-router-dom'

export default function Header({type}){
    const [leaveTxt, setLeaveTxt] = useState('Выйти');
    const [leave, setLeave] = useState(false);
    const [cursor, setCursor] = useState();

    function handleCursorOut(event){
        setLeave(false);
        setLeaveTxt('Выйти');
    }

    function handleLeave(event){
        setLeave(true);
        setLeaveTxt('Подтвердить?');
    } 

    let links = type.map(function(item){
        return <Link to={item[0]} className={classes.a}><img src={item[2]} className={classes.icon} /><span className={classes.a_text}>{item[1]}</span></Link>
    });

    return(
    <>
     <header className={classes.header}>
            <div className={classes.inner}>
                <div className={classes.top}>
                    <div className={classes.options}>
                        {links}
                    </div>
                    <div className={classes.home_outer}><Link to="/" onMouseLeave={handleCursorOut} className={leave ? `${classes.home} ${classes.accept}` : classes.none}><img src="../src\refs\Exit to app.svg" className={classes.home_icon} />{leaveTxt}</Link></div>
                    <div className={classes.home_outer}><a className={leave ? `${classes.home} ${classes.none}` : classes.home} onClick={handleLeave}><img src="../src\refs\Exit to app.svg" className={classes.home_icon} />{leaveTxt}</a></div>
                </div>
                <div className={classes.bottom}>
                <Link to="/"><img src="https://api.soglasie.ru/storage/media/conversions/68319/d67a11b0-a408-4853-857f-a2cb6e2395e3-opti.png" alt="Страховая компания Согласие" className={classes.logo} /></Link>
                </div>
            </div>
        </header>
    </>
    );
}