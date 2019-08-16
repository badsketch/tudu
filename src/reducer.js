import { combineReducers } from 'redux';

let todoId = 2;

const initialState = {
    unassigned: {
            1: { desc: 'get this to work', completed: true}
        }
};

// todo list column creation
function todolists(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO_LIST':
            return {
                ...state,
                [action.colName] : []
            }
        case 'ADD_TODO':
        case 'REMOVE_TODO':
        case 'TOGGLE_TODO':
            return {
                ...state,
                [action.column] : todos(state[action.column], action)
            }
        default:
            return state;
    }
} 

// todo creation and deletion
function todos(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                [++todoId] : { desc: action.text, completed: action.completed }
            }
        case 'REMOVE_TODO':
            const { [action.index]: value, ...theRest } = state
            return {
                ...theRest
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                [action.index]: todo(state[action.index], action)
            }
        default:
            return state
    }
}

// manages single todo interactions
function todo(state, action) {
    switch (action.type) {
        case 'TOGGLE_TODO':
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
}


export default combineReducers({
    columns: todolists,
})


