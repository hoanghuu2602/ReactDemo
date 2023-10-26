import Tippy from "@tippyjs/react/headless";
import {Wrapper as PopperWrapper} from "..";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'

import MenuItem from "../MenuItem";

const cx = classNames.bind(styles)


function Menu({ children, item = [] }) {
    

    return (
        <Tippy
            interactive
            placement='bottom-end'
            render={attrs => (

                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {/* <ul> */}

                        {item.map((item,i) => (
                            <MenuItem key={i}>{item }</MenuItem>
                     ))}
                        {/* </ul> */}
                        
                    </PopperWrapper>
                </div>
            )}
        >




          {children}
        </Tippy>
    );
}

export default Menu;