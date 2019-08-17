import { combineReducers } from 'redux';

let todoListId = 2;

const columnsInitialState = [
    {
        id: 1,
        name: 'unassigned',
        items: [
            { desc: 'get this to work', completed: true },
            { desc: 'another', completed: false },
            { desc: 'one', completed: false },
            { desc: 'here', completed: false },
        ]
    },
    {
        id: 2,
        name: 'other',
        items: []
    }
]

// todo list column creation
function todolists(state = columnsInitialState, action) {
    switch (action.type) {
        case 'ADD_TODO_LIST':
            return [
                ...state,
                {
                    id: ++todoListId,
                    name: action.colName,
                    items: []
                }
            ]
        case 'ADD_TODO':
        case 'ADD_TODO_AT_INDEX':
        case 'REMOVE_TODO':
        case 'TOGGLE_TODO':        
            return state.map(column => {
                if (column.id === action.columnId) {
                    return {
                        ...column,
                        items: todos(column.items, action)
                    }
                } else {
                    return column;
                }
            })
        default:
            return state;
    }
} 

// todo creation and deletion
function todos(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { desc: action.text, completed: action.completed }
            ]
        case 'ADD_TODO_AT_INDEX':
            const temp = [
                ...state.slice(0, action.srcIndex),
                ...state.slice(action.srcIndex + 1)
            ]
            return [
                ...temp.slice(0, action.destIndex),
                { desc: action.text, completed: action.completed },
                ...temp.slice(action.destIndex)
            ]
        case 'REMOVE_TODO':

            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        case 'TOGGLE_TODO':
            return state.map((t, idx) => {
                if (idx === action.index) {
                    return todo(t, action);
                } else {
                    return t;
                }
            })
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


