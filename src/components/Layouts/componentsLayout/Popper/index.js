import React from 'react';
import styles from './Popper.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)

function Popper({children}) {
    return (
        <div className={cx('wrapper')}>
            <h1>Acount</h1>
            {children}
        </div>
    );
}

export default Popper;