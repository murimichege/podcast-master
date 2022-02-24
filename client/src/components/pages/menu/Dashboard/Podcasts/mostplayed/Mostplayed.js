import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';

function Mostplayed() {
    return (
        <div className='Most-popular-container'>
            <div className='Most-popular-header'>
                <h3>MOST POPULAR</h3> 
            </div>
            
            <div className='Most-popular-cards'>
                <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
                    <Grid item xs={6}>
                <div className='Most-popular-left-card'>
                    <Box>
                    <div className='Most-popular-left-card-image'>
                    <img/>
                    </div>
                    <div className='Most-popular-left--caption'>

                    </div>

                    </Box>
                    

                </div>
                </Grid>
                <Grid item xs={6}>
                <div className='Most-popular-left-card'>
                    <Box>
                    <div className='Most-popular-left-card-image'>
                    <img/>
                    </div>
                    <div className='Most-popular-left--caption'>

                    </div>

                    </Box>
                    

                </div>
                </Grid>

                <div className='Most-popular-rights-card'>
                    <Grid item xs={6}>
                    <div className='Most-popular-right-card'>
                    <Box>
                    <div className='Most-popular-right-card-image'>
                    <img/>
                    </div>
                    <div className='Most-popular-right--caption'>

                    </div>

                    </Box>
                    

                </div>
                        </Grid>

                        <Grid item xs={6}>
                    <div className='Most-popular-right-card'>
                    <Box>
                    <div className='Most-popular-right-card-image'>
                    <img/>
                    </div>
                    <div className='Most-popular-right--caption'>

                    </div>

                    </Box>
                    

                </div>
                        </Grid>
                </div>
                
                </Grid>
                </Box>
            </div>
            
        </div>
    )
}

export default Mostplayed
