import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import { FaPlay } from 'react-icons/fa';
import {GiHeadphones} from 'react-icons/gi'
import Recent from './Recent/RecentPlay'
import {recentitems} from './Recent/Recentitems'
import Mostplayed from './mostplayed/Mostplayed';
import './Podcasts.css'

function Podcastitem() {

    let iconStyles = { color: "#007aff", fontSize: "1.5em" };


    return (
        <div className='container'>
            <div className='trending-podcasts-container'>
                <div className='trending-podcasts-container-header'>
                <h3 className = 'trending-search-header'>TRENDING PODCASTS</h3>
                </div>
               <div className='trending-podcasts-container-card'>
                        
                    <Box 
                    sx={{
                        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: '45rem',
          height: '16.5rem',
          borderRadius:'1.5rem',
          backgroundColor:'#1d242c'
        },

                    }}
                    
                    >
                        <Paper elevation={3}>
                                

                            <div className='Card-title'>
                            <h1 style={{fontSize:'40px'}}>On Purpose</h1>
                            <h3 style={{fontSize:'25px'}}>with Jay Shetty</h3>
                            <span >
                            <FaPlay style={iconStyles}/>
                            </span>
                            <span >
                            <GiHeadphones style={iconStyles}/>
                            </span>         
                            </div>

                            <div className='podcast-thumbnail'>

                          
 
                            </div>
                           
                            </Paper>

                    </Box>



                </div>

            </div>
            <div className='Recent-container'>
                {
                   recentitems &&recentitems.map((item, index) =>(
                       <Recent
                       key={index}
                       title={item.title}
                       artist={item.artist}
                       thumbnail={item.thumbnail}
                       />

                   )) 
                }

            </div>
         
           
 <div className='Most-popular-container'>
     {
         recentitems && recentitems.map((item, index) => {
             return(
                 <Mostplayed
                 key={index}
                 title={item.title}
                 artist={item.artist}
                 thumbnail={item.thumbnail}
                 />

             )
         })
     }

               
            </div>

        </div>
    )
}

export default Podcastitem
