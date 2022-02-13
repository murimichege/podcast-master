import React from 'react'
import Header from '../../Header/Header'
import Sidebar from '../../sidebar/Sidebar'
import Podsearch from './Dashboard/podsearch'
function Dashboard() {
    return (
        <div className = 'dashboard'>
            <Header/>
            <Sidebar/>
           <div className = 'mid-container'>
               <div className = 'main-container'>

               </div>
               <div className = 'right-container'>
                   <Podsearch/>

               </div>
                     
</div>
        </div>
    )
}

export default Dashboard
