import React from 'react'
import Sidebaritem  from './sidebaritem'
import {menuroutes} from './sideitems'
import { librarymenu } from './sideitems'
import { customizemenu } from './sideitems'
import {Link} from 'react-router-dom'
import Divider from '@mui/material/Divider';
function Sidebar(props) {

    const activeitem = menuroutes.findIndex(item => item.route===window.location.pathname)

    return (
        <div className ='sidenav'>
            <div className='sidenav_icon'>
                <img/>
            </div>
            <div>
            {
                menuroutes.map((item, index) =>(
                    <Link to = {item.route} key={index}>
                        <Sidebaritem
                        title={item.name}
                        icon={item.icon}
                        active={index === activeitem}
                        
                        
                        
                        />
                    </Link>
                ))


            }
            <Divider />
             </div>
             <>
             {
                librarymenu.map((item, index) =>(
                    <Link to = {item.route} key={index}>
                        <Sidebaritem
                        title={item.name}
                        icon={item.icon}
                        active={index === activeitem}
                        
                        
                        
                        />
                    </Link>
                ))


            }
            <Divider />
             </>
            
            <>
            {
                customizemenu.map((item, index) =>(
                    <Link to = {item.route} key={index}>
                        <Sidebaritem
                        title={item.name}
                        icon={item.icon}
                        active={index === activeitem}
                        
                        
                        
                        />
                    </Link>
                ))


            }
            </>
        </div>
    )
}

export default Sidebar
