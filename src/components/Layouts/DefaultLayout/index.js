import Header from '../componentsLayout/Header'
import Sidebar from '../componentsLayout/Sidebar'
import styles from './DefaultLayout.module.scss'
import clsx from 'clsx';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={clsx(styles.container)}>
                <Sidebar />
                <div className='Content'> {children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

