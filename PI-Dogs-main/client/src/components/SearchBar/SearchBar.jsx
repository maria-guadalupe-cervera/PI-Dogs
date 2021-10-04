import React from "react";
import { useState } from "react";
import {useDispatch}from'react-redux';
import{getNameDogs}from'../../actions';
import style from './SearchBar.module.css'

export default function SearchBar(){
    const dispatch=useDispatch();
    const [name,setName]=useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    };
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNameDogs(name));
        setName('');
    };
    return(
  
        <div className={style.SearchBar}>
            <input className={style.input}
            type='text'
            placeholder='Enter a breed...'
            value={name}
            onChange={(e)=>handleInputChange(e)}/>
            <button className={style.button}
            type="submit"
            onClick={(e)=>handleSubmit(e)}>
            Search
            </button>
        </div>
        
    )
}