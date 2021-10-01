import React from "react";
import { Link } from "react-router-dom";
import { postDogs,getTemperaments } from "../../actions";
import{useDispatch,useSelector}from 'react-redux';
import{useState,useEffect}from'react';
import style from './DogCreated.module.css';

export default function DogCreated(){
    const dispatch=useDispatch();
    const temperament=useSelector((state)=>state.temperament)

    const [input,setInput]=useState({
        name:"",
        heigth:"",
        weigth:"",
        life_span:"",
        image:"",
        temperament:[]
    })

    useEffect(()=>{
        dispatch(getTemperaments());
    },[]);

    function handleChange(e){
        setInput({
            ...input,
            [e.tatget.name]:e.target.value
        });
    };

    function handleSelect(e){
        if(input.temperament.includes(e.target.value)){
            alert ("That temperament already exist, choose another")
        }else{
            setInput((temps)=>({
                ...temps,
                temperament:[...temps.temperament,e.target.value]
            }));
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postDogs(input));
        alert ('Success!');
        setInput({
            name:"",
            height: "",
            weight: "",
            life_span: "",
            imagen:"",
            temperament: []
        })
    }

    return(
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
               <fieldset>
                <p className={style.titlte}>Create your dog</p>
                <div>
                    <input key="name"
                    className={style.input}
                    placeholder="Breed"
                    type='text'
                    name='name'
                    value={input.name}
                    onChange={(e)=>handleChange(e)}
                    required>
                    </input>
                </div>
                <div>
                    <input className={style.input}
                    placeholder='Max Heigth - Min Heigth'
                    type='text'
                    name='heigth'
                    value={input.heigth}
                    onChange={(e)=>handleChange(e)}
                    required></input>
                </div>

                <div>
                    <input className={style.input}
                    placeholder='Max Weigth - Min Weigth'
                    type='text'
                    name='weigth'
                    value={input.weigth}
                    onChange={(e)=>handleChange(e)}
                    required></input>
                </div>

                <div>
                    <input className={style.input}
                    placeholder='Life span'
                    type='text'
                    name='life_span'
                    value={input.life_span}
                    onChange={(e)=>handleChange(e)}
                    required></input>
                </div>
                <div>
                    <input className={style.input}
                    placeholder='Image'
                    name='image'
                    type='text'
                    value={input.image}
                    onChange={(e)=>handleChange(e)}></input>
                </div>

                <div className={style.content}>
                    <select
                        className={style.tempContainer}
                        type='text'
                        name='temperament'
                        value={input.temperament}
                        onChange={(e)=>handleSelect(e)}
                        required>
                            <option value={input.temperament}>Temperament</option>
                            {
                                temperament?.map((e)=>(
                                    <option className={style.op}
                                    value={e.name}
                                    key={e.id}>{e.name}</option>
                                ))
                            }
                        </select>
                        <ul>
                            <li className={style.li}>{input.temperament.map(i=>i+', ')}</li>
                        </ul>
                </div>
                <button className={style.submit}
                type='submit'
                name='submit'>Add</button>
                <Link to='/home'><button className={style.btn}>Home</button></Link>
                </fieldset>
            </form>
        </div>
    )
}