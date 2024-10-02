import classes from './Button.module.css'

export default function Button( {type, children, onClick, isActive, ...props} ){
    return <button type={type} className={isActive ? classes.button : `${classes.button} ${classes.active}`} onClick={onClick} {...props}>{children}</button>;
}