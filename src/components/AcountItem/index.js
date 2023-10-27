import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import styles from './AcountItem.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Image';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const cx = classNames.bind(styles)


function AcountItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('user-img')}
                src={data.avatar}
                alt="avatar" />
            <div className={cx('user-detail')} >
                <h3 className={cx('user-name')}>
                    <span>{data.full_name}</span>
                    {data.tick && (<FontAwesomeIcon icon={faCircleCheck} />)}
                    
                </h3>
                <p className={cx('user-description')} >
                    {data.bio}
                </p>
            </div>
        </Link>
    );
}

export default AcountItem;