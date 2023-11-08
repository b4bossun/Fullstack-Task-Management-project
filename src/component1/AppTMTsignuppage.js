import React from 'react'
import './AppTMTsignuppage.css'
import signuppageillustrativeimg from '../assetsandimages/signuppage/loginpageillustration.jpeg'
import { Link } from 'react-router-dom'

const AppTMTsignuppage = () => {
    const motherdiv = {
        backgroundColor: 'rgb(237, 112, 98)',
        backgroundsize: "cover",
        backgroundRepeat: "no-repeat",
        height: '100vh',
        width: '100vw',
        color: 'white',
        position: 'fixed'
    };

    // function AppTMTsignuppage() {
    return (
        <>
            <div class="motherdiv" style={motherdiv}>
                <div className='copysigninlogindiv'>
                    <h1 className='tmscopy'>
                        Task Management Software
                    </h1>
                    <p className='pcopy'>
                        Track, manage and analyze the tasks and activities that help you actualize your set goals. Streamlin your documentation process while at it. Want to make a difference? Get started below!
                    </p>
                    <input id='inputspace' className='name' type="text" placeholder="  first name and last name" required="required" />
                    <input id='inputspace' className='email' type="text" placeholder="  email address" required="required" />
                    <input id='inputspace1' className='password' type="password" placeholder="  password" required="required" />
                    <button className='signupbutton'>
                        <Link to='/apptmtloginpage' className='buttonlink' >
                            Get Started free
                        </Link>
                    </button>
                </div>
                <div class="imagediv">
                    <img src={signuppageillustrativeimg} className='lpimg' alt='signuppageillustrativeimg' style={{ width: '650px', height: '450px', borderRadius: '10px' }} />
                </div>
            </div>
        </>
    )
}

export default AppTMTsignuppage