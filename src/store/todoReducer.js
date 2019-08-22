
const columnsInitialState = [
    {
        id: 1,
        name: 'unassigned',
        items: [
            // { id: 1, desc: 'get this to work', completed: true },
            { id: 2, desc: 'a', completed: false },
            // { id: 3, desc: 'b', completed: false },
        ]
    },
    {
        id: 2,
        name: 'other',
        items: [
            { id: 4, desc: 'x', completed: false },
            { id: 5, desc: 'z', completed: false },

        ]
    }
]

// todo list column creation
let todoListId = 2;
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
        case 'MOVE_TODO_TO_COLUMN':
            const dragCard = state.find(col => col.id === action.srcColumnId).items[action.srcIndex];
            return state.map(column => {
                if (column.id === action.srcColumnId) {
                    return {
                        ...column,
                        items: column.items.filter((it, idx) => idx !== action.srcIndex)
                    }
                } else if (column.id === action.destColumnId) {
                    return {
                        ...column,
                        items: [
                            ...column.items.slice(0, action.destIndex),
                            dragCard,
                            ...column.items.slice(action.destIndex)
                        ]
                    }
                } else {
                    return column;
                }
            })
        case 'ADD_TODO':
        case 'MOVE_TODO':
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
let todoId = 5;
function todos(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            if (action.index < 0) {
                return [
                    ...state,
                    { id: ++todoId, desc: action.text, completed: action.completed }
                ]
            } else {
                return [
                    ...state.slice(0, action.index),
                    { id: ++todoId, desc: action.text, completed: action.completed },
                    ...state.slice(action.index)
                ]
            }
        case 'MOVE_TODO':
            const temp = [
                ...state.slice(0, action.srcIndex),
                ...state.slice(action.srcIndex + 1)
            ]
            const dragCard = state[action.srcIndex];
            return [
                ...temp.slice(0, action.destIndex),
                dragCard,
                ...temp.slice(action.destIndex)
            ]
        case 'REMOVE_TODO':
            return state.filter(t => t.id !== action.index);
        case 'TOGGLE_TODO':
            return state.map(t => {
                if (t.id === action.index) {
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


export default todolists

