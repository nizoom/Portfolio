import React from 'react';
import './css/intro.css'
import { ReactComponent as MySVG} from './css/loader2.svg'
import { useHistory } from 'react-router-dom';

const IntroScreen = (props) => {

    const history = useHistory();

    function goToHomeScreen(){
        setTimeout(() => { history.push("/")}, 5000);
       
    }

    goToHomeScreen();

    return (
        <div className='background-covering intro-screen-parent'>
            <div className='middle-content-wrapper fade-out'>

                <MySVG/>

            </div>
        </div>
    )
}

export default IntroScreen;
