import React from 'react'
import './podsearch.css'
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import {IoSearchCircle} from 'react-icons/io5'
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
const handleChange = ()=>{

}
const onClickSearch = () =>{

}
function Podsearch() {
    return (
        <div className='container'>
          
            <h3 className = 'search-header'>QUICK SEARCH</h3>
            <div className='input-icons'>
            <FormControl sx={{ m: 1, width: '45ch', height:'30ch', borderRadius:'10ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={onClickSearch}
                  edge="end"
                >
                  {<IoSearchCircle/>}
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
            </div>
            <div className='top-podcasters'>
                <h3 className='top-podcaster-header'>TOP PODCASTERS</h3>
                <div className='top-podcaster-content'>
                        <CardHeader
  avatar={
    <Avatar
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
    />
  }
  title='Joe rogan'
  
/>
                        
<CardHeader
  avatar={
    <Avatar
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
    />
  }
  title='Joe rogan'
/>
<CardHeader
  avatar={
    <Avatar
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
    />
  }
  title='Joe rogan'
/>    
                     

                </div>

            </div>
            
            <div className='player-card'>
              

              </div>


        
        </div>
    )
}

export default Podsearch
