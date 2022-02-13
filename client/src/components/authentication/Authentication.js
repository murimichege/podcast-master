import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { FcGoogle } from 'react-icons/fc';
import background1 from '../../components/img/background1.jpg'

function Authentication() {


    //https://dribbble.com/shots/15583314-Log-in-page
// initial states for all fields
const initialstate = {
    FirstName: '',
    SecondName: '',
    Email: '',
    Password:'',
    ConfirmPassWord:''
}

// hooks
const [form, setForm] = useState(initialstate);
const [isSignUp, setisSignUp]= useState(true);

const dispatch = useDispatch();
const navigate = useNavigate();


const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
}

const GoogleSuccess = async(res) => {
//console.log(res)
const result = res?.profileObj;
const token = res?.tokenId;

try {
    dispatch({type: 'AUTH', data : {result, token}})
    navigate('/Dashboard')
    
} catch (error) {
    console.log(error)
}

}

const GoogleFailure = (error) => {
    console.log(error)
    console.log("Google Sign In was unsuccessful. Please try again")
}

const switchMode = () => {
    setisSignUp((prevState) => !prevState)
}
const handleSubmit = (e) => {
    e.preventDefault();

   // const {fullName, userName, Email, PhoneNumber, PassWord, ConfirmPassWord, avatarURL} = form;
    
}
    return (
        <div className = 'form-container'>
			<div className = 'form-left-container'>    
                <form onSubmit = {handleSubmit} className = 'form'>
                      { isSignUp && (
                          <div className='auth-form-field'>
                          <TextField
                          name="Full Name"
                          type="text"
                          label="Full Name"
                          className = "form-input"
                          onChange={handleChange}
                          required
                          />
                      </div>)
                      }  
                        
                        { isSignUp && (<div className='auth-form-field'>
                            <TextField
                            name="User Name"
                            type="text"
                            label="User Name"
                            className =  "form-input"
                            onChange={handleChange}
                            required
                            />
                        </div>)
                  }
                        <div className='auth-form-field'>
                            <TextField
                            name="Email"
                            type="text"
                            label="Email"
                            className ="form-input"
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div className = 'auth-form-field'>
                                <TextField
                                name="Password"
                                type="password"
                                label="Password"
                                className =  "form-input"
                                onChange={handleChange}
                                required
                                />
                        </div> 
                        {isSignUp && (
                            <div className = 'auth-form-field'>
                                <TextField
                                name="Confirm Password"
                                type="password"
                                label="Confirm Password"
                                className =  "form-input"
                                onChange={handleChange}
                                required
                                />
                        </div> )

                        } 
                    <button className = "form-input-submit" color= 'primary'>{isSignUp ? "SignUp" : "SignIn"}</button>
                    <div className='form-auth'>
                            <p>
                            {
                                isSignUp
                                ? "Already have an account?"
                                : "Don't have an account?"
                            }
                              <span onClick={switchMode}>
                             {isSignUp ? 'Sign In' : 'Sign Up'}
                             </span>
                            </p>

                        </div>
                        <Divider className = "sign-in" style={{marginRight:"180px"}} >Or Sign In With</Divider>

                        <div className='form-submit'>
                      </div>

                      <div className="footer-auth-buttons">
                    <GoogleLogin
                    clientId = "824831298570-tc2idrmgrfhpgkc0qlu2s06ngk3r7r75.apps.googleusercontent.com"
                    render = {(renderProps) => (
                        <Button color= 'primary' 
                        startIcon={<FcGoogle />}
                        onClick = {renderProps.onClick} 
                        disabled = {renderProps.disabled} 
                        //startIcon = {}
                        style={{borderRadius:"17px", width:'50%', height: '40px', marginLeft: '20px'}}
                variant = 'contained'
                        >
                        {<icon/> && 'Google SignIn'}
                    </Button>
                    )}
                    onSuccess = {GoogleSuccess}
                    onFailure = {GoogleFailure}
                    cookiePolicy = 'single_host_origin'
                    />
                </div>
                
                </form>
                
            </div>
           
            <div className = 'form-right-container'>

            </div>
        </div>
    )
}

export default Authentication;
