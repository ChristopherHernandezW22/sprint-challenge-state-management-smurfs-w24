import React, { useEffect, Component } from "react";
import "./App.css";
import { connect, useSelector } from 'react-redux';
import { getSmurf } from '../actions/index';

// import Smurf from './Smurf'
import SmurfsForm from './SmurfsForm';

// props on line 10, contains the smurfs: state.smurfs data
function App (props) {
  console.log(props);
  // useEffect is run after return is rendered
  useEffect(() => {
    // console.log('useEffect')
    // props.getSmurf is from actions
    props.getSmurf();
  }, []);

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {/* does props.smurfs.data exists? if it does, then map over it */}
        {/* updated from reducers file from FETCH_SMURF_SUCCESS */}
        {props.smurfs.data && props.smurfs.data.map(smurf=> {
          console.log(smurf);
          // key lets react keep track of each component that it creates
        return<SmurfComponent smurf={smurf} key={smurf.id} />
      })}
      <SmurfsForm />
      </div>
    );
}

const SmurfComponent = (props) => {
  console.log(props);
  return (
  <div>
    <p>{props.smurf.name},
       {props.smurf.age}, 
       {props.smurf.height}, 
       {props.smurf.id}</p>
  </div>
  )
}

// state represents the store coming from reducers (empty array)
// mapStateToProps allows you to only pick what you need. In this case, we only need smurfs (state.smurfs)
const mapStateToProps = state => {
  return {
    // state.smurfs is coming from state, and smurfs (left side) is just a madeup name
    smurfs: state.smurfs,
  };
};

// getSmurf is pulled from the actions
export default connect(mapStateToProps, {getSmurf})(App);
