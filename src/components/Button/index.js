import classNames from 'classnames/bind';
import styles from './Button.module.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function Button({ to, href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded=false,
    disabled = false,
    leftIcon=false,
    rightIcon=false,
    children, onClick, ...passprops }) {
    
    let Comp = 'button'
    const classnames = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        disabled,
        leftIcon,
        rightIcon,
    })
    // false thif class. ko hien thi
    const props = {
        onClick,
        ...passprops
    }
    if (to) {
        props.to = to
    Comp =Link
    } else {
        props.href = href
        Comp = 'a';
    }
    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
           }
       })
    }
    // End Remove event listener when btn is disabled

    return (
        <Comp className={classnames} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{ children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
           </Comp>
    );
}

export default Button;