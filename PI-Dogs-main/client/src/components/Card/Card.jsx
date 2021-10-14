import React from "react";
import style from'./Card.module.css';

export default function Card({name,image,temperament,weight}){//destucturin de la info de cada card
    return(
        <div>
        <div className={style.box}>
            <div className={style.ca}>
            <img className={style.image} src={image} alt='Not found'></img>
            <h4 className={style.breed}>{name}</h4>
         </div>
           <div className={style.overlay}>
               <div className={style.text}>
              <span>Weight:</span>
            <h3 className={style.peso}>
              {weight} (Lb)
            </h3>
           <span>Temperament:</span>
            <h2 className={style.titleTemps}>
            {temperament}
            </h2>
            </div>
            </div>
        </div>
        </div>
    )
};