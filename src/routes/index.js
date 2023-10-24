import Following from '../components/pages/Following'
import Home from '../components/pages/Home'
import Upload from '../components/pages/Upload'
import Search from '../components/pages/Search'
import  HeaderOnly from '../components/Layouts/HeaderOnly'
// Public Router
const publicRoutes = [
    { path: '/following', component: Following},
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/', component: Home},
]

// Private Router
const privateRoutes = []
export {publicRoutes,privateRoutes}