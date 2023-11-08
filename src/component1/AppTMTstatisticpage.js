import React from 'react'
import './AppTMTstatisticpage.css'
import { Link } from 'react-router-dom'

const AppTMTstatisticpage = () => {
    const statisticpagediv = {
        backgroundColor: 'rgb(237, 112, 98)',
        backgroundsize: "cover",
        backgroundRepeat: "no-repeat",
        height: '100vh',
        width: '100vw',
        color: 'white',
        position: 'fixed'
    };

    // function AppTMThomepage() {
    return (
        <>
            <div className='statisticpagediv2' style={statisticpagediv}>
                <nav className='statisticpagenavdiv2'>
                    <div className='logoandbackbuttondiv'>
                        <div className='logo2'>QuickSchedule</div>
                        <button id='gobackbutton'>
                            <Link to='/apptmthomepage' className='gobacklink' >
                                Go Back
                            </Link>
                        </button>
                    </div>
                    <div className='statpage2'> Get your Weekly and Monthly Performance Report Here!</div>
                </nav>
                <div className='taskorganizerdiv2'>
                    <div className='homepageinputdiv2'>
                        <input id='homepageinputspace2' className='email inputspace1' type="date" />
                        <input id='homepageinputspace2' className='password inputspace2' type="date" />
                        <button className='createbutton2'>
                            Search
                        </button>
                    </div>
                    <div class="taskmanagementdiv2">
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppTMTstatisticpage