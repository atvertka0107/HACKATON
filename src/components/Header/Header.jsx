import classes from './Header.module.css'

export default function Header(){
    return(
        <header className={classes.header}>
            <div className={classes.inner}>
                <div className={classes.top}>
                </div>
                <div className={classes.bottom}>
                <img src="https://api.soglasie.ru/storage/media/conversions/68319/d67a11b0-a408-4853-857f-a2cb6e2395e3-opti.png" alt="Страховая компания Согласие" className={classes.logo} />
                </div>
            </div>
        </header>
    );    
}