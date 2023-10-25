// import clsx from "clsx";
import classNames from "classnames/bind";
import styles from './Header.module.scss'
import images from "../../../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function Header() {
    return (
        <div className={cx('wrapper')} >
        {/* <div className={clsx(styles.wraperHeader)} > */}
        <div className={cx('inner')} >
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo" />
            </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck='false' />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                        {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> */}
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className ={cx('load')} icon={faSpinner} />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    
            </div>
                <div className={cx('actions')}>actions</div>
        </div>
    </div>

    )
}

export default Header;