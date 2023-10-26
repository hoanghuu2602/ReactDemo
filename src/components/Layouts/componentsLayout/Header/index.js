// import clsx from "clsx";


import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from "classnames/bind";
import styles from './Header.module.scss'
import images from "../../../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faL, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Popper from '../Popper';
import AcountItem from '../../../AcountItem';
import Button from '../../../Button';
const cx = classNames.bind(styles)
function Header() {
    return (
        <div className={cx('wrapper')} >
            {/* <div className={clsx(styles.wraperHeader)} > */}
            <div className={cx('inner')} >
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo" />
                </div>

                <Tippy

                    visible
interactive
                    render={attrs => (

                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            {/* <Popper>
                                <AcountItem />
                                <AcountItem />

                            </Popper> */}
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck='false' />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                            {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> */}
                        </button>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon className={cx('load')} icon={faSpinner} />
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button
                   text
                    >Upload</Button>
                    <Button
                        rounded
                    //    target ='_blank'
                    //     href ='/abc'
                        // onClick={()=>alert('Click')}
                    >Login</Button>

                </div>
            </div>
        </div>

    )
}

export default Header;