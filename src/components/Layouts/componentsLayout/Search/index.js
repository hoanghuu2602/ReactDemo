
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSignIn, faSpinner, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from '../Popper';
import AcountItem from '../../../AcountItem';
import { useEffect, useState, useRef } from 'react';

import styles from './Search.module.scss'
import classNames from 'classnames/bind'
import { useDebounce } from '../../../../hook';

const cx = classNames.bind(styles)



function Search() {

    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

const inputRel =useRef()
    
    const debouncer =useDebounce(searchValue,500)
    
    useEffect(() => {
        if (!debouncer.trim()) {
            setSearchResult([])
            return
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
        })

      
    }, [debouncer])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRel.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }
    const handleShowResult = () => {
        setShowResult(true)
    }
    const handleChane = (e) => {
        setSearchValue(e.target.value)
        setSearchResult([1, 2, 3])

        // https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less

    }

    return (<div>
        <Tippy

            visible = {showResult && searchResult.length >0}
            interactive
            render={attrs => (

                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Acounts</h4>
                        {searchResult.map((item, index) => (
                           <AcountItem data ={item}  key={index}/>
                       ))}
                        
                        

                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRel}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck='false' 
                    onChange={(e) => handleChane(e)}
                    onFocus={handleShowResult}
                    
                />
                {!!searchValue && (
                // KHi co gia tri input thi xuat hien icon clear
                    <button className={cx('clear')} onClick={handleClear} >
                        <FontAwesomeIcon icon={faCircleXmark} />
                        {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> */}
                    </button>
              )}
                {true && (
                
                <FontAwesomeIcon className={cx('load')} icon={faSpinner} />
                )}
                
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

            </div>
        </Tippy>
    </div>);
}

export default Search;