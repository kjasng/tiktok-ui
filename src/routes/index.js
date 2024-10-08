// Layout
import { HeaderOnly } from '~/Components/Layout'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

// Public routes for guest
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }