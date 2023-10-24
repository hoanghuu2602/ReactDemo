import styles from './Sidebar.module.scss'
import clsx from 'clsx';

function Sidebar() {
    return (<aside className = {clsx(styles.wraper)}>
        Siderbawt
    </aside>
    )
}

export default Sidebar;