
const initialState = {
    todos: [
        { desc: 'get this to work', completed: false }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': 
            return {
                todos: [...state.todos, { desc: action.text, completed: false }]
            } 
        case 'REMOVE_TODO':
            return {
                todos: [...state.todos.slice(0, action.index), ...state.todos.slice(action.index + 1)]
            }
        default: 
            return state;
    };
}
