import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import styles from './AcountItem.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles)


function AcountItem(props) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('user-img')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0483e0e7ed7eda2845794a1d7f72a908~c5_100x100.jpeg?x-expires=1698462000&x-signature=eZtg8yomSS2TPqERLxY0xOzmr2w%3D" alt="avatar" />
            <div className={cx('user-detail')} >
                <h3 className={cx('user-name')}>
                    <span>Nguyen Van Cuong</span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    
                </h3>
                <p className={cx('user-description')} >
                    description description
                </p>
            </div>
        </div>
    );
}

export default AcountItem;