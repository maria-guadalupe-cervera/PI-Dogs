import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getTemperaments, filterByTemp } from '../actions/index';


function Filter ({ temperaments, getTemperaments, filterByTemp }) {

  const [state, setState] = useState({
    temperament: ''
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    filterByTemp(state.temperament);
  }

  //se monta dos, porque? no hay porque.
  useEffect(() => {
    getTemperaments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <form className='select' onSubmit={(e) => handleSubmit(e)}>
      <div className='select__sub'>
        <h2 className='select__sub--title'>Filter by temperament</h2>
        <input className='select__input' onChange={(e) => handleChange(e)} name='temperament' list="temperaments" />
        <datalist id="temperamentos" >
          {temperaments.map((item, index) => <option key={index} value={item.name}></option>)}
        </datalist>
        <button type="submit">Search</button>
      </div>
    </form>
  )
}

function mapStateToProps(state) {
  return {
    temperaments: state.temperaments
  };
}

function mapDispatchToProps(dispatch) {
  return {
   filterByTemperament: name => dispatch(filterByTemp(name)),
    getTemperaments: () => dispatch(getTemperaments())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)