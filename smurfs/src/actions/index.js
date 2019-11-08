// import axios from 'axios';

// export const FETCH_SMURF_START = "FETCH_SMURF_START";
// export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
// export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

// export const getSmurf = () => dispatch => {
    
//     console.log('start getSmurf');
//     return dispatch => {
//         dispatch({ type: FETCH_SMURFS_START });
//         axios
//             .get('http://localhost:3000/smurfs')
//             .then(res => {
//                 // console.log(res);
//                 dispatch({ type: FETCH_SMURF_SUCCESS, payload: res });
//             })
//             .catch(err => {
//                 dispatch({ type: FETCH_SMURF_FAIL, payload: res  });
//             });
//     };
// };



