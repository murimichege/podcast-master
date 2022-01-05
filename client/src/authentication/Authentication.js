import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux'

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



const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
}

const GoogleSuccess = async(res) => {
//console.log(res)
const result = res?.profileObj;
const token = res?.tokenId;

try {
    dispatch({type: 'AUTH', data : {result, token}})
    
} catch (error) {
    
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

    const {fullName, userName, Email, PhoneNumber, PassWord, ConfirmPassWord, avatarURL} = form;
    
}
    return (
        <div className = 'form-container'>
			<div className = 'form-left-container'>    
                <form onSubmit = {handleSubmit} className = 'form'>
                      { isSignUp && (
                          <div className='auth-form-field'>
                          <input
                          name="Full Name"
                          type="text"
                          placeholder="Full Name"
                          className =  "form-input"
                          onChange={handleChange}
                          required
                          />
                      </div>)
                      }  
                        
                        { isSignUp && (<div className='auth-form-field'>
                            <input
                            name="User Name"
                            type="text"
                            placeholder="User Name"
                            className =  "form-input"
                            onChange={handleChange}
                            required
                            />
                        </div>)
                  }
                        <div className='auth-form-field'>
                            <input
                            name="Email"
                            type="text"
                            placeholder="Email"
                            className =  "form-input"
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div className = 'auth-form-field'>
                                <input
                                name="Password"
                                type="password"
                                placeholder="Password"
                                className =  "form-input"
                                onChange={handleChange}
                                required
                                />
                        </div> 
                        {isSignUp && (
                            <div className = 'auth-form-field'>
                                <input
                                name="Confirm Password"
                                type="password"
                                placeholder="Confirm Password"
                                className =  "form-input"
                                onChange={handleChange}
                                required
                                />
                        </div> )

                        }      
                </form>
                <div className='form-auth'>
                            <p>
                            {
                                isSignUp
                                ? "Already have an account"
                                : "Don't have an account?"
                            }
                              <span onClick={switchMode}>
                             {isSignUp ? 'Sign In' : 'Sign Up'}
                             </span>
                            </p>

                        </div>
                        <div className='form-submit'>
                          <button>{isSignUp ? "SignIn" : "SignUp"}</button>
                      </div>

                      <div className="footer-auth-buttons">
                    <p className='footer-p'>Login with</p>
                    <GoogleLogin
                    clientId = "824831298570-tc2idrmgrfhpgkc0qlu2s06ngk3r7r75.apps.googleusercontent.com"
                    render = {(renderProps) => (
                        <Button color= 'primary' 
                        fullwidth 
                        onClick = {renderProps.onClick} 
                        disabled = {renderProps.disabled} 
                        //startIcon = {}
                        variant = 'contained'
                        >
                        Google SignIn
                    </Button>
                    )}
                    onSuccess = {GoogleSuccess}
                    onFailure = {GoogleFailure}
                    cookiePolicy = 'single_host_origin'
                    />

                  

                    <span className="span"> Google</span>
                </div>
                
            </div>
           
            <div className = 'form-right-container'>

            </div>
        </div>
    )
}

export default Authentication;
