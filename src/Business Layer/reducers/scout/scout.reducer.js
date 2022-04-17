import scoutActionTypes from '../../actions/scout/scout.action.types';

const initialState = {
    scouts: [],
    scout: {},
    scoutsLoading: true,
    scoutLoading: true,
    error: null,

}


export default function scoutsReducer(state = initialState, action) {
    // console.log('scoutReducer', action);
    switch (action.type) {
        case scoutActionTypes.SCOUTS_LOADING:
            return {
                ...state,
                scoutsLoading: true,
                error: null
            }
        case scoutActionTypes.SCOUTS_LOADED:
            return {
                ...state,
                scouts: action.payload,
                scoutsLoading: false,
            };

        case scoutActionTypes.SCOUTS_LOADING_ERROR:
            return {
                ...state,
                scoutsLoading: false,
                error: action.payload,
            };

    // =======================================================

    case scoutActionTypes.SCOUT_LOADING:
        return {
            ...state,
            scoutLoading: true,
            error: null
        }
    case scoutActionTypes.SCOUT_LOADED:
        return {
            ...state,
            scout: action.payload,
            scoutLoading: false,
        };

    case scoutActionTypes.SCOUT_LOADING_ERROR:
        return {
            ...state,
            scoutLoading: false,
            error: action.payload,
        };
    
    default:
        return state;
    }
};



// const scoutsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case scoutActionTypes.GET_SCOUTS:
//             return {
//                 ...state,
//                 isLoading: true,
//             };

//         default:
//             return state;
//     }
// }

// export default function scoutsReducer(state = initialState, action) {
//     switch (action.type) {
//         case scoutActionTypes.GET_SCOUTS:
//             return {
//                 ...state,
//                 scouts: action.payload,
//                 loading: false,
//             };
        // case scoutActionTypes.GET_SCOUT:
        //     return {
        //         ...state,
        //         scout: action.payload,
        //         loading: false,
        //     };
        // case scoutActionTypes.CREATE_SCOUT:
        //     return {
        //         ...state,
        //         scouts: [...state.scouts, action.payload],
        //         loading: false,
        //     };
        // case scoutActionTypes.UPDATE_SCOUT:
        //     return {
        //         ...state,
        //         scouts: state.scouts.map(scout => scout.id === action.payload.id ? action.payload : scout),
        //         loading: false,
        //     };
        // case scoutActionTypes.DELETE_SCOUT:
        //     return {
        //         ...state,
        //         scouts: state.scouts.filter(scout => scout.id !== action.payload),
        //         loading: false,
        //     };
        // case scoutActionTypes.SCOUT_ERROR:
        //     return {
        //         ...state,
        //         error: action.payload,
        //         loading: false,
        //     };
//         default:
//             return state;
//     }
// }

