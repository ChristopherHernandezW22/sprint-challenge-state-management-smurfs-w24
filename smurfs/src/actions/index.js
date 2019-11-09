import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const getSmurf = () => {
    console.log('start getSmurf');
    // thunk lets you return another function
    return dispatch => {
        console.log('dispatch')
        dispatch({ type: FETCH_SMURF_START });
        axios
            // pulling data from...
            .get('http://localhost:3333/smurfs')
            // if successful, run this
            .then(res => {
                console.log(res);
                // taking data (res) and sent to reducer file and...
                // tagging it with FETCH_SMURF_SUCCESS
                dispatch({ type: FETCH_SMURF_SUCCESS, payload: res });
            })
            // if not successful, run this
            .catch(err => {
                console.log(err)
                dispatch({ type: FETCH_SMURF_FAIL, payload: err });
            });
    };
};

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: POST_SMURF_START });
    console.log('addSmurf step 1')
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: POST_SMURF_FAIL, payload: err.response });
            console.log('addSmurf step 3')
        });
};
