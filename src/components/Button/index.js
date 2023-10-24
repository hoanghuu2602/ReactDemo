import clsx from 'clsx';
import styles from './Button.module.css'

function Button({ primary, value }) {
    const classnames = clsx(styles.btn, {
        [styles.primary]:primary
    })
    return (
        <div>
            <button
                className={classnames}
            
            >{ value}</button>
{/*             
        <h1 className="test">Button</h1>
        <h2 className={clsx(styles.demo)}>Test module</h2> */}
    </div>
    );
}

export default Button;