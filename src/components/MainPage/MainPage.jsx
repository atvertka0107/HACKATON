import classes from './MainPage.module.css';

export default function MainPage(){
    return (
        <div className={classes.container}>
        <div className={classes.text_container}>
            <h1 className={classes.h1}>Web-сервис для проверки гипотез</h1>
            <p className={classes.p}>Инновационный подход к решению аналитических задач</p>
        </div>
        <div className={classes.image_container}>
            <img src="./src\refs\white-offroader-jeep-parking.jpg" alt="car_logo" className={classes.image} />
        </div>
    </div>
    );
}