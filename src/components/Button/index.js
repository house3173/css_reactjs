import styles from './Button.module.scss'
import clsx from 'clsx'

function Button({primary, disabled}) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled,
        'd-flex': false
    })
    return (
        <>
            <button className={classes}>
                Click me!
            </button>

            {/* <button className={clsx(styles.btn, {
                [styles.active]: true
            })}>
                Click me 2!
            </button> */}
        </>
        
    )
}

export default Button