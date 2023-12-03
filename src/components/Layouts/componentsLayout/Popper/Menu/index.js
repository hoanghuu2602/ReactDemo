import Tippy from "@tippyjs/react/headless";
import {Wrapper as PopperWrapper} from "..";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'

import MenuItem from "../MenuItem";
import { useState } from "react";
import Header from "./Header";

const cx = classNames.bind(styles)


function Menu({ children, items = [] }) {
    const [history, setHistory] =useState([{data:items}])
    const curent = history[history.length - 1] // Lay phan tu cuoi cua mang
    
    // console.log('history',history)

    const renderItem = () => {
        
        return (
            curent.data.map((item, index) => {
                const isParent = !!item.children
                return <MenuItem
                    key={index}
                    data={item} 
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev)=>[...prev,item.children])
                        }
                    }}
                    />
            }
         )
        )
    }

    return (
        <Tippy
            interactive
            placement='bottom-end'
            delay={[0,700]}
            render={attrs => (

                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && 
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => 
                                        prev.slice(0,prev.length -1)
                                    )
                                }}
                            />
                        }
                        
                       {renderItem()}
                        
                    </PopperWrapper>
                </div>
            )}
            onHidden={()=>setHistory((prev)=>prev.slice(0,1))} // Set ve ban dau
        >




          {children}
        </Tippy>
    );
}

export default Menu;