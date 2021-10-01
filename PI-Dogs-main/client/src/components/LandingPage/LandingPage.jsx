import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import style from './LandingPage.module.css';
import video from '../../media/video-bg.mp4'




const LandingPage = () => { 
    return (
        <div className={style.container}>
         <video autoPlay loop muted >
            <source src={video} type='video/mp4'/>
         </video>
        <div className = {style.bar}>
            <h1>DOoGLE</h1>
            <NavLink to ='/home'>
                <button className={style.btn}>Home</button>
            </NavLink>
        </div>
        
        </div>
    )
}; 


export default LandingPage;