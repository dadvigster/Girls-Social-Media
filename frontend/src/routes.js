import {Route, Routes} from 'react-router-dom'
import Home from './screens/Home'
import NotFound from './screens/NotFound'

export default function ProjectRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}