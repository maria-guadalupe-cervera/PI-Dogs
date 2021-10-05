import React from 'react';
import {Link} from 'react-router-dom';
import {postDogs,getTemperaments} from '../../actions/index';
import {useDispatch,useSelector} from 'react-redux' 
import {useState, useEffect} from 'react'; 
import style from './DogCreated.module.css'



export default function DogCreated (){ 
    const dispatch = useDispatch();
    const temperament = useSelector((state) => state.temperament)
       

    const [input,setInput] = useState({
        name: "",        
        height: "",
        weight: "",
        life_span: "",
        image:"",
        temperament: []
    })

    useEffect(() => {
        dispatch(getTemperaments());
        
    },[]);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
       
    };
    function handleSelect(e) {
            if (input.temperament.includes(e.target.value)) {
                alert("Repeated temperament, choose another");                
                
            }else{
                setInput((temps) => ({
                    ...temps,
                    temperament: [...temps.temperament, e.target.value],
                  }));
                
            }
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input) 
        dispatch(postDogs(input)); 
        alert('Doggie created!');
        setInput({
            name: "",
            height: "",
            weight: "",
            life_span: "",
            image:"",
            temperament: []


        })
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
                        <div>
                            <input 
                                className={style.input}
                                placeholder='Height Max - Height Min'
                                type='text'
                                name='height'
                                value={input.height}
                                onChange={(e) => handleChange(e)}
                                required> 
                            </input>
                           
                        </div>
                        <div>
                            <input 
                                className={style.input}
                                placeholder='Weight Max - Weight Min'
                                type='text'
                                name='weight'
                                value={input.weight}
                                onChange={(e) => handleChange(e)}
                                required>  
                            </input>
                        </div>
                        <div>
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
                                value={input.imagen}
                                onChange={(e) => handleChange(e)}
                                >   

                            </input>
                        </div>
                        <div className={style.content}> 
                            <select 
                                className={style.temptContainer}
                                type='text'
                                name='temperament'
                                value={input.temperament}
                                onChange={(e) => handleSelect(e)}
                                required>
                                    <option value={input.temperament}>Temperaments</option>
                                
                                {
                                    temperament?.map((e) => (
                                        <option  
                                            className={style.l}                                          
                                            value={e.name} 
                                            key={e.id}>                                   
                                            {e.name}
                                        </option>                                          
                                        ))                                 
                                    }
                            </select>  
                            <ul>
                                <li className={style.li}>{input.temperament.map(i => i + ", ")}</li>
                            </ul>                                          
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