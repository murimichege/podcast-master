import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Dashboard from '../components/pages/menu/Dashboard'
import Trending from '../components/pages/menu/Trending'
import Speaker from '../components/pages/menu/speaker'
import Genre from '../components/pages/menu/Genre'
import Registration from '../authentication/Authentication'

function Main() {
    return (
        
        <Routes>
            <Route path = '/' element = {<Registration/>}/>
            <Route path = '/Dashboard' element = {<Dashboard/>}/>
            <Route path = '/Trending' element = {<Trending/>}/>
            <Route path = '/Genre' element = {<Genre/>}/>
            <Route path = '/Speaker' element = {<Speaker/>}/>
        </Routes>
    )
}

export default Main