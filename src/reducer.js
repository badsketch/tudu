
const initialState = {
    columns: 
        {
            unassigned: [
                    { desc: 'get this to work', completed: true}
                ],
            woops: []
        },
    users: []
};

export const reducer = (state = initialState, action) => {
    console.log('prev: ', state);
    switch (action.type) {
        case 'ADD_TODO': 
            return {
                ...state,
                columns: {
                    ...state.columns,
                    [action.column]: [...state.columns[action.column], { desc: action.text, completed: false}]
                }
            } 
        case 'REMOVE_TODO':
            return {
                ...state,
                columns: {
                    ...state.columns,
                    [action.column]: [
                        ...state.columns[action.column].slice(0, action.index),
                        ...state.columns[action.column].slice(action.index + 1)
                    ]
                }
            }
        case 'COMPLETE_TODO':
            return {
                ...state,
                columns: {
                    ...state.columns,
                    [action.column] : state.columns[action.column].map((todo, idx) => {
                        if (idx === action.index) {
                            return {
                                ...todo,
                                completed: !todo.completed
                            }
                        } else {
                            return todo;
                        }
                    })
                }
            }
        default: 
            return state;
    };
}
