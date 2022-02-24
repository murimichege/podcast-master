import React from 'react'
import Dashboard from '../components/pages/menu/Dashboard/Dashboard'
import Trending from '../components/pages/library/Trending/Trending'
import Speaker from '../components/pages/menu/speaker'
import Genre from '../components/pages/menu/Genre'
import {Route, BrowserRouter, Routes} from 'react-router-dom'

import Authentication from '../components/authentication/Authentication'

function Approutes() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Authentication/>}/>
            <Route path = '/Dashboard' element = {<Dashboard/>}/>
            <Route path = '/Trending' element = {<Trending/>}/>
            <Route path = '/Genre' element = {<Genre/>}/>
            <Route path = '/Speaker' element = {<Speaker/>}/>
        </Routes>
        </BrowserRouter>
        
    )
}

export default Approutes
