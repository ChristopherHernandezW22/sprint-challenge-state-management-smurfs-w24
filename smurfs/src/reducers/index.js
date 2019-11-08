import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, POST_SMURF_SUCCESS } from '../actions/index';

const initialState = {
    // store starts with empty array
    smurfs: []
};

const reducer = (state = initialState, action) => {
    // switch lets me check whats in action.type and leads to if/else
    // action.type contains FETCH_SMURF_SUCCESS
    switch(action.type) {
        // case FETCH_SMURF_START:
        //     return {
        //         ...state,
        //     };

        // if/else
        case FETCH_SMURF_SUCCESS:
            console.log("Run Log")
            console.log(action)
            // modifying store (particularly the array in line 5)
            return {
                // contains payload: res from FETCH_SMURF_SUCCESS
                // lets me change store to smurfs: action.payload (the array of all our smurfs)
                smurfs: action.payload
            }
            case POST_SMURF_SUCCESS:
                return {
                smurfs: action.payload
            }
            case FETCH_SMURF_FAIL:
                return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;