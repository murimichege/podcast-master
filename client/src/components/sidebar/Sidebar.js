import React from 'react'
import Sidebaritem  from './sidebaritem'
import {menuroutes} from './sideitems'
import { librarymenu } from './sideitems'
import { customizemenu } from './sideitems'
import {Link} from 'react-router-dom'
import Divider from '@mui/material/Divider';



function Sidebar(props) {

    const activeitem = menuroutes.findIndex(item => item.route=== window.location.pathname)

    return (
        <div className ='sidenav'>
            <div className='side-nav-items'>
                <div>
                    <h4 className='side-nav-heading'>MENU</h4>
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
            </div>
            <Divider />
             </div>
             <div>
             <h4 className='side-nav-heading'>LIBRARY</h4>

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
             </div>
            
            <div>
            <h4 className='side-nav-heading'>CUSTOMIZE</h4>

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
            </div>
        </div>
    )
}

export default Sidebar
