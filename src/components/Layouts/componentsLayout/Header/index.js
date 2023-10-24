import clsx from "clsx";
import styles from './Header.module.scss'


function Header() {
    return (<div className={clsx(styles.wraperHeader)} >
        <div className={clsx(styles.header)} >

            <h1>Header</h1>
        </div>
    </div>

    )
}

export default Header;