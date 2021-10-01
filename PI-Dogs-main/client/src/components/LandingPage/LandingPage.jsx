import React from "react";
import{NavLink}from'react-router-dom';
import style from'./LandingPage.module.css';

const LandingPage=()=>{
    return(
        <div className={style.bar}>
            <h1>Doogle</h1>
            <NavLink to='/home'>
                <button className={style.btn}>
                    Home
                </button>
            </NavLink>
        </div>
    )
}

export default LandingPage;