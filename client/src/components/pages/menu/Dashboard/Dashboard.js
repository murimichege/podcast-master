import React from 'react'
import Header from '../../../Header/Header'
import Sidebar from '../../../sidebar/Sidebar'
import Podsearch from './podsearch'
import Podcasts from '../Dashboard/Podcasts/Podcasts'
function Dashboard() {
    return (
        <div className = 'dashboard'>
            <aside className='side-bar-div'>
            <Sidebar/>
            </aside>
            <div className='Header'>
                
            </div>
        
            
           <div className = 'mid-container'>
               <div className = 'main-container'>
                   <Podcasts/>
               </div>
               <aside className = 'right-container'>
                   <Podsearch/>
               </aside>
              
                     
</div>
        </div>
    )
}

export default Dashboard
