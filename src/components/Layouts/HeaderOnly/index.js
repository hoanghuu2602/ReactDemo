import Header from '../componentsLayout/Header'
// import Header from '../componentsLayout/Header'

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className='container'>
               {children}
            </div>
        </div>
    );
}

export default HeaderOnly;

