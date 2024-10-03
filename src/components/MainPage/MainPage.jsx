import classes from './MainPage.module.css';
import { main_text } from '../../data';

export default function MainPage(){
    return (
        <div className={classes.container}>
        <div className={classes.text_container}>
            <h1 className={classes.h1}>{main_text.title}</h1>
            <p className={classes.p}>{main_text.desctription}</p>
        </div>
        <div className={classes.image_container}>
            <img src="./src\refs\white-offroader-jeep-parking.jpg" alt="car_logo" className={classes.image} />
        </div>
    </div>
    );
}