import styles from '../Popper/Menu/Menu.module.scss'
import classNames from "classnames";
const cx = classNames.bind(styles)
function MenuItem({children}) {
    return (  
        <div className={cx('menu-item')}>
            <span>
                {children.icon}
            </span>
            <div>{children.name}</div>
        </div>
    );
}

export default MenuItem;
