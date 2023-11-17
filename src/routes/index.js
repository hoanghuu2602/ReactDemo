import Following from '../components/pages/Following'
import Home from '../components/pages/Home'
import Upload from '../components/pages/Upload'
import Search from '../components/pages/Search'
import Profile from '../components/pages/Profile'
import Login from '../components/pages/Login'
import  HeaderOnly from '../components/Layouts/HeaderOnly'
// Public Router
const publicRoutes = [
    { path: '/following', component: Following},
    { path: '/login', component: Login},
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/@:nickname', component: Profile, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/', component: Home},
]

// Private Router
const privateRoutes = []
export {publicRoutes,privateRoutes}