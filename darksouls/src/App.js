import React, {useEffect} from 'react';
import {fetchWeapons,clearData} from './actions/weaponsActions';
import {Weapon} from './comps/weapon';
import { connect } from 'react-redux';
import './App.css';


const App = (props) => {

  if (props.loading) {
    return (<><h2>Loading....</h2></>)
  }

  return (
    <div className="App">
      <header>
        <h1>Dark Souls III weapons</h1>
      </header>
      <button onClick={()=> {props.fetchWeapons()}}>Reveal Arsenal</button>
      <div className='container'>
        {props.weapons.map(i => {
          <Weapon item={i}/>
        })}
      </div>
      
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    weapons: state.weapons,
    loading: state.loading,
    error: state.error,
  }
}

export default connect(mapStatetoProps,{fetchWeapons})(App);
