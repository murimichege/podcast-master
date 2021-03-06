import React from 'react'
import playbtn from '../../assets/playbtn.png'


function Sidebaritem(props) {
    const active = props.active ? "active" : ""

    return (
        <div className='sidebar_item'>
                            

            <div className= {`sidebar_inner_item${active}`}> 
            <i> {props.icon}</i>

            <span>
                {props.title}
            </span>

            </div>
        </div>
    )
}

export default Sidebaritem
