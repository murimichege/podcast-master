import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './menu/Dashboard'
import Trending from './menu/Trending'
import Speaker from './menu/speaker'
import Genre from './menu/Genre'
import Registration from '../../authentication/Authentication'
function Main() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Registration/>}/>
            <Route path = '/Dashboard' element = {<Dashboard/>}/>
            <Route path = '/Trending' element = {<Trending/>}/>
            <Route path = '/Genre' element = {<Genre/>}/>
            <Route path = '/Speaker' element = {<Speaker/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Main
