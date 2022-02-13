    import React from 'react'
    import {Link } from 'react-router-dom'
    import { Divider} from '@mui/material'
    import {headeritems} from '../sidebar/sideitems'
    import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'; 
    import Avatar from '@mui/material/Avatar';

    function Header() {


            
        
        return (
            <div className = 'header'>
                <div className = 'header-section'>
                    {
                        headeritems.map((item, index) =>(
                            <Link to ={item.route} key={index}>
                                <div className='left-header-section-item'>
                                    {item.title}
                                </div>
                            </Link>
                        ))
                    }
                            
                      <div className ='right-header-section'>
                    <div className='header-section-icon-item'>
                        <NotificationsRoundedIcon color = 'primary'/>
                    </div>
                    <div className='header-section-icon-item'>
                    <Avatar
        alt="Remy Sharp"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        sx={{ width: 30, height: 30 }}
      />


                    </div>


                        </div>

                    </div>

            </div>
        )
    }

    export default Header
