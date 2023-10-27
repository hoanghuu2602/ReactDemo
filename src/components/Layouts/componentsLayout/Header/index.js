// import clsx from "clsx";


import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from "classnames/bind";
import styles from './Header.module.scss'
import images from "../../../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical, faMagnifyingGlass, faSignIn, faSpinner, faBars, faCameraRetro, faShieldHalved, faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from '../Popper';
import AcountItem from '../../../AcountItem';
import Button from '../../../Button';
import Menu from '../Popper/Menu';
import Image from '../../../Image';
import { IconHome } from '../../../Icon';
import { useEffect, useState } from 'react';
import Search from '../Search';


const cx = classNames.bind(styles)
function Header() {





    const menuList = [
        {
            icon: <FontAwesomeIcon icon={faCameraRetro} />,
            name: 'English',
            children: {
                title: "Language",
                data: [
                    {
                        code: 'en',
                        name: "English"
                    },
                    {
                        code: 'vi',
                        name: "Tieng Viet"
                    },
                ]
            }
        },
        {
            icon: <FontAwesomeIcon icon={faBars} />,
            name: 'FeeBack and helper'
        },
        {
            icon: <FontAwesomeIcon icon={faShieldHalved} />,
            name: 'Keyboard shortcuts'
        }
    ]

    const curentUser = true
    return (
        <div className={cx('wrapper')} >
            <div className={cx('inner')} >
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo" />
                </div>

                {/* Search */}

                <Search />
                
                <div className={cx('actions')}>
                    {curentUser ? (
                        <div className={cx('curent-user')}>
                            <button className={cx('actions-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                           </button>
                            <button className={cx('actions-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                           </button>
                        </div>
                    ) : (
                        <div>

                            <Button
                                text
                                >
                                   Upload</Button>


                            <Button
                                primary
                                rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                            >Login</Button>

                        </div>
                    )}
                   
                    <Menu items={menuList}>
                        {curentUser ? (
                            <div>
                                <Image
                                    src='https://ap16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c897847e2477c35d335397539a1f918b~c5_100x100.jpeg?x-expires=1698566400&x-signature=UL7FroaEvFVU0fq1AGx7dz0YDQ8%3D'
                                    className={cx('avatar')}
                                    alt=""
                                    fallback="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a6e504cece0d24bed0c56b1059d83168.jpeg?x-expires=1698570000&x-signature=HLpcYk0yn3pGy1%2Bw6afLruyXlRQ%3D"

                                />   
                        </div>
                        ): (
                            
                        <button className={cx('more-btn')} >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
)}

                    </Menu>
                </div>



            </div>
        </div>

    )
}

export default Header;