import React from 'react';
import {Link} from 'react-router-dom';
import {postDogs,getTemperaments} from '../../actions/index';
import {useDispatch,useSelector} from 'react-redux' 
import {useState, useEffect} from 'react'; 
import style from './DogCreated.module.css'



export default function DogCreated (){ 
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperament)
    const [temps, setTemps] = useState([])    

    const [input,setInput] = useState({
        name: "",        
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        life_span:'',
        image:"",
        temperament: []
    })

    useEffect(() => {
        dispatch(getTemperaments());
        
    }/* ,[] */);

    function handleChange(e){
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
       
    };
    function handleSelect(e) {
           
            if(!temps.includes(e.target.value)){
                
                if(temps.length > 0){
                    setTemps([...temps, e.target.value])
                } else {
                    setTemps([e.target.value])
                }
            } 
    
    }
    function handleClick(e){
        e.preventDefault()
        setTemps(temps.filter(t => t !== e.target.value))
    }

    function handleSubmit(e) {
       
        e.preventDefault()
        
        const addDog= {
            name: input.name,
            height: `${input.min_height} - ${input.max_height}`,
            weight: `${input.min_weight} - ${input.max_weight}`,
            life_span: input.life_span,
            image: input.image,
            temperament: temps
        }
        dispatch(postDogs(addDog))
       
       setInput({
        name: "",        
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        min_life_span:'',
        life_span: '',
        image:'',
        temperament: []


    })
        setTemps([])
        
    }

    return (
        <div className={style.bg}>
        <div className={style.all}>
           
            <form onSubmit ={(e) =>{handleSubmit(e)}}>
                <fieldset>
                    <legend className={style.title} >Create your Puppy ❤</legend>
                        <div>
                            <input 
                                key = "name"
                                className={style.input}
                                placeholder='Name'
                                type='text'
                                name='name'
                                value={input.name}
                                onChange={(e) => handleChange(e)}
                                required>                                  
                            </input>
                        </div>
                        <div className={style.minMax}>
                                <input onChange={handleChange} className={style.input} name="min_weight" type="min_weight" value={input.min_weight} placeholder='Min_weight'
                                required/>
                                <input onChange={handleChange}  className={style.input}name="max_weight" type="max_weight" value={input.max_weight} placeholder='Max_weight'
                                required/>
            
                        </div>
                        <div className={style.minMax}>
            
                                <input className={style.input}onChange={handleChange} name="min_height" type="min_height" value={input.min_height} placeholder='Min-height'
                                required/>
                                <input className={style.input} onChange={handleChange} name="max_height" type="max_height" value={input.max_height} placeholder='Max-height'
                                required/>
                                
                        </div>
                        <div >
                            <input 
                                className={style.input}
                                placeholder='Life Span'
                                type='text'
                                name='life_span'
                                value={input.life_span}
                                onChange={(e) => handleChange(e)}
                                required>
                            </input>
                        </div>
                        <div>
                            <input 
                                className={style.input}
                                placeholder='Image'
                                type='text'
                                name='image'
                                value={input.image}
                                onChange={(e) => handleChange(e)}
                                >   

                            </input>
                        </div>
                        <div className={style.content}> 

                        <select name="temperaments" onChange={handleSelect}  type="text" >
                                    <option value={null}></option>
                                    {temperaments.map((e, id)=>{
                                    return (
                                        <option key={id} value={e.name}>{e.name}</option>
                                        )
                                    })}
                                </select>
                
                                { temps.map((e, id) =>{
                                    return ( 
                                        <React.Fragment key={id}>
                                            
                                            <div className={style.tempSelect}>{e}
                                            <button className={style.btnTemp} value={e} onClick={handleClick}>X</button>
                                            </div>
                            
                                        </React.Fragment>
                                        )
                                    })    
                                }
                            {/* <select 
                                className={style.temptContainer}
                                type='text'
                                name='temperament'
                                value={input.temperament}
                                onChange={(e) => handleSelect(e)}
                                required>
                                    <option value={input.temperament}>Temperaments</option>
                                
                                {temperament?.map((e,id) => (
                                        <option  
                                            className={style.l}                         value={e.name} 
                                            key={e.id}>                                   
                                            {e.name}
                                        </option>                                          
                                        ))                                 
                                    }
                                     
                            </select>   */}
                           {/*  <ul>
                                <li className={style.li}>{input.temperament.map(i => i + ", ")}</li>
                            </ul>      */}
                                 {/* {temperament.map((e,id)=>{
                                return(
                                    <React.Fragment key={id}>
                                        <ul>
                                <li className={style.li}>{input.temperament?.map(i => i + ", ")}</li>
                                <button value={e.name} onClick={handleClick}>x</button>
                                </ul>
                                </React.Fragment>)
                            })}                                */}
                        </div>

                        <button 
                            className={style.submit} 
                            type= "submit" 
                            name= "submit" 
                            >Create
                        </button>
                        <Link to='/home'><button className={style.back} >Back</button></Link><br/>                
                </fieldset>                
            </form>
        </div>
        </div>
    )

}