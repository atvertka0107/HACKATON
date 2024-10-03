import classes from './Footer.module.css'

export default function Footer(){
    return (
        <footer className={classes.footer}>
        <div className={classes.container}>
            <p className={classes.name}>FNInTeam 2024</p>
            <img src="../src\refs\logo.svg" alt="FN_Logo" className={classes.img} />
        </div>
        </footer>
    );
}