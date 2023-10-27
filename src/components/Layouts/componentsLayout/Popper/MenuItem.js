import Button from '../../../Button';
import styles from '../Popper/Menu/Menu.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles)


function MenuItem({ data, onClick }) {
    return (
        <div>

            <Button
                text
            className={cx('menu-item')}
                leftIcon={data.icon}
                onClick={onClick}
        >{data.name}</Button>
        </div>
    );
}

export default MenuItem;
