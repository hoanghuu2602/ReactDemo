// import clsx from "clsx";


import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from "classnames/bind";
import styles from './Header.module.scss'
import images from "../../../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical, faMagnifyingGlass, faSignIn, faSpinner } from "@fortawesome/free-solid-svg-icons";
import {Wrapper as PopperWrapper} from '../Popper';
import AcountItem from '../../../AcountItem';
import Button from '../../../Button';
import Menu from '../Popper/Menu';


const cx = classNames.bind(styles)
function Header() {
    const menuList = [
        {
            icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
            name:'English'
    },
        {
            icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
            name:'FeeBack and helper'
    },
        {
            icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
            name:'Keyboard shortcuts'
    }
]


    return (
        <div className={cx('wrapper')} >
            <div className={cx('inner')} >
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo" />
                </div>

                <Tippy

                    // visible
                    interactive
                    render={attrs => (

                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />

                            </PopperWrapper>
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
                        primary
                        rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                    >Login</Button>



                  
                            
                    <Menu item={menuList}>
                        
                            <button className={cx('more-btn')} >
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                     </Menu>
              
                </div>
            </div>
        </div>

    )
}

export default Header;