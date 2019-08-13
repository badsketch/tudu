
const initialState = {
    todos: [
        { desc: 'get this to work', completed: true }
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
        case 'COMPLETE_TODO':
            return {
                todos: state.todos.map((todo, idx) => {
                    if (idx == action.index) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo;
                    }
                })
            }
        default: 
            return state;
    };
}
