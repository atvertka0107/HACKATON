import classes from './MainContainer.module.css'

export default function MainContainer({text, children}){
    return(
        <body>
            <section className={classes.mainSection}>
                <h1>{text}</h1>
                {children}
            </section>
        </body>
    );
}