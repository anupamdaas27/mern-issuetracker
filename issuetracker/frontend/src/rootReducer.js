import  { ADD_ISSUE, EDIT_ISSUES,  REMOVE_ISSUE, GET_ISSUES, FILTER_ISSUES, DISPLAY_COLUMN_ISSUES, SEARCH_ISSUES } from './actionCreators';

const initialState = {
    issues : [],
    id:0,
    filterCategory: {},
    columnDisplay: [],
    searchText: ''
}

export default function rootReducer (state = initialState, action){

    switch(action.type){
        case GET_ISSUES:
            return {...state, issues: action.data}
        case ADD_ISSUE:
            return { ...state, issues: [...state.issues, action.issue]};
        case EDIT_ISSUES:  
            return {...state, issues: action.data};
        case REMOVE_ISSUE:
            let issues = state.issues.filter(val => val._id !== action.id);
            return { ...state, issues};
        case FILTER_ISSUES:
            return { ...state, filterCategory: action.data };
        case DISPLAY_COLUMN_ISSUES:
            return  {...state, columnDisplay: action.data}  
        case SEARCH_ISSUES:
            return  {...state, searchText: action.data}   
        default:
            return state;
    }
}