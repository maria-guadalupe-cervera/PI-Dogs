import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  byOrder,
  byOrderWeight,
  filterDogsCreated,
  filterByTemp,
  getTemperaments
} from "../../actions/index"; //importo las acciones
import Card from "../Card/Card";//importo las cartas de cada perro
import Paged from "../Paged/Paged";//importo el paginado}
import SearchBar from "../SearchBar/SearchBar";//importo el input de búsqueda
import style from "./Home.module.css";



export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  /* const temperaments=useSelector((state)=>state.temperament) */

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPage] = useState(8);
  const indexLastDog = currentPage * dogsPage;
  const indexFirstDog = indexLastDog - dogsPage;
  const currentDog = allDogs.slice(indexFirstDog, indexLastDog);
 
  const pagedTotal = (numPage) => {
    setCurrentPage(numPage);
  };

  const [order,setOrder] = useState("");

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getTemperaments())
  },[]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  function handleFilter(e) {
    e.preventDefault();
    dispatch(filterDogsCreated(e.target.value));
  }


  function handleOrder(e) {
    e.preventDefault();
    dispatch(byOrder(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }
  function handleOrderByWeight(e) {
    e.preventDefault();
    dispatch(byOrderWeight(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }
 /*  function handleFilterByTemp(e){
    e.preventDefault();
    dispatch(filterByTemp(e.target.value))
  } */
  /* console.log(temperaments) */

  return (
    <div className={style.containsAll}>
      <div className={style.nav}>
        <div className={style.head}>
          <h1>DOoGLE</h1>
        </div>
        <div className={style.created}>
          <Link style={{ textDecoration: "none" }} to="/dog">
            Add new dog
          </Link>
        </div>
        <button className={style.reload} onClick={(e) => handleClick(e)}>
          Refresh
        </button>
        <br />
        
        <select onClick={(e) => handleFilter(e)} className={style.selectAC}>
          <option value="All">All</option>
          <option value="Created">Created</option>
        </select>
        <div className={style.filterTemp}>
     {/*  <select className={style.temps} onChange={(e)=>handleFilterByTemp(e)}>
        <option value='All'>All Temperaments</option>
        {temperaments&&temperaments.map((e)=>{
          return(
            <option value={e.name}>{e.name}</option>
          )
        })}
        </select> */}
        </div>
        <div className={style.search}>
          <SearchBar />
        </div>
        <div className={style.order}>
          <div className={style.alf}>
            <h5>Order by alphabet:</h5>
            <select onClick={(e) => handleOrder(e)}>
              <option value="Asc">A-Z</option>
              <option value="Desc">Z-A</option>
            </select>
          </div>
          <div className={style.weight}>
            <h5>Order by weight:</h5>
            <select onClick={(e) => handleOrderByWeight(e)}>
              <option value="Weight 1">Small</option>
              <option value="Weight 2">Big</option>
            </select>
          </div>
        </div>
      </div>

      <div className={style.direccion}>
        {currentDog?.map((e) => {
          return (
            <div className={style.contenedor}>
              <NavLink style={{ textDecoration: "none" }} to={"/home" + e.id}>
                <Card
                  name={e.name}
                  image={e.image}
                  weight={e.weight}
                  temperament={
                    e.temperament
                      ? e.temperament
                      : e.temperaments &&
                        e.temperaments.map((t) => t.name.concat(" "))
                  }
                  key={e.id}
                />
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className={style.pagination}>
        <Paged
          dogsPage={dogsPage}
          allDogs={allDogs.length}
          pagedTotal={pagedTotal}
        />
      </div>
      <div className={style.btnBack}>
        <Link to="/">
          <button className={style.back}>Back</button>
        </Link>
      </div>
    </div>
  );
}
